import { QuestionType } from "../../types/app";
import Input from "../common/Input";
import OptionEditor from "./OptionEditor";

interface QuestionBodyEditorProps {
  type: QuestionType;
}

export default function QuestionBodyEditor({ type }: QuestionBodyEditorProps) {
  switch (type) {
    case "shortText":
    case "longText":
    case "multipleChoice":
    case "checkbox":
    case "dropdown":
      return <OptionEditor type={type}/>
    case "date":
    case "time":
      return <Input disabled/>
    default:
      return null;
  }
}
