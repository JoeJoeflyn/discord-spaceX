export type LandingPad = {
  name?: string;
  full_name?: string;
  status:
    | "active"
    | "inactive"
    | "unknown"
    | "retired"
    | "lost"
    | "under construction";
  type?: string;
  locality?: string;
  region?: string;
  latitude?: number;
  longitude?: number;
  landing_attempts?: number;
  landing_successes?: number;
  wikipedia?: string;
  details?: string;
  launches?: string[];
  images?: {
    large: string[];
  };
};
