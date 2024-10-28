"use server";

import { generateObject } from "ai";
import { z } from "zod";
import { azure } from "./azure";

export const markAnswers = async (
  answers: string[],
  questions: string[],
  markScheme: string[]
) => {
  console.log(questions, markScheme, answers);
  const { object } = await generateObject({
    model: azure("gpt-4o-mini"),
    output: "array",
    schema: z.object({
      marksAwarded: z.number(),
      feedback: z.string(),
    }),
    prompt: `Mark the following answers. 
    Questions: ${questions.join("\n")}
    Mark Scheme: ${markScheme.join("\n")}
    Answers: ${answers.join("\n")}
    `,
  });

  return object;
};
