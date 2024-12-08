import { observer } from "mobx-react-lite";
import { useSurveyStore } from "../../store";
import QuestionEditor from "./QuestionEditor";
import Section from "../../models/section";
import SectionTitleEditor from "./SectionTitleEditor";

interface Props {
  section: Section;
  onChangeFocus: (id: number) => void;
  capTitle: string;
}

const SectionEditor = observer(function SectionEditor({
  section,
  onChangeFocus,
  capTitle,
}: Props) {
  const handleClickContainer = () => {
    onChangeFocus(section.id);
  };

  return (
    <div className="[&>*]:mb-24" onClick={handleClickContainer}>
      <SectionTitleEditor section={section} capTitle={capTitle} />
      {section.questions.map((question) => (
        <QuestionEditor
          key={question.id}
          question={question}
          onCopy={section.copyQuestion}
          onDelete={section.removeQuestion}
        />
      ))}
    </div>
  );
});

export default SectionEditor;
