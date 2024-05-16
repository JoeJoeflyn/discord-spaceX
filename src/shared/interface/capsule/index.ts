export type Capsule = {
  serial: string;
  status: "unknown" | "active" | "retired" | "destroyed";
  type: "Dragon 1.0" | "Dragon 1.1" | "Dragon 2.0";
  dragon?: string;
  reuse_count: number;
  water_landings: number;
  land_landings: number;
  last_update?: string;
  launches: string[];
};
