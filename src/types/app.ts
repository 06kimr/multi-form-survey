import Question from "../models/question";

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

  
  