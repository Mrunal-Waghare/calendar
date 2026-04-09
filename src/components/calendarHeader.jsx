import React from "react";

const CalendarHeader = ({ currentDate, setCurrentDate }) => {

  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const handlePrev = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNext = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div className="header">
      <div className="hooks">
        <span></span>
        <span></span>
      </div>

      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        alt="calendar visual"
        className="header-image"
      />

      {/* Month + Buttons */}
      <div className="month-nav">
        <button onClick={handlePrev}>◀</button>

        <h2 className="month-title">
          {month} {year}
        </h2>

        <button onClick={handleNext}>▶</button>
      </div>
    </div>
  );
};

export default CalendarHeader;