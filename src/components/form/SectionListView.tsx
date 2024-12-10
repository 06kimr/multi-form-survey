import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { useSurveyStore } from "../../store";
import SectionView from "./SectionView";

const SectionListView = observer(function SectionListView() {
  const surveyStsore = useSurveyStore();
  const [currentSection, setCurrentSection] = useState(0);
  const last = currentSection === surveyStsore.sections.length-1

  const data = useRef<object[]>([]);
  const handleNext = () => {
    if (last) {
      console.log(data.current);
      return;
    }
    setCurrentSection(currentSection + 1);
  };

  const saveData = (sectionData: object) => {
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
