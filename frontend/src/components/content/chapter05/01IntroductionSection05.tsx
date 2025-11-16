// FILE: src/components/content/chapter05/01IntroductionSection05.tsx
// Updated to use hybrid content from Firebase
// ============================================

import { BookOpen, CheckCircle } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { DataTable } from "../DataTable";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';

// Fallback data - matches migration structure EXACTLY
const INTRO_FALLBACK = {
  chapterNumber: '05',
  description: 'The fifth chapter of this content describes barriers that contribute to safety precautions and occupational exposure and the impact of education towards safe practices.',
  note: 'Oncology nurses are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 05.',
  tableTitle: 'Learning Outcomes & Practice Competencies & Learning Content',
  tableRows: {
    headers: {
      col0: "Learning Outcomes",
      col1: "Practice Competencies",
      col2: "Learning Content"
    },
    rows: {
      row0: {
        col0: "Identify factors contributing to safety precautions and occupational exposure to chemotherapy and overcome those barriers.",
        col1: "Discuss contributing factors to safety precautions and occupational exposure to chemotherapy.\n\nTaking measures to mitigate the barriers contributing to safety precautions and occupational exposure to chemotherapy, and acting as a role model in ensuring occupational health",
        col2: "Factors contributing to safety precautions and occupational exposure to chemotherapy (workload, staff shortage, insufficient knowledge and training, practice, PPE, etc.)"
      },
      row1: {
        col0: "Discuss how education influences the safe handling of chemotherapy.",
        col1: "Increase desire to participate in related education interventions\n\nTake safety precautions to minimize occupational exposure to chemotherapy",
        col2: "Empirical studies on the impact of education programs on handling chemotherapy.\n\nContent of the current education intervention"
      }
    }
  }
};

// Helper function to convert table to array format
function tableToArray(table: { headers: Record<string, string>, rows: Record<string, Record<string, string>> }): { headers: string[], rows: string[][] } {
  const headers = Object.keys(table.headers)
    .sort()
    .map(colKey => table.headers[colKey]);
  
  const rows = Object.keys(table.rows)
    .sort()
    .map(rowKey => {
      const row = table.rows[rowKey];
      return Object.keys(row)
        .sort()
        .map(colKey => row[colKey]);
    });
  
  return { headers, rows };
}

export const IntroductionSection05: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-05',
    sectionId: 'intro',
    fallbackData: INTRO_FALLBACK
  });

  const table = tableToArray(data.tableRows);

  return (
    <>
      <DataSourceIndicator source={source} />
      
      <ContentCard 
        title={`Welcome to Chapter ${data.chapterNumber}: Introduction`} 
        icon={<BookOpen className="w-6 h-6 text-teal-600" />}
        variant="highlight"
      >
        <p className="text-slate-700 leading-relaxed mb-4 text-base">
          {data.description}
        </p>
        <InfoBox type="note">
          {data.note}
        </InfoBox>
      </ContentCard>

      <ContentCard title={data.tableTitle} icon={<CheckCircle className="w-6 h-6 text-green-600" />}>
        <DataTable 
          headers={table.headers}
          rows={table.rows}
        />
      </ContentCard>
    </>
  );
};