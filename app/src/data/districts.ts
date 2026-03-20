export interface DistrictData {
  state: string;
  district_number: string;
  district_code: string;
  representative_name: string;
  past_winning_theme: string;
  stem_focus: string; // Detail for Agent Squad tuner
  local_context?: string;
  seo_keywords?: string;
  agent_logic?: {
    policy_advisor?: string;
    house_liaison?: string;
    media_director?: string;
  }
}

export const districts: Record<string, DistrictData> = {
  "ca-17": {
    state: "California",
    district_number: "17th",
    district_code: "CA-17",
    representative_name: "Ro Khanna",
    past_winning_theme: "Wildfire Prediction and Prevention using AI",
    stem_focus: "Silicon Valley AI/ML compliance and strategic venture metrics."
  },
  "tx-35": {
    state: "Texas",
    district_number: "35th",
    district_code: "TX-35",
    representative_name: "Greg Casar",
    past_winning_theme: "Renewable Energy Grid Management software",
    stem_focus: "Austin tech scene scalability guidelines and clean energy nodes."
  },
  "tx-30": {
    state: "Texas",
    district_number: "30th",
    district_code: "TX-30",
    representative_name: "Jasmine Crockett",
    past_winning_theme: "Environmental Impact and Urban Efficiency Apps ('Watt's Up!')",
    stem_focus: "Logistics and Civic Engagement structures.",
    local_context: "Texas districts value Practical Community Solutions.",
    seo_keywords: "Texas High School Coding Competition, Austin Tech Extracurriculars, Texas 11th District App Challenge",
    agent_logic: {
      policy_advisor: "Suggest themes around Energy, Logistics, or Civic Engagement to resonate with Texas judges."
    }
  },
  "tx-11": {
    state: "Texas",
    district_number: "11th",
    district_code: "TX-11",
    representative_name: "August Pfluger",
    past_winning_theme: "Agricultural Tech and Resource AI",
    stem_focus: "Logistics and Civic Engagement structures.",
    local_context: "Texas districts value Practical Community Solutions.",
    seo_keywords: "Texas High School Coding Competition, Texas 11th District App Challenge",
    agent_logic: {
      policy_advisor: "Suggest themes around Energy, Logistics, or Civic Engagement to resonate with Texas judges."
    }
  },
  "tx-24": {
    state: "Texas",
    district_number: "24th",
    district_code: "TX-24",
    representative_name: "Beth Van Duyne",
    past_winning_theme: "Suburban Transit Optimization Framework",
    stem_focus: "Logistics and Civic Engagement structures.",
    local_context: "Texas districts value Practical Community Solutions.",
    seo_keywords: "Texas High School Coding Competition, Texas 24th District App Challenge",
    agent_logic: {
      policy_advisor: "Suggest themes around Energy, Logistics, or Civic Engagement to resonate with Texas judges."
    }
  },
  "fl-27": {
    state: "Florida",
    district_number: "27th",
    district_code: "FL-27",
    representative_name: "Maria Salazar",
    past_winning_theme: "Education and Social Support Tools (Autism Support/Disaster Relief)",
    stem_focus: "Software security standards and local high-school resident regulations.",
    local_context: "FL-27 requires at least 50% of the team to live/attend school in the district.",
    seo_keywords: "Miami STEM Awards, Florida 27th District App Challenge, Orlando Student App Developers",
    agent_logic: {
      house_liaison: "Flag the 50% Residency Rule for Florida teams during the onboarding setup phase."
    }
  },
  "fl-17": {
    state: "Florida",
    district_number: "17th",
    district_code: "FL-17",
    representative_name: "Greg Steube",
    past_winning_theme: "Disaster Relief and Community Assistance",
    stem_focus: "Software security standards and local high-school resident regulations.",
    local_context: "Florida winners often lean into Education and Social Support.",
    seo_keywords: "Florida 17th District App Challenge, Student App Developers",
    agent_logic: {
      house_liaison: "Flag the 50% Residency Rule for Florida teams during the onboarding setup phase."
    }
  },
  "fl-10": {
    state: "Florida",
    district_number: "10th",
    district_code: "FL-10",
    representative_name: "Maxwell Frost",
    past_winning_theme: "Social Support Tools and Accessibility Tech",
    stem_focus: "Software security standards and local high-school resident regulations.",
    local_context: "Florida winners often lean into Education and Social Support.",
    seo_keywords: "Orlando STEM Awards, Florida 10th District App Challenge, Orlando Student App Developers",
    agent_logic: {
      house_liaison: "Flag the 50% Residency Rule for Florida teams during the onboarding setup phase."
    }
  },
  "ny-23": {
    state: "New York",
    district_number: "23rd",
    district_code: "NY-23",
    representative_name: "Nick Langworthy",
    past_winning_theme: "Financial Literacy ('InvestNYou')",
    stem_focus: "Financial Data aggregates security and Social Equity scaling standards.",
    local_context: "New York judges favor apps with a strong Social Equity or Economic Empowerment angle.",
    seo_keywords: "NYC High School Coding, New York Financial Literacy App Challenge, Winning the CAC in NY-10",
    agent_logic: {
      policy_advisor: "Prioritize Data-Driven Apps that solve a specific socio-economic gap in the Empire State."
    }
  },
  "ny-10": {
    state: "New York",
    district_number: "10th",
    district_code: "NY-10",
    representative_name: "Dan Goldman",
    past_winning_theme: "Urban Socio-Economic Empowerment Platforms",
    stem_focus: "Financial Data aggregates security and Social Equity scaling standards.",
    local_context: "New York judges favor apps with a strong Social Equity or Economic Empowerment angle.",
    seo_keywords: "NYC High School Coding, Winning the CAC in NY-10",
    agent_logic: {
      policy_advisor: "Prioritize Data-Driven Apps that solve a specific socio-economic gap in the Empire State."
    }
  },
  "ny-26": {
    state: "New York",
    district_number: "26th",
    district_code: "NY-26",
    representative_name: "Tim Kennedy",
    past_winning_theme: "Community Resource Allocation Dashboards",
    stem_focus: "Financial Data aggregates security and Social Equity scaling standards.",
    local_context: "New York judges favor apps with a strong Social Equity or Economic Empowerment angle.",
    seo_keywords: "New York High School Coding, Winning the CAC in NY-26",
    agent_logic: {
      policy_advisor: "Prioritize Data-Driven Apps that solve a specific socio-economic gap in the Empire State."
    }
  },
  "il-15": {
    state: "Illinois",
    district_number: "15th",
    district_code: "IL-15",
    representative_name: "Mary Miller",
    past_winning_theme: "Curiosity and Exploration ('The Earth App')",
    stem_focus: "Personal Discovery and media direction guidelines.",
    local_context: "Recent Illinois winners focus on Curiosity and Exploration.",
    seo_keywords: "Chicago STEM Mentorship, Illinois 15th District App Competition, Python Coding for IL Students",
    agent_logic: {
      media_director: "Help students frame their Inspiration Story around Personal Discovery, which performs well with Illinois panels."
    }
  },
  "il-02": {
    state: "Illinois",
    district_number: "2nd",
    district_code: "IL-02",
    representative_name: "Robin Kelly",
    past_winning_theme: "Curiosity and Exploration ('The Earth App')",
    stem_focus: "Personal Discovery and media direction guidelines.",
    local_context: "Recent Illinois winners focus on Curiosity and Exploration.",
    seo_keywords: "Chicago STEM Mentorship, Illinois 2nd District App Competition, Python Coding for IL Students",
    agent_logic: {
      media_director: "Help students frame their Inspiration Story around Personal Discovery, which performs well with Illinois panels."
    }
  },
  "il-08": {
    state: "Illinois",
    district_number: "8th",
    district_code: "IL-08",
    representative_name: "Raja Krishnamoorthi",
    past_winning_theme: "Student Exploration and Inquiry Frameworks",
    stem_focus: "Personal Discovery and media direction guidelines.",
    local_context: "Recent Illinois winners focus on Curiosity and Exploration.",
    seo_keywords: "Illinois 8th District App Competition, Python Coding for IL Students",
    agent_logic: {
      media_director: "Help students frame their Inspiration Story around Personal Discovery, which performs well with Illinois panels."
    }
  },
  "ma-4": {
    state: "Massachusetts",
    district_number: "4th",
    district_code: "MA-4",
    representative_name: "Jake Auchincloss",
    past_winning_theme: "Biotech Lab Resource Allocation automation",
    stem_focus: "Boston-area Academic research structures and HIPAA compliant software."
  }
};
