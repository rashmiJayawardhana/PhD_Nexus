// FILE: src/components/content/chapter01/IntroductionSection05.tsx
import { IntroductionSection } from "../IntroductionSection";

export const IntroductionSection05: React.FC = () => (
  <IntroductionSection
    chapterNumber="05"
    description="The fifth chapter of this e-module describes barriers that contribute to safety precautions and occupational exposure and the impact of education towards safe practices. Oncology nurses are expected to reach learning outcomes and practice competencies after following this chapter."
    tableTitle="Learning Outcomes & Practice Competencies & Learning Content"
    rows={[
      [
        "Identify factors influencing safe handling and occupational exposure to chemotherapy.\n\nAware of the measures that need to be taken to minimize the barriers that contribute to handling and occupational exposure to chemotherapy",
        "Discuss factors influencing safe handling, occupational exposure to chemotherapy\n\nTaking measures to mitigate the identified barriers to safe handling and occupational exposure to chemotherapy\n\nAct as a role model for peers and other HCWs in the safe handling of chemotherapy",
        "Factors influencing safe handling and occupational exposure to chemotherapy (workload, staff shortage, knowledge deficit, insufficient training, practice, PPE and administrative support)"
      ],
      [
        "Discuss how education influences the safe handling of chemotherapy",
        "Increase desire to participate in education interventions on the safe handling of chemotherapy\n\nEncourage them to participate in continuous learning opportunities\n\nTake safety precautions to minimize occupational exposure to chemotherapy",
        "Empirical studies on the impact of education programs towards handling chemotherapy"
      ]
    ]}
  />
);