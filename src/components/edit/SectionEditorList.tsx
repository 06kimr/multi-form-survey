import { observer } from "mobx-react-lite";
import { useSurveyStore } from "../../store";
import EditorMenu from "./EditorMenu";
import SectionEditor from "./SectionEditor";

const SectionEditorList = observer(function SectionEditorList() {
  const surveyStore = useSurveyStore();
  return (
    <div className="relative">
      <EditorMenu className="fixed bottom-30 left-[calc(100%-72px)] sm:bottom-auto sm:top-[248px]  sm:left-[calc(50%+340px)]" />
      <div>
        {surveyStore.sections.map((section, index) => (
          <SectionEditor
            key={section.id}
            section={section}
            onChangeFocus={surveyStore.setFocusedSectionId}
            capTitle={`${surveyStore.sections.length}게 증 ${index+1}섹션`}
          />
        ))}
      </div>
    </div>
  );
});
export default SectionEditorList;
