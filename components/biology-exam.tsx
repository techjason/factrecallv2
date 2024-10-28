"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Textarea } from "./ui/textarea";
import { markAnswers } from "@/lib/markAnswers";

interface Question {
  question: string;
  markScheme: string;
  marks: number;
}

interface ExamProps {
  questions: Question[];
}

interface MarkingResult {
  marksAwarded: number;
  feedback: string;
}

export function BiologyExam({ questions = [] }: ExamProps) {
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [markingResults, setMarkingResults] = useState<MarkingResult[]>([]);

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (answers.some((answer) => answer.trim() === "")) {
      setError("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
    setError("");

    try {
      const results = await markAnswers(
        answers,
        questions.map((q) => q.question),
        questions.map((q) => q.markScheme)
      );
      setMarkingResults(results);
    } catch (error) {
      setError("An error occurred while marking your answers.");
      setSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto">
      <Card className="">
        {questions.map((q, index) => (
          <CardContent key={index} className="pt-6 flex flex-col gap-4">
            <Label htmlFor={`question-${index}`} className="">
              {q.question} ({q.marks} marks)
            </Label>
            <Textarea
              id={`question-${index}`}
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              disabled={submitted}
              className=""
              placeholder="Enter your answer here"
            />
            {submitted && (
              <>
                {markingResults[index] && (
                  <Alert
                    className="mt-2"
                    variant={
                      markingResults[index].marksAwarded === q.marks
                        ? "default"
                        : "destructive"
                    }
                  >
                    <AlertTitle>
                      Your Result: {markingResults[index].marksAwarded}/
                      {q.marks}
                    </AlertTitle>
                    <AlertDescription>
                      <p>Feedback: {markingResults[index].feedback}</p>
                      <p>Mark Scheme: {q.markScheme}</p>
                    </AlertDescription>
                  </Alert>
                )}
              </>
            )}
          </CardContent>
        ))}
        {error && (
          <div className="mx-6 mb-4">
            <Alert variant="destructive" className="mx-auto">
              {error}
            </Alert>
          </div>
        )}
        <CardFooter className="flex justify-center">
          <Button type="submit" disabled={submitted} className="w-full">
            {submitted ? "Submitted" : "Submit Answers"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
