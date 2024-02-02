export const formatDate = (initialDate: string) => {
  const date = new Date(initialDate);
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
};

export const getStartEndDates = (date: Date) => {
  var firstDateOfCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1,
  ).toLocaleDateString();

  // Get the first date of the next month
  var firstDateOfNextMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1,
  ).toLocaleDateString();
  return { firstDateOfCurrentMonth, firstDateOfNextMonth };
};
