import { toJS } from "mobx";
import SectionEditorList from "../components/edit/SectionEditorList";
import { useSurveyStore } from "../store";
import callAPI from "../utils/api";

export default function CreatePage() {
  const surveyStore = useSurveyStore();
  const handleSubmit = () => {
    callAPI("/surveys", {
      method: "POST",
      body: toJS({ sections: surveyStore.sections }),
    });
  };
  return (
    <>
      <div>
        <button onClick={handleSubmit}>보내기</button>
      </div>
      <SectionEditorList />
    </>
  );
}
