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

export function BiologyExam({ questions = [] }: ExamProps) {
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answers.some((answer) => answer.trim() === "")) {
      setError("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
    setError("");
    markAnswers(
      answers,
      questions.map((q) => q.question),
      questions.map((q) => q.markScheme)
    );
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
              <Alert className="mt-4">
                <AlertTitle>Mark Scheme Answer:</AlertTitle>
                <AlertDescription>{q.markScheme}</AlertDescription>
              </Alert>
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
