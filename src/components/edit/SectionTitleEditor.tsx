import { observer } from "mobx-react-lite";
import Section from "../../models/section";
import Input from "../common/Input";
import Panel, { PanelBody, PanelCap } from "../common/Panel";

interface Props {
  capTitle: string;
  section: Section;
}

const SectionTitleEditor = observer(function SectionTitleEditor({
  section,
  capTitle,
}: Props) {
  return (
    <div>
      <PanelCap>{capTitle}</PanelCap>
      <Panel>
        <PanelBody className="flex flex-col">
          <Input
            className="py-8 mb-2 font-semibold text-gray-900 text-24"
            value={section.title}
            onChange={(e) => section.setTitle(e.target.value)}
          />
          <Input
            className="py-3 text-gray-700 text-16"
            value={section.description}
            onChange={(e) => section.setDescription(e.target.value)}
          />
        </PanelBody>
      </Panel>
    </div>
  );
});

export default SectionTitleEditor;
