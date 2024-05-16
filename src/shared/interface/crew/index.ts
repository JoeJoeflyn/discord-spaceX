export type Crew = {
  name?: string;
  status: "active" | "inactive" | "retired" | "unknown";
  agency?: string;
  image?: string;
  wikipedia?: string;
  launches: string[];
};
