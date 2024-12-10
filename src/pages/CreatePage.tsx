import { toJS } from "mobx";
import SectionListEditor from "../components/edit/SectionListEditor";
import { useSurveyStore } from "../store";
import callAPI from "../utils/api";
import Button from "../components/common/Button";
import { useNavigate } from "react-router";

export default function CreatePage() {
  const surveyStore = useSurveyStore();
  const navigate = useNavigate();

  const handleSubmit = () => {
    callAPI<{ id: number }>("/surveys", {
      method: "POST",
      body: toJS({ sections: surveyStore.sections }),
    }).then(({ id }) => {
      navigate(`/surveys/${id}/edit#send`);
    });
  };
  return (
    <>
      <Button className="absolute right-0 -top-30" onClick={handleSubmit}>
        보내기
      </Button>
      <SectionListEditor />
    </>
  );
}
