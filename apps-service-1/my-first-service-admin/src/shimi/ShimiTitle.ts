import { Shimi as TShimi } from "../api/shimi/Shimi";

export const SHIMI_TITLE_FIELD = "id";

export const ShimiTitle = (record: TShimi): string => {
  return record.id || String(record.id);
};
