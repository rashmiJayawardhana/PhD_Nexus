// src/components/content/chapter01/TreatmentSection.tsx
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";

export const TreatmentSection: React.FC = () => (
  <>
    <ContentCard 
      title="Cancer Management" 
      icon={<span className="text-2xl">💊</span>}
    >
      <p className="text-slate-700 leading-relaxed mb-6">
        The well-known treatment modalities of cancer include surgery, radiotherapy, and drug therapies 
        (chemotherapy, hormone therapy, targeted therapy, immunotherapy). The type of treatment depends on the 
        cancer diagnosis (type and stage of cancer, organ type, condition of the cells). The principal goal of 
        the treatment is improving the quality of life and/or overall survival.
      </p>

      <h4 className="font-bold text-slate-900 mb-4">Cancer Treatment Types</h4>
      <DataTable 
        headers={["Treatment Type", "Description"]}
        rows={[
          ["Surgery", "A surgical operation to remove cancer/body parts affected by cancer"],
          ["Radiotherapy", "The use of controlled doses of radiation to destroy or damage cancer cells does not allow them to grow, multiply, or spread."],
          ["Drug Therapies", "Chemotherapy - Kill cancer cells or slow their growth\nHormone therapy - Replace natural hormones in some types of cancer\nImmunotherapy - Affects the immune system (Harness power of the immune system to act against cancer)\nTargeted therapy - Target specific features of cancer cells to stop the growth or spread of cancer cells"],
          ["Other", "Chemoradiation - Combined treatment of chemotherapy and radiotherapy\nStem cell transplant - Destroy blood cells by high-dose chemotherapy and replace healthy stem cells with blood cancers such as leukemia, lymphoma and myeloma"]
        ]}
      />
    </ContentCard>

    <ContentCard title="Purpose-Based Cancer Therapies" variant="info">
      <DataTable 
        headers={["Cancer Therapy", "Description"]}
        rows={[
          ["Adjuvant therapy", "Use of drugs after their primary surgery. Useful to eradicate microscopic cancer cells"],
          ["Neoadjuvant therapy", "Primarily used to shrink locally advanced and large cancers before surgery to facilitate the surgical resection"],
          ["Palliative therapy", "Control of symptoms in advanced and incurable to improve quality of life and survival"],
          ["Systemic therapy", "Kill and modify malignant cells, leaving the unharmed normal cells"]
        ]}
      />
    </ContentCard>
  </>
);