// src/data/emoduleContent/chapter1Data.ts
export const chapter1Data = {
  learningOutcomes: {
    outcomes: [
      "Define the term cancer and describe cancer-related terminologies",
      "Describe the epidemiology of cancer",
      "Define terminologies related to cancer therapy and critically evaluate current treatment methods",
      "Identify adverse effects of anti-cancer drugs and their classifications"
    ],
    competencies: [
      "Define cancer and explain cancer-related terminologies",
      "Explain cancer epidemiology",
      "Explain different cancer therapies, treatments, and mechanisms",
      "Apply adverse effects knowledge in oncology nursing care"
    ],
    content: [
      "Cancer definition and related terminologies",
      "Prevalence of common cancers and death rates",
      "Cancer treatment methods and therapies",
      "Common anti-cancer drugs and classification of adverse effects"
    ]
  },
  
  cancerOverview: {
    definition: "Cancer is the generic name for neoplasms/tumors. Tumors are of two types, benign and cancerous. Benign tumors grow slowly and usually do not invade other tissues or convert to cancer. Cancerous tumors are referred to as malignant tumors and demonstrate uncontrolled cell division and the potential to invade surrounding tissues by destroying normal cells. Cancers may be developed in solid or liquid tissues.",
    types: [
      { name: "Solid Cancers", description: "Abnormal cells create a mass or lump (e.g., breast and prostate cancers). Many types of cancers belong to solid cancers." },
      { name: "Liquid Cancers", description: "Abnormal cell buildup in blood, bone marrow, and lymphatic system (e.g., leukemia, myeloma)" },
      { name: "Primary Cancer", description: "First-developed cancer, localized, not tend to spread to other organs" },
      { name: "Secondary Cancer/Metastasis", description: "Growth of primary cancer at a new site with the distribution of cancer cells through blood and lymph" }
    ]
  },

  epidemiology: {
    globalStats: [
      "Cancer causes 1 in 6 deaths (16.8%) globally",
      "20 million new cases and 9.7 million deaths in 2022",
      "35 million new cases predicted by 2050 (77% increase)",
      "Lung cancer most prevalent globally (2.5M cases, 12.4%)",
      "Female breast cancer second (2.3M cases, 11.6%)"
    ],
    sriLanka: {
      males: "Oral (lip, tongue, mouth), trachea, bronchus and lung, colorectal (colon and rectum), esophagus, and prostate cancers were common. Lip, tongue, and mouth cancers represented 15% of all male cancers.",
      females: "Breast, thyroid, colon, ovarian, and cervical cancers were commonly prevalent. Breast cancers were prominent at 27% of all female cancers."
    }
  }
};