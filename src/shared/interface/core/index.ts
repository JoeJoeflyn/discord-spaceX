export type Core = {
  serial: string;
  block?: number;
  status: "active" | "inactive" | "unknown" | "expended" | "lost" | "retired";
  last_update?: string;
  launches: string[];
};
