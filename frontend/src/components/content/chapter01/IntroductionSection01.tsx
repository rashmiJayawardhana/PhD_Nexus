// FILE: src/components/content/chapter01/IntroductionSection01.tsx
import { IntroductionSection } from "../IntroductionSection";

export const IntroductionSection01: React.FC = () => (
  <IntroductionSection
    chapterNumber="01"
    description="The first chapter of this e-module provides an overview towards cancer by providing cancer definition, epidemiology, treatment methods, adverse drug effects, and related terminologies. It is useful in better understanding occupational exposure and best practices and recommendations for handling chemotherapy which are discussed in upcoming chapters of this e-module."
    tableTitle="Learning Outcomes & Practice Competencies & Learning Content"
    rows={[
      [
        "Define the term cancer\nDescribe cancer-related terminologies",
        "Define the term cancer\nExplain cancer-related terminologies",
        "Cancer definition and related terminologies"
      ],
      [
        "Describe the epidemiology of cancer",
        "Explain cancer epidemiology",
        "Prevalence of common cancers and death rates"
      ],
      [
        "Define the terminologies related to cancer therapy\n\nCritically evaluate the current cancer treatment methods\n\nDescribe how chemotherapy mainly acts in the human body",
        "Explain different cancer therapies\n\nExplain cancer treatments\n\nExplain the main mechanism of chemotherapy",
        "Cancer treatment methods: Surgery, Radiotherapy, Chemotherapy, other drugs and other treatment methods\n\nCancer therapies: Adjuvant, neoadjuvant, palliative and systemic therapy\n\nSelective and non-selective mechanisms of drugs"
      ],
      [
        "Identify adverse effects of anti-cancer drugs\n\nIdentify common classifications of adverse effects",
        "Explain common anti-cancer drugs and their adverse effects\n\nApply adverse effects-related knowledge in oncology nursing care (assess, educate, and support to management of adverse effects)",
        "Common anti-cancer drugs and classification of adverse effects (based on mechanism of drugs/ drug groups/ presenting time)"
      ]
    ]}
  />
);