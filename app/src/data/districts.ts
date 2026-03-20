export interface DistrictData {
  state: string;
  district_number: string;
  district_code: string;
  representative_name: string;
  past_winning_theme: string;
  stem_focus: string; // Detail for Agent Squad tuner
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
  "ma-4": {
    state: "Massachusetts",
    district_number: "4th",
    district_code: "MA-4",
    representative_name: "Jake Auchincloss",
    past_winning_theme: "Biotech Lab Resource Allocation automation",
    stem_focus: "Boston-area Academic research structures and HIPAA compliant software."
  }
};
