// FILE: src/components/content/chapter01/01IntroductionSection02.tsx
import { BookOpen, CheckCircle } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { DataTable } from "../DataTable";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';

// Fallback data
const INTRO_FALLBACK = {
  chapterNumber: '02',
  description: 'The second chapter of this content describes evidence of occupational exposure to chemotherapy, exposure routes, risk activities, and occupational exposure-related adverse effects present among HCWs.',
  note: 'Oncology nurses are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 02.',
  tableTitle: 'Learning Outcomes & Practice Competencies & Learning Content',
  tableRows: {
    headers: {
      col0: "Learning Outcomes",
      col1: "Practice Competencies",
      col2: "Learning Content"
    },
    rows: {
      row0: {
        col0: "Increase awareness of adverse effects of occupational exposure to chemotherapy\n\nIdentify the risk activities related to occupational exposure\n\nDescribe the adverse effects of chemotherapy present among HCWs\n\nDiscuss the factors that contribute to occupational exposure to chemotherapy",
        col1: "Increase awareness of occupational risk activities and possible adverse effects\n\nSelf-evaluation of the adverse effects of chemotherapy\n\nEnhance health-seeking behavior and medical surveillance on handling chemotherapy and other HDs\n\nIncrease awareness of the factors that contribute to occupational exposure and increase adherence to safety precautions.",
        col2: "Evidence of occupational exposure and adverse effects among HCWs\n\nAcute adverse effects - headache, nausea, vomiting, hypersensitivity, diarrhea, mucositis\n\nChronic adverse effects – Bone marrow suppression, organ toxicities, reproductive adverse effects\n\nChemotherapy exposure routes and risk activities\n\nFactors contributing to occupational exposure"
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

export const IntroductionSection02: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-02',
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
