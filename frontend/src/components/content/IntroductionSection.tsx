// FILE: src/components/content/IntroductionSection.tsx
// Reusable Introduction Section for all chapters
// ============================================
import { BookOpen, CheckCircle } from "lucide-react";
import { ContentCard } from "./ContentCard";
import { InfoBox } from "./InfoBox";
import { DataTable } from "./DataTable";

interface ChapterIntroductionProps {
  chapterNumber: string;
  description: string;
  nurseNote: string;
  tableTitle: string;
  rows: string[][];
}

export const IntroductionSection: React.FC<ChapterIntroductionProps> = ({
  chapterNumber,
  description,
  nurseNote,
  tableTitle,
  rows
}) => (
  <>
    <ContentCard 
      title={`Welcome to Chapter ${chapterNumber}: Introduction`} 
      icon={<BookOpen className="w-6 h-6 text-teal-600" />}
      variant="highlight"
    >
      <p className="text-slate-700 leading-relaxed mb-4 text-base">
        {description}
      </p>
      <InfoBox type="note">
        <strong>Oncology nurses</strong> are expected to reach learning outcomes and practical competencies at the 
        end of the study of the learning content of Chapter {chapterNumber}.
      </InfoBox>
    </ContentCard>

    <ContentCard title={tableTitle} icon={<CheckCircle className="w-6 h-6 text-green-600" />}>
      <DataTable 
        headers={["Learning Outcomes", "Practice Competencies", "Learning Content"]}
        rows={rows}
      />
    </ContentCard>
  </>
);