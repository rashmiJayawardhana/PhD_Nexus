// FILE: src/components/content/chapter01/IntroductionSection03.tsx
import { IntroductionSection } from "../IntroductionSection";

export const IntroductionSection03: React.FC = () => (
  <IntroductionSection
    chapterNumber="03"
    description="The third chapter describes hierarchical controls for handling chemotherapy/ HDs. Learning outcomes and practical competencies related to respective content are outlined in Table."
    tableTitle="Learning Outcomes & Practice Competencies & Learning Content"
    rows={[
      [
        "Identify professional organizations and guidelines for handling chemotherapy\n\nOutline standards and Critically evaluate hierarchical controls for handling chemotherapy",
        "Increase awareness of professional organizations and standards in handling chemotherapy.\n\nRecognize hierarchical controls\n\nComply with safety regulations, legislation and guidelines in handling chemotherapy.\n\nProvide information and support, and act as a role model for others (peers and other HCWs) in safe handling of HDs",
        "Professional organizations and standard guidelines for handling chemotherapy\n\nStandards/ Hierarchical controls in handling HDs\n<ul><li>Eliminate/Substitute HDs</li>\n<li>Engineering controls</li>\n<li>Administrative controls</li>\n<li>PPE</li></ul>\nWork practices on the use of PPE appropriately"
      ]
    ]}
  />
);