export const getMonthData = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const totalDays = new Date(year, month + 1, 0).getDate();

  const firstDay = new Date(year, month, 1).getDay();

  return { totalDays, firstDay };
};