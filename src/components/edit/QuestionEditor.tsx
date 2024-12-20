import { observer } from "mobx-react-lite";
import Question from "../../models/question";
import Input from "../common/Input";
import Panel, { PanelBody, PanelFooter, PanelHeader } from "../common/Panel";
import QuestionBodyEditor from "./QuestionBodyEditor";
import QuestionTypeEditor from "./QuestionTypeEditor";

import CopyIcon from "../../assets/icons/filter_none.svg?react";
import DeleteIcon from "../../assets/icons/delete.svg?react";
import Divider from "../common/Divider";
import Switch from "../common/Switch";

interface Props {
  question: Question;
  onCopy: (id: number) => void;
  onDelete: (id: number) => void;
}

const QuestionEditor = observer(function QuestionEditor({
  question,
  onCopy,
  onDelete,
}: Props) {
  return (
    <Panel className="focus-within:border-l-main border-l-transparent border-l-10">
      <PanelHeader className="flex mb-25">
        <Input
          className="flex-1 mr-30"
          value={question.title}
          onChange={(e) => question.setTitle(e.target.value)}
        />
        <QuestionTypeEditor type={question.type} onChange={question.setType} />
      </PanelHeader>
      <PanelBody>
        <QuestionBodyEditor question={question} />
      </PanelBody>
      <PanelFooter className="flex justify-end h-24 mt-20 gap-x-24">
        <button onClick={() => onCopy(question.id)}>
          <CopyIcon />
        </button>
        <button onClick={() => onDelete(question.id)}>
          <DeleteIcon />
        </button>
        <Divider direction="vertical" />
        <div className="flex items-center">
          <span className="mr-13">필수</span>
          <Switch
            checked={question.required}
            onChange={question.setRequired}
            id={`${question.id}_switch`}
          />
        </div>
      </PanelFooter>
    </Panel>
  );
});

export default QuestionEditor;
