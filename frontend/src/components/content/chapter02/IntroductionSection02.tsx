// FILE: src/components/content/chapter01/IntroductionSection02.tsx
import { IntroductionSection } from "../IntroductionSection";

export const IntroductionSection02: React.FC = () => (
  <IntroductionSection
    chapterNumber="02"
    description="The second chapter of this module describes evidence of occupational exposure to chemotherapy, exposure routes, risk activities, and occupational exposure-related adverse effects present among HCWs. After studying the learning material listed in Table 6, oncology nurses should have achieved the learning objectives and practical competence."
    nurseNote="are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 02."
    tableTitle="Learning Outcomes & Practice Competencies & Learning Content"
    rows={[
      [
        "Increase awareness of adverse effects of occupational exposure to chemotherapy\n\nIdentify the risk activities related to occupational exposure\n\nDescribe the adverse effects of chemotherapy present among HCWs\n\nDiscuss the factors that contribute to occupational exposure to chemotherapy",
        "Increase awareness of occupational risk activities and possible adverse effects\n\nSelf-evaluation of the adverse effects of chemotherapy\n\nEnhance health-seeking behavior and medical surveillance on handling chemotherapy and other HDs\n\nIncrease awareness of the factors that contribute to occupational exposure and increase adherence to safety measures to minimize the risk",
        "Evidence of occupational exposure and adverse effects among HCWs\n\nAcute adverse effects - headache, nausea, vomiting, hypersensitivity, diarrhea, mucositis\n\nChronic adverse effects – Bone marrow suppression, organ toxicities, reproductive adverse effects\n\nChemotherapy exposure routes and risk activities\n\nFactors contributing to occupational exposure"
      ]
    ]}
  />
);