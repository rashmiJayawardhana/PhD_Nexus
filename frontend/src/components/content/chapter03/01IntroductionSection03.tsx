// FILE: src/components/content/chapter03/01IntroductionSection03.tsx
import { BookOpen, CheckCircle } from "lucide-react";
import { ContentCard } from "../ContentCard";
import { InfoBox } from "../InfoBox";
import { DataTable } from "../DataTable";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';

const INTRO_FALLBACK = {
  chapterNumber: '03',
  description: 'The third chapter describes hierarchical controls for handling chemotherapy/ HDs. Learning outcomes and practical competencies related to respective content are outlined in Table.',
  note: 'Oncology nurses are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 03.',
  tableTitle: 'Learning Outcomes & Practice Competencies & Learning Content',
  tableRows: {
    headers: {
      col0: "Learning Outcomes",
      col1: "Practice Competencies",
      col2: "Learning Content"
    },
    rows: {
      row0: {
        col0: "Identify professional organizations and guidelines for handling chemotherapy\n\nOutline standards and Critically evaluate hierarchical controls for handling chemotherapy",
        col1: "Increase awareness of professional organizations and standards in handling chemotherapy.\n\nRecognize hierarchical controls\n\nComply with safety regulations, legislation and guidelines in handling chemotherapy.\n\nProvide information and support, and act as a role model for others (peers and other HCWs) in safe handling of HDs",
        col2: "Professional organizations and standard guidelines for handling chemotherapy\n\nStandards/ Hierarchical controls in handling HDs\n<ul><li>Eliminate/Substitute HDs</li>\n<li>Engineering controls</li>\n<li>Administrative controls</li>\n<li>PPE</li></ul>\nWork practices on the use of PPE appropriately"
      }
    }
  }
};

function tableToArray(table: { headers: Record<string, string>, rows: Record<string, Record<string, string>> }): { headers: string[], rows: string[][] } {
  const headers = Object.keys(table.headers).sort().map(k => table.headers[k]);
  const rows = Object.keys(table.rows).sort().map(rowKey => {
    const row = table.rows[rowKey];
    return Object.keys(row).sort().map(k => row[k]);
  });
  return { headers, rows };
}

export const IntroductionSection03: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-03',
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