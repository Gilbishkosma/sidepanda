import type { Moment } from "moment";
import moment from "moment";

export const formatDate = (initialDate: string) => {
  return moment(initialDate).format("YYYY-MM-DD");
};

export const formatTime = (time: string) => {
  const date = new Date(time);
  return date.getHours() + ":" + date.getMinutes();
};

export const getStartEndDates = (date: Moment) => {
  var firstDateOfCurrentMonth = date.startOf("month").format("YYYY-MM-DD");

  // Get the first date of the next month
  var firstDateOfNextMonth = date
    .endOf("month")
    .add(1, "day")
    .format("YYYY-MM-DD");
  return { firstDateOfCurrentMonth, firstDateOfNextMonth };
};

export const getCurrentDate = () => {
  return moment().format("L").toString();
};

export const getFormattedDate = (date: Date | string | null | undefined) => {
  return moment(date).format("L").toString();
};
