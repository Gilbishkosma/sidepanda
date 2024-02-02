export const fetchSlots = async ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  const response = await fetch(
    `https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=${endDate}`,
  );
  return await response.json();
};
