// src/components/content/chapter01/TreatmentSection.tsx
import { DataSourceIndicator, useHybridContent } from "@/hooks/useHybridContent";
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";

const TREATMENT_FALLBACK = {
  intro: 'The well-known treatment modalities of cancer include surgery, radiotherapy, and drug therapies (chemotherapy, hormone therapy, targeted therapy, immunotherapy). The type of treatment depends on the cancer diagnosis (type and stage of cancer, organ type, condition of the cells). The principal goal of the treatment is improving the quality of life and/or overall survival.',
  treatmentTypesTable: {
    headers: { col0: "Treatment Type", col1: "Description" },
    rows: {
      row0: { col0: "Surgery", col1: "A surgical operation to remove cancer/body parts affected by cancer" },
      row1: { col0: "Radiotherapy", col1: "The use of controlled doses of radiation to destroy or damage cancer cells does not allow them to grow, multiply, or spread." },
      row2: { col0: "Drug Therapies", col1: "Chemotherapy - Kill cancer cells or slow their growth\nHormone therapy - Replace natural hormones in some types of cancer\nImmunotherapy - Affects the immune system (Harness power of the immune system to act against cancer)\nTargeted therapy - Target specific features of cancer cells to stop the growth or spread of cancer cells" },
      row3: { col0: "Other", col1: "Chemoradiation - Combined treatment of chemotherapy and radiotherapy\nStem cell transplant - Destroy blood cells by high-dose chemotherapy and replace healthy stem cells with blood cancers such as leukemia, lymphoma and myeloma" }
    }
  },
  therapiesTable: {
    title: 'Purpose-Based Cancer Therapies',
    headers: { col0: "Cancer Therapy", col1: "Description" },
    rows: {
      row0: { col0: "Adjuvant therapy", col1: "Use of drugs after their primary surgery. Useful to eradicate microscopic cancer cells" },
      row1: { col0: "Neoadjuvant therapy", col1: "Primarily used to shrink locally advanced and large cancers before surgery to facilitate the surgical resection" },
      row2: { col0: "Palliative therapy", col1: "Control of symptoms in advanced and incurable to improve quality of life and survival" },
      row3: { col0: "Systemic therapy", col1: "Kill and modify malignant cells, leaving the unharmed normal cells" }
    }
  }
};

// Helper functions to convert object format to array format
function headersToArray(headers: Record<string, string>): string[] {
  return Object.keys(headers)
    .sort()
    .map(key => headers[key]);
}

function rowsToArray(rows: Record<string, Record<string, string>>): string[][] {
  return Object.keys(rows)
    .sort()
    .map(rowKey => {
      const row = rows[rowKey];
      return Object.keys(row)
        .sort()
        .map(colKey => row[colKey]);
    });
}

export const TreatmentSection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-01',
    sectionId: 'treatment',
    fallbackData: TREATMENT_FALLBACK
  });

  // Convert object formats to array formats
  const treatmentHeaders = headersToArray(data.treatmentTypesTable.headers);
  const treatmentRows = rowsToArray(data.treatmentTypesTable.rows);
  const therapiesHeaders = headersToArray(data.therapiesTable.headers);
  const therapiesRows = rowsToArray(data.therapiesTable.rows);

  return (
    <>
      <DataSourceIndicator source={source} />
      <ContentCard title="Cancer Management" icon={<span className="text-2xl">💊</span>}>
        <p className="text-slate-700 leading-relaxed mb-6">{data.intro}</p>
        <h4 className="font-bold text-slate-900 mb-4">Cancer Treatment Types</h4>
        <DataTable 
          headers={treatmentHeaders}
          rows={treatmentRows}
        />
      </ContentCard>

      <ContentCard title={data.therapiesTable.title} variant="info">
        <DataTable 
          headers={therapiesHeaders}
          rows={therapiesRows}
        />
      </ContentCard>
    </>
  );
};
