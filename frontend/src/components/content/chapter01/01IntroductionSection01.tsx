// FILE: src/components/content/chapter01/IntroductionSection01.tsx
import { IntroductionSection } from "../IntroductionSection";
import { useHybridContent, DataSourceIndicator } from '@/hooks/useHybridContent';

const INTRO_FALLBACK = {
  chapterNumber: "01",
  description: "The first chapter of this e-module provides an overview towards cancer by providing cancer definition, epidemiology, treatment methods, adverse drug effects, and related terminologies. It is useful in better understanding occupational exposure and best practices and recommendations for handling chemotherapy which are discussed in upcoming chapters of this e-module.",
  note: "Oncology nurses are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 01.",
  tableTitle: "Learning Outcomes & Practice Competencies & Learning Content",
  tableRows: {
    headers: {
      col0: "Learning Outcomes",
      col1: "Practice Competencies",
      col2: "Learning Content"
    },
    rows: {
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
  }
};

// Helper function to convert table format to array format
function tableRowsToArray(tableRows: { headers: Record<string, string>, rows: Record<string, Record<string, string>> }): string[][] {
  // Extract headers first
  const headerRow = Object.keys(tableRows.headers)
    .sort() // col0, col1, col2
    .map(colKey => tableRows.headers[colKey]);
  
  // Extract data rows
  const dataRows = Object.keys(tableRows.rows)
    .sort() // row0, row1, row2, row3
    .map(rowKey => {
      const row = tableRows.rows[rowKey];
      return Object.keys(row)
        .sort() // col0, col1, col2
        .map(colKey => row[colKey]);
    });
  
  // Combine headers + data rows
  return [headerRow, ...dataRows];
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