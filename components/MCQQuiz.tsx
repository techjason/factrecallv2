"use client";

import { useState } from "react";
import { Button } from "./ui/button";

interface MCQQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface MCQQuizProps {
  questions: MCQQuestion[];
}

export function MCQQuiz({ questions }: MCQQuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    new Array(questions.length).fill(-1)
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
  };

  return (
    <div className="space-y-6 my-8">
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="p-4 border rounded-lg">
          <p className="font-medium mb-3">{question.question}</p>
          <div className="space-y-2">
            {question.options.map((option, oIndex) => (
              <label
                key={oIndex}
                className={`block p-3 border rounded cursor-pointer hover:bg-gray-50 ${
                  selectedAnswers[qIndex] === oIndex
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                } ${
                  showResults
                    ? oIndex === question.correctAnswer
                      ? "border-green-500 bg-green-50"
                      : selectedAnswers[qIndex] === oIndex
                      ? "border-red-500 bg-red-50"
                      : ""
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  className="hidden"
                  checked={selectedAnswers[qIndex] === oIndex}
                  onChange={() => handleAnswerSelect(qIndex, oIndex)}
                  disabled={showResults}
                />
                {option}
              </label>
            ))}
          </div>
          {showResults && question.explanation && (
            <p className="mt-3 text-sm text-gray-600">{question.explanation}</p>
          )}
        </div>
      ))}
      <div className="flex gap-4">
        {!showResults ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswers.includes(-1)}
          >
            Check Answers
          </Button>
        ) : (
          <Button
            onClick={handleReset}
            disabled
            // className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}
