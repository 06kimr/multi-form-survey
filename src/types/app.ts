import Question, { QuestionData } from "../models/question";

export type QuestionType =
  | "shortText"
  | "longText"
  | "multipleChoice"
  | "checkbox"
  | "dropdown"
  | "date"
  | "time";

export type SectionData = {
  id: number;
  title: string;
  questions: Question[];
  description: string;
};

export type SurveyResponse = Record<
  SectionData["id"],
  Record<QuestionData["id"], string>
>;

export type Statistics = Record<
  SectionData["id"],
  Record<QuestionData["id"], string[] | Record<string, number>>
>;