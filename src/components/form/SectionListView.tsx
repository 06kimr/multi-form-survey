import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { useSurveyStore } from "../../store";
import SectionView from "./SectionView";
import { SectionData } from "../../types/app";
import { QuestionData } from "../../models/question";
import { useNavigate, useParams } from "react-router";
import callAPI from "../../utils/api";

const SectionListView = observer(function SectionListView() {
  const surveyStsore = useSurveyStore();
  const [currentSection, setCurrentSection] = useState(0);
  const last = currentSection === surveyStsore.sections.length - 1;
  const navigate = useNavigate();

  const data = useRef<
    Record<SectionData["id"], Record<QuestionData["id"], string | string[]>>
  >({});

  const { surveyId } = useParams<{ surveyId: string }>();
  const handleNext = async () => {
    if (last) {
      await callAPI(`/surveys/${surveyId}/responses`, {
        method: "POST",
        body: data.current,
      });
      navigate(
        `/surveys/${surveyId}/complete?title=${surveyStsore.sections[0].title}`
      );
      return;
    }
    setCurrentSection(currentSection + 1);
  };

  const saveData = (
    sectionData: Record<QuestionData["id"], string | string[]>
  ) => {
    data.current[currentSection] = sectionData;
  };

  return (
    <SectionView
      section={surveyStsore.sections[currentSection]}
      last={last}
      onSave={saveData}
      onNext={handleNext}
    />
  );
});

export default SectionListView;
