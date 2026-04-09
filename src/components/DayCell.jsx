import React from "react";

const DayCell = ({
  day,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  todayDate,       
  isCurrentMonth, 
})  => {
  if (!day) return <div className="day-cell empty"></div>;

  const handleClick = () => {
    if (!startDate) {
      setStartDate(day);
    } else if (!endDate) {
      if (day < startDate) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    } else {
  
      setStartDate(day);
      setEndDate(null);
    }
  };


  let className = "day-cell";

if (day === startDate || day === endDate) {
  className += " selected";
} 
else if (startDate && endDate && day > startDate && day < endDate) {
  className += " in-range";
}

else if (isCurrentMonth && day === todayDate) {
  className += " today";
}
  return (
    <div className={className} onClick={handleClick}>
      {day}
    </div>
  );
};

export default DayCell;