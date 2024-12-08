import { observer } from "mobx-react-lite";
import { useSurveyStore } from "../../store";
import QuestionEditor from "./QuestionEditor";
import Section from "../../models/section";

interface Props {
  section: Section;
}

const SectionEditor = observer(function SectionEditor({section}:Props) {
  const surveyStore = useSurveyStore();

  return (

      <div>
        {section.questions.map((question) => (
          <QuestionEditor key={question.id} question={question} />
        ))}
      </div>
  );
});

export default SectionEditor;
