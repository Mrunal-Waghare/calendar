import React from "react";
import DayCell from "./DayCell";
import { getMonthData } from "../utils/calendar";

const CalendarGrid = ({
  currentDate,   
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {

  const { totalDays, firstDay } = getMonthData(currentDate);

  const today = new Date();
  const todayDate = today.getDate();

  const isCurrentMonth =
    today.getMonth() === currentDate.getMonth() &&
    today.getFullYear() === currentDate.getFullYear();

  const days = [];

  // empty spaces
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // actual days
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  return (
    <div className="calendar-grid">
      {days.map((day, index) => (
        <DayCell
          key={index}
          day={day}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          todayDate={todayDate}           
          isCurrentMonth={isCurrentMonth} 
        />
      ))}
    </div>
  );
};

export default CalendarGrid;