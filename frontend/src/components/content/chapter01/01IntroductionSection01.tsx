// FILE: src/components/content/chapter01/IntroductionSection01.tsx
import { IntroductionSection } from "../IntroductionSection";
import { useHybridContent, DataSourceIndicator } from '@/hooks/useHybridContent';

const INTRO_FALLBACK = {
  chapterNumber: "01",
  description: "The first chapter of this e-module provides an overview towards cancer by providing cancer definition, epidemiology, treatment methods, adverse drug effects, and related terminologies. It is useful in better understanding occupational exposure and best practices and recommendations for handling chemotherapy which are discussed in upcoming chapters of this e-module.",
  tableTitle: "Learning Outcomes & Practice Competencies & Learning Content",
  tableRows: {
    row0: {
      col0: "Define the term cancer\nDescribe cancer-related terminologies",
      col1: "Define the term cancer\nExplain cancer-related terminologies",
      col2: "Cancer definition and related terminologies"
    },
    row1: {
      col0: "Describe the epidemiology of cancer",
      col1: "Explain cancer epidemiology",
      col2: "Prevalence of common cancers and death rates"
    },
    row2: {
      col0: "Define the terminologies related to cancer therapy\n\nCritically evaluate the current cancer treatment methods\n\nDescribe how chemotherapy mainly acts in the human body",
      col1: "Explain different cancer therapies\n\nExplain cancer treatments\n\nExplain the main mechanism of chemotherapy",
      col2: "Cancer treatment methods: Surgery, Radiotherapy, Chemotherapy, other drugs and other treatment methods\n\nCancer therapies: Adjuvant, neoadjuvant, palliative and systemic therapy\n\nSelective and non-selective mechanisms of drugs"
    },
    row3: {
      col0: "Identify adverse effects of anti-cancer drugs\n\nIdentify common classifications of adverse effects",
      col1: "Explain common anti-cancer drugs and their adverse effects\n\nApply adverse effects-related knowledge in oncology nursing care (assess, educate, and support to management of adverse effects)",
      col2: "Common anti-cancer drugs and classification of adverse effects (based on mechanism of drugs/ drug groups/ presenting time)"
    }
  }
};

// Helper function to convert object format to array format
function tableRowsToArray(tableRows: Record<string, Record<string, string>>): string[][] {
  return Object.keys(tableRows)
    .sort() // Ensure correct order (row0, row1, row2, row3)
    .map(rowKey => {
      const row = tableRows[rowKey];
      return Object.keys(row)
        .sort() // Ensure correct order (col0, col1, col2)
        .map(colKey => row[colKey]);
    });
}

export const IntroductionSection01: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-01',
    sectionId: 'intro',
    fallbackData: INTRO_FALLBACK
  });

  // Convert object format to array format for component
  const rows = tableRowsToArray(data.tableRows);

  return (
    <>
      <DataSourceIndicator source={source} />
      <IntroductionSection
        chapterNumber={data.chapterNumber}
        description={data.description}
        tableTitle={data.tableTitle}
        rows={rows}
      />
    </>
  );
};