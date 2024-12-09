import Panel, { PanelBody, PanelFooter, PanelHeader } from "../common/Panel";
import CloseIcon from "../../assets/icons/close.svg?react";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import callAPI from "../../utils/api";

interface Props {
  surveyId: number;
  onClose: () => void;
  emailCollected: boolean;
}
export default function SendModalContent({
  onClose,
  surveyId,
  emailCollected,
}: Props) {
  const path = `${location.host}/surveys/${surveyId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(path);
    onClose();
  };

  const handleChangeEmailCollected = (value: boolean) => {
    callAPI(`/surveys/${surveyId}`, {
      method: "PATCH",
      body: {
        emailCollected: value,
      },
    });
  };

  return (
    <Panel className="text-gray900">
      <PanelHeader className="flex items-center justify-between mb-19">
        <h4 className="font-semibold text-20">설문지 보내기</h4>
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </PanelHeader>
      <PanelBody>
        <div className="flex items-center justify-between px-20 -mx-20 bg-bg py-13 mb-38">
          <span className="flex items-center justify-between font-medium text-16">
            이메일 수집
          </span>
          <Dropdown<boolean>
            defaultValue={emailCollected}
            options={[
              { label: "수집하지 않음", value: false },
              { label: "수집함", value: true },
            ]}
            onChange={handleChangeEmailCollected}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-17">링크</span>
          <p className="pb-16 font-medium pt-21 text-gray800 text-16">{`${location.host}/surveys/${surveyId}`}</p>
        </div>
      </PanelBody>
      <PanelFooter className="flex justify-end mt-26">
        <Button variant="tertiary" onClick={onClose}>
          취소
        </Button>
        <Button variant="secondary" onClick={handleCopy}>
          복사
        </Button>
      </PanelFooter>
    </Panel>
  );
}
