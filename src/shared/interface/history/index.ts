export type History = {
  title: string | null;
  event_date_utc: string | null;
  event_date_unix: number | null;
  details: string | null;
  links: {
    article: string | null;
  };
};
