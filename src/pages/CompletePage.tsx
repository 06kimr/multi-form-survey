import { Link, useParams, useSearchParams } from "react-router";
import Panel, {
  PanelBody,
  PanelCap,
  PanelHeader,
} from "../components/common/Panel";

export default function CompletePage() {
  const [searchParams] = useSearchParams();
  const { surveyId } = useParams<{ surveyId: string }>();
  return (
    <div>
      <PanelCap />
      <Panel className="text-gray900">
        <PanelHeader className="mb-12 font-semibold text-24">
          <h5>{searchParams.get("title") ?? "설문완료"}</h5>
        </PanelHeader>
        <PanelBody>
          <p className="mb-17">응답이 기록되었습니다.</p>
          <Link
            className="text-blue-500 border-b-blue-500 border-b-1"
            to={`/surveys/${surveyId}`}
          >
            다른 응답 제출
          </Link>
        </PanelBody>
      </Panel>
    </div>
  );
}
