// FILE: src/data/content/referencesData.ts
// Complete references data from document
// ============================================

export interface ReferenceItem {
  number: number;
  authors: string;
  title: string;
  publication: string;
  year: string;
  doi?: string;
  url?: string;
}

export const referencesData: ReferenceItem[] = [
  {
    number: 1,
    authors: "Cancer Council Australia",
    title: "Understanding Chemotherapy",
    publication: "Cancer Council Australia",
    year: "2024"
  },
  {
    number: 2,
    authors: "Basak D, Arrighi S, Darwiche Y, Deb S",
    title: "Comparison of Anticancer Drug Toxicities: Paradigm Shift in Adverse Effect Profile",
    publication: "Life",
    year: "2022",
    doi: "10.3390/life12010048"
  },
  {
    number: 3,
    authors: "Bray F, Laversanne M, Sung H, et al",
    title: "Global cancer statistics 2022: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries",
    publication: "CA Cancer J Clin",
    year: "2024",
    doi: "10.3322/caac.21834"
  },
  {
    number: 4,
    authors: "Various",
    title: "Global cancer burden growing, amidst mounting need for services",
    publication: "Saudi Med J",
    year: "2024"
  },
  {
    number: 5,
    authors: "National Cancer Control Program, Ministry of Health, Sri Lanka",
    title: "Cancer Incidence & Mortality Data Sri Lanka 2021",
    publication: "Ministry of Health, Sri Lanka",
    year: "2021"
  },
  {
    number: 6,
    authors: "Arunachalam SS, Shetty AP, Panniyadi N, et al",
    title: "Study on knowledge of chemotherapy's adverse effects and their self-care ability to manage - The impact on cancer survivors",
    publication: "Clin Epidemiol Glob Health",
    year: "2021",
    doi: "10.1016/j.cegh.2021.100765"
  },
  {
    number: 7,
    authors: "Bachelard CM, Coquan E, Rusquec P du, Paoletti X, Tourneau C Le",
    title: "Risks and benefits of anticancer drugs in advanced cancer patients: A systematic review and meta-analysis",
    publication: "EClinicalMedicine",
    year: "2021",
    doi: "10.1016/j.eclinm.2021.101130"
  },
  {
    number: 8,
    authors: "Bennett PN, Brown MJ, Sharma P",
    title: "Clinical Pharmacology",
    publication: "Elsevier, 11th ed.",
    year: "2012"
  },
  {
    number: 9,
    authors: "SA Health, Australia Government of South",
    title: "Safe Handling - Cytotoxic Drugs and Related Waste - A Risk Management Guide for South Australian Health Services",
    publication: "SA Health",
    year: "2015",
    url: "http://www.sahealth.sa.gov.au/wps/wcm/connect/f8aa68004b3f6cf6a340afe79043faf0/Safe+Handling+Cytotoxic+Guidelines.pdf"
  },
  {
    number: 10,
    authors: "Oncology Nursing Society",
    title: "Toolkit for Safe Handling of Hazardous Drugs for Nurses in Oncology",
    publication: "Oncology Nursing Society",
    year: "2018"
  },
  {
    number: 11,
    authors: "PAHO",
    title: "Safe Handling of Hazardous Chemotherapy Drugs in Limited-Resource Settings",
    publication: "Pan American Health Organization",
    year: "2013",
    url: "https://iris.paho.org/handle/10665.2/28554"
  },
  {
    number: 12,
    authors: "NIOSH",
    title: "NIOSH Alert: Preventing Occupational Exposures to Antineoplastic and Other Hazardous Drugs in Health Care Settings",
    publication: "DHHS (NIOSH) Publication No. 2004-165",
    year: "2004",
    url: "http://www.cdc.gov/niosh/docs/2004-165/pdfs/2004-165.pdf"
  },
  {
    number: 13,
    authors: "Roy D, Ahmed S",
    title: "D- classification - 2024- Roy - SACT",
    publication: "Surgery",
    year: "2024",
    doi: "10.1016/j.mpsur.2023.12.015"
  },
  {
    number: 14,
    authors: "Almeida V, Pires D, Silva M, et al",
    title: "Dermatological Side Effects of Cancer Treatment: Psychosocial Implications — A Systematic Review of the Literature",
    publication: "Various",
    year: "2023"
  },
  {
    number: 15,
    authors: "Amjad M, CA",
    title: "Cancer Chemotherapy - StatPearls - NCBI Bookshelf",
    publication: "StatPearls [Internet] Treasure Island: StatPearls Publishing",
    year: "2022",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK564367/"
  },
  {
    number: 16,
    authors: "Williams L, Wilkins L",
    title: "Clinical Pharmacology",
    publication: "3rd ed.",
    year: "2009"
  },
  {
    number: 17,
    authors: "Meade E, Simons A, Toland S",
    title: "Stay safe: Requirements for a regulatory framework for the use of CSTDs",
    publication: "Br J Nurs",
    year: "2017"
  },
  {
    number: 18,
    authors: "Ostios L, Daniel G, Pérez M, Castelo B, Hernández N, Pilar H",
    title: "Classification of anticancer drugs: an update with FDA- and EMA-approved drugs",
    publication: "Cancer Metastasis Rev",
    year: "2024",
    doi: "10.1007/s10555-024-10188-5"
  },
  {
    number: 19,
    authors: "ISOPP",
    title: "ISOPP Standards for the Safe Handling of Cytotoxics",
    publication: "J Oncol Pharm Pract",
    year: "2022",
    doi: "10.1177/10781552211070933"
  },
  {
    number: 20,
    authors: "Polovich M",
    title: "Safe handling of hazardous drugs",
    publication: "Online J Issues Nurs",
    year: "2004",
    doi: "10.3912/ojin.vol9no03man05"
  },
  {
    number: 21,
    authors: "Ramirez LY, Huestis SE, Yap TY, Zyzanski S, Drotar D, Kodish E",
    title: "Potential chemotherapy side effects: What do oncologists tell parents?",
    publication: "Pediatr Blood Cancer",
    year: "2009",
    doi: "10.1002/pbc.21835"
  },
  {
    number: 22,
    authors: "Leso V, Sottani C, Santocono C, Russo F, Grignani E, Iavicoli I",
    title: "Exposure to Antineoplastic Drugs in Occupational Settings: A Systematic Review of Biological Monitoring Data",
    publication: "Int J Environ Res Public Health",
    year: "2022",
    doi: "10.3390/ijerph19063737"
  },
  {
    number: 23,
    authors: "Samra GHE, Gaballah IM, Rashed LA, Shehata RA",
    title: "Adverse Health Effects of Occupational Exposure To Cisplatin Among Healthcare Workers",
    publication: "Egypt J Occup Med",
    year: "2018",
    doi: "10.21608/ejom.2018.6802"
  },
  {
    number: 24,
    authors: "United States Pharmacopeia",
    title: "USP General Chapter <800> Hazardous Drugs: Handling in Health Care Settings",
    publication: "USP",
    year: "2018",
    url: "www.usp.org"
  },
  {
    number: 25,
    authors: "Polovich M",
    title: "USP General Chapter <800>: Considerations for Oncology Nursing Practice",
    publication: "Semin Oncol Nurs",
    year: "2020",
    doi: "10.1016/j.soncn.2020.151022"
  },
  {
    number: 26,
    authors: "Liu S, Huang Y, Huang H, et al",
    title: "Influence of occupational exposure to antineoplastic agents on adverse pregnancy outcomes among nurses: A meta-analysis",
    publication: "Nursing Open",
    year: "2023",
    doi: "10.1002/nop2.1853"
  },
  {
    number: 27,
    authors: "Rocha SD, Honorato Gomes AN, Gazzola Zen PR, Bica CG",
    title: "Handling of antineoplastic drugs: A health concern among health care workers",
    publication: "Rev Bras Med do Trab",
    year: "2021",
    doi: "10.47626/1679-4435-2020-527"
  },
  {
    number: 28,
    authors: "Unsar S, Kurt S, Akgun Kostak M, Yaman R, Özcan M",
    title: "Determination of Antineoplastic Drug Exposure of Nurses at a University Hospital",
    publication: "Int J Caring Sci",
    year: "2016"
  },
  {
    number: 29,
    authors: "Ivanova K, Avota M",
    title: "Antineoplastic Drugs: Occupational Exposure and Side Effects",
    publication: "Proc Latv Acad Sci Sect B Nat Exact, Appl Sci",
    year: "2016",
    doi: "10.1515/prolas-2016-0049"
  },
  {
    number: 30,
    authors: "IOSH Magazine",
    title: "Back to basics: chemical hazards",
    publication: "IOSH Magazine",
    year: "Various"
  },
  {
    number: 31,
    authors: "Tomkins J",
    title: "Ensuring health care worker safety when handling hazardous drugs: The joint position statement from the Oncology Nursing Society, the American Society of Clinical Oncology, and the Hematology/Oncology Pharmacy Association",
    publication: "J Oncol Pract",
    year: "2015",
    doi: "10.1200/JOP.2015.004978"
  },
  {
    number: 32,
    authors: "WorkSafeBC",
    title: "Safe Work Practices for Handling Hazardous Drugs",
    publication: "WorkSafeBC",
    year: "2017",
    url: "https://www.worksafebc.com/en/resources/health-safety/books-guides/safe-work-practices-handling-lead"
  },
  {
    number: 33,
    authors: "OSHA",
    title: "OSHA Technical Manual (OTM) Section VI: Chapter 2 - Occupational Exposure to Hazardous Drugs",
    publication: "OSHA",
    year: "2011"
  },
  {
    number: 34,
    authors: "Kennedy K, Vu K, Coakley N, et al",
    title: "Safe handling of hazardous drugs",
    publication: "J Oncol Pharm Pract",
    year: "2023",
    doi: "10.1177/10781552221135121"
  },
  {
    number: 35,
    authors: "NIOSH",
    title: "NIOSH Alert: Preventing Occupational Exposures to Antineoplastic and Other Hazardous Drugs in Health Care Settings",
    publication: "NIOSH",
    year: "2004"
  },
  {
    number: 36,
    authors: "Silver SR, Steege AL, Boiano JM",
    title: "Predictors of adherence to safe handling practices for antineoplastic drugs: A survey of hospital nurses",
    publication: "J Occup Environ Hyg",
    year: "2016",
    doi: "10.1080/15459624.2015.1091963"
  },
  {
    number: 37,
    authors: "Easty AC, Coakley N, Cheng R, et al",
    title: "Safe Handling of Cytotoxics: Guideline Recommendations",
    publication: "Curr Oncol",
    year: "2015",
    doi: "10.3747/co.21.2151"
  },
  {
    number: 38,
    authors: "Al-azzam SI, Awawdeh BT, Alzoubi KH, Khader YS, Alkafajei AM",
    title: "Compliance with safe handling guidelines of antineoplastic drugs in Jordanian hospitals",
    publication: "Journal of Oncology Pharmacy Practice",
    year: "2015",
    doi: "10.1177/1078155213517128"
  },
  {
    number: 39,
    authors: "Abu-Alhaija D, Bakas T, Shaughnessy E, Miller E",
    title: "The Factors That Influence Chemotherapy Exposure Among Nurses: An Integrative Review",
    publication: "Work Health Saf",
    year: "2023",
    doi: "10.1177/21650799221140583"
  },
  {
    number: 40,
    authors: "Callahan A, Ames NJ, Touchton-Leonard K, Yang L, Wallen GR",
    title: "Factors Influencing Nurses' Use of Hazardous Drug Safe Handling Precautions",
    publication: "Oncol Nurs Forum",
    year: "2016",
    doi: "10.1188/16.ONF.43-03AP"
  },
  {
    number: 41,
    authors: "Simegn W, Dagnew B, Dagne H",
    title: "Knowledge and associated factors towards cytotoxic drug handling among University of Gondar Comprehensive Specialized Hospital health professionals, institutional-based cross-sectional study",
    publication: "Environ Health Prev Med",
    year: "2020",
    doi: "10.1186/s12199-020-00850-z"
  },
  {
    number: 42,
    authors: "Chen HC, Lu ZYJ, Lee SH",
    title: "Nurses' experiences in safe handling of chemotherapeutic agents: The Taiwan case",
    publication: "Cancer Nurs",
    year: "2015",
    doi: "10.1097/NCC.0000000000000314"
  },
  {
    number: 43,
    authors: "Mahdy NE, Rahman AARA, Hassan HA",
    title: "Cytotoxic Drugs Safety Guidelines: Their Effect on Awareness and Safe Handling Practices of Oncology Nurses",
    publication: "IOSR J Nurs Health Sci",
    year: "2017",
    doi: "10.9790/1959-0603032233"
  },
  {
    number: 44,
    authors: "HA Z, SM S, RM ES, WM S",
    title: "Knowledge, Attitudes and Practices of Safe Handling of Cytotoxic Drugs Among Oncology Nurses in Tanta University Hospitals",
    publication: "Egypt J Occup Med",
    year: "2019",
    doi: "10.21608/ejom.2019.25119"
  },
  {
    number: 45,
    authors: "Banihani SS, Suhemat A, Eman Awabdeh, Alshraideh JA",
    title: "Effects of Educational Interventions to Improve Safe Hazardous Drug Handling among Oncology Nurses: Systematic Review",
    publication: "Medico-Legal Update",
    year: "2022"
  },
  {
    number: 46,
    authors: "Abbasi K, Hazrati M, Mohamadi NP, Rajaeefard A",
    title: "The effect of learning via module versus lecture teaching methods on the knowledge and practice of oncology nurses about safety standards with cytotoxic drugs in Shiraz University of Medical Sciences",
    publication: "Iran J Nurs Midwifery Res",
    year: "2013"
  },
  {
    number: 47,
    authors: "Grunigen S Von, DEssane B, Pape P Le, Falaschi L, Geissbuhler A",
    title: "Development and Evaluation of an e-Learning Module for Low-resource Settings",
    publication: "Journal of Cancer Education",
    year: "2021",
    doi: "10.1007/s13187-021-02113-z"
  },
  {
    number: 48,
    authors: "Hojati Z, Goudarzi F, Hasanvand S, Galehdar N, Birjandi M",
    title: "The Impact of Training Chemotherapy Safety Standards Using a Smartphone Application on Nurses' Knowledge, Attitudes, and Performance",
    publication: "BMC Nurs",
    year: "2023",
    doi: "10.1186/s12912-023-01199-8"
  },
  {
    number: 49,
    authors: "Sinnokrot SM, Talaat E, Shamaa E, Abdelatief DA",
    title: "Online Versus Traditional Educational Programs on Oncology Nurses' Knowledge and Practice",
    publication: "Acta Biomedica",
    year: "2023",
    doi: "10.23750/abm.v94i3.13457"
  },
  {
    number: 50,
    authors: "Crickman R, Finnell DS",
    title: "Chemotherapy safe handling: Limiting nursing exposure with a hazardous drug control program",
    publication: "Clin J Oncol Nurs",
    year: "2017",
    doi: "10.1188/17.CJON.73-78"
  },
  {
    number: 51,
    authors: "Banihani S, Habashneh S, Suhemat A, Awabdeh E, Jafar AA",
    title: "Effects of Educational Interventions to Improve Safe Hazardous Drug Handling among Oncology Nurses: Systematic Review",
    publication: "Medico-Legal Update",
    year: "2022",
    doi: "10.37506/mlu.v22i1.3188"
  },
  {
    number: 52,
    authors: "Beckett H",
    title: "Effect of e-learning on nurses' continuing professional development",
    publication: "Nurs Manage",
    year: "2020",
    doi: "10.7748/nm.2020.e1899"
  },
  {
    number: 53,
    authors: "Friese CR, Yang J, Mendelsohn-victor K, Mccullagh MC",
    title: "Randomized Trial of Web-Based Learning Intervention",
    publication: "Oncology Nursing Forum",
    year: "2020",
    doi: "10.1188/19.ONF.248-256"
  },
  {
    number: 54,
    authors: "Mun MY, Hwang SY",
    title: "Development and evaluation of a web-based learning course for clinical nurses: Anticancer chemotherapy and nursing",
    publication: "Korean J Adult Nurs",
    year: "2020",
    doi: "10.7475/kjan.2020.32.4.364"
  }
];