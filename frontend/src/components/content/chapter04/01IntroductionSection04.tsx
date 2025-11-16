// FILE: src/components/content/chapter04/01IntroductionSection04.tsx (Updated)
import { BookOpen, CheckCircle } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { DataTable } from "../DataTable";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';

const INTRO_FALLBACK = {
  chapterNumber: '04',
  description: 'The fourth chapter of this content describes detailed recommendations for safe handling of chemotherapy and other hazardous drugs.',
  note: 'Oncology nurses are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 04.',
  tableTitle: 'Learning Outcomes & Practice Competencies & Learning Content',
  tableRows: {
    _order: 1,
    headers: {
      col0: "Topic",
      col1: "Key Areas Covered"
    },
    rows: {
      row0: { col0: "Receiving, distribution, and storage of HDs", col1: "Safety precautions and storage requirements" },
      row1: { col0: "Compounding HDs", col1: "Work practices and technical requirements" },
      row2: { col0: "Transport compounded HDs", col1: "Safe transportation methods" },
      row3: { col0: "Administration of chemotherapy", col1: "Parenteral, oral, and topical administration" },
      row4: { col0: "Disposal of waste", col1: "Waste types and disposal procedures" },
      row5: { col0: "Cleaning and decontamination of HD equipment and work surfaces", col1: "Deactivation and cleaning procedures" },
      row6: { col0: "Deactivation renders a compound inert or inactive", col1: "Chemical deactivation methods" },
      row7: { col0: "Cleaning HD Spills", col1: "Spill management procedures" },
      row8: { col0: "Handling of contaminated bed linen", col1: "Safe handling practices" },
      row9: { col0: "Recommendations to avoid exposure during pregnancy", col1: "Protective reassignment" },
      row10: { col0: "Emergency procedures for personnel contamination", col1: "Response protocols" },
      row11: { col0: "Training personnel in handling HDs", col1: "Education requirements" },
      row12: { col0: "Medical Surveillance", col1: "Health monitoring programs" }
    }
  }
};

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

export const IntroductionSection04: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-04',
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