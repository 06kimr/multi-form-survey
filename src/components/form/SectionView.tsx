import { FormProvider, useForm } from "react-hook-form";
import Section from "../../models/section";
import Button from "../common/Button";
import QuestionView from "./QuestionView";
import SectionTitleView from "./SectionTitleView";

interface Props {
  section: Section;
  last: boolean;
  onSave: (data: object) => void;
  onNext: () => void;
}
export default function SectionView({ section, last, onSave, onNext }: Props) {
  const methods = useForm();

  const handleSubmitData = (data: object) => {
    onSave(data);
    onNext();
  };

  return (
    <FormProvider {...methods}>
      <form className="text-gray900 [&>*]:mb-24" onSubmit={methods.handleSubmit(handleSubmitData)}>
        <SectionTitleView section={section} />
        {section.questions.map((q) => (
          <QuestionView key={q.id} question={q} />
        ))}
        <Button type="submit">{last ? "제출" : "다음"}</Button>
      </form>
    </FormProvider>
  );
}