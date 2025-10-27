// FILE: src/components/content/chapter01/IntroductionSection03.tsx
import { IntroductionSection } from "../IntroductionSection";

export const IntroductionSection03: React.FC = () => (
  <IntroductionSection
    chapterNumber="03"
    description="The third chapter describes hierarchical controls for handling chemotherapy/ HDs. Learning outcomes and practical competencies related to respective content are outlined in Table."
    tableTitle="Learning Outcomes & Practice Competencies & Learning Content"
    rows={[
      [
        "Identify popular professional organizations and standard guidelines for handling chemotherapy\n\nOutline standards related to the oncology nursing practice\n\nCritically evaluate hierarchical controls for handling chemotherapy\n\nCritically evaluate types, standards, and work practices on the use of PPE in handling chemotherapy",
        "Increase awareness of professional organizations and standards in handling chemotherapy\n\nRecognize hierarchical controls in handling chemotherapy\n\nTake safety precautions to minimize occupational exposure to chemotherapy\n\nComply with local and international safety regulations, legislation and guidelines in handling chemotherapy\n\nAppropriate use of PPE\n\nProvide information and support, and act as a role model for others (peers and for other HCWs) to ensure safe practice in healthcare settings",
        "Professional organizations and standard guidelines in handling chemotherapy\n\nStandards related to the oncology nursing practice\n\nHierarchical controls in handling HDs\n<ul><li>Eliminate/Substitute HDs</li>\n<li>Engineering controls</li>\n<li>Administrative controls</li>\n<li>PPE</li></ul>\nWork practices on the use of PPE appropriately "
      ]
    ]}
  />
);