import Section from "../../models/section";
import Panel, { PanelBody, PanelCap } from "../common/Panel";

interface Props {
  section: Section;
}

function SectionTitleView({ section }: Props) {
  return (
    <div>
      <PanelCap />
      <Panel>
        <PanelBody className="flex flex-col">
          <h4 className="mb-2 font-semibold text-gray-900 text-24">
            {section.title}
          </h4>
          <p className="text-gray-700 text-16">{section.description}</p>
        </PanelBody>
      </Panel>
    </div>
  );
}

export default SectionTitleView;
