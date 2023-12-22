import { DateTime } from "luxon";

export const format = (date: number) => {
  return DateTime.fromMillis(date).toFormat("ccc',' DD',' t");
};
