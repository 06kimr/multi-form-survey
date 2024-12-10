import { useFormContext } from "react-hook-form";
import Question from "../../models/question";
import Panel, { PanelBody, PanelHeader } from "../common/Panel";
import QuestionForm from "./QuestionForm";
import cn from 'classnames'

interface Props {
  question: Question;
}

export default function QuestionView({ question }: Props) {
  const {formState: {errors}} = useFormContext();
  return (
    <Panel className={cn({'border-red-500 border-2': errors[question.id]})}>
      <PanelHeader className="flex mb-31">
        <h6 className="font-medium text-16 text-gray900">{question.title}</h6>
      </PanelHeader>
      <PanelBody>
        <QuestionForm question={question} />
        {errors[question.id] && (
          <p className="mt-10 text-red-500 text-14">{errors[question.id]?.message?.toString() || "필수 항목입니다."}</p>
        )}
      </PanelBody>
    </Panel>
  );
}
