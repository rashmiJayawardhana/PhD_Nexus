// FILE: src/components/content/chapter01/IntroductionSection05.tsx
import { IntroductionSection } from "../IntroductionSection";

export const IntroductionSection05: React.FC = () => (
  <IntroductionSection
    chapterNumber="05"
    description="The fifth chapter of this content describes barriers that contribute to safety precautions and occupational exposure and the impact of education towards safe practices."
    tableTitle="Learning Outcomes & Practice Competencies & Learning Content"
    rows={[
      [
        "Identify factors contributing to safety precautions and occupational exposure to chemotherapy and overcome those barriers.",
        "Discuss contributing factors to safety precautions and occupational exposure to chemotherapy.\n\nTaking measures to mitigate the barriers contributing to safety precautions and occupational exposure to chemotherapy, and acting as a role model in ensuring occupational health",
        "Factors contributing to safety precautions and occupational exposure to chemotherapy (workload, staff shortage, insufficient knowledge and training, practice, PPE, etc.)"
      ],
      [
        "Discuss how education influences the safe handling of chemotherapy.",
        "Increase desire to participate in related education interventions\n\nTake safety precautions to minimize occupational exposure to chemotherapy",
        "Empirical studies on the impact of education programs on handling chemotherapy.\n\nContent of the current education intervention"
      ]
    ]}
  />
);