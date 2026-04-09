import React, { useState } from "react";
import CalendarHeader from "./calendarHeader.jsx";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "./NotesPanel";

const CalendarApp = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [notes, setNotes] = useState({});
  const [currentDate, setCurrentDate] = useState(new Date());

  const getRangeKey = (start, end) => `${start}-${end}`;

  return (
  <div className="app-container">
    <CalendarHeader 
      currentDate={currentDate}
      setCurrentDate={setCurrentDate}
    />

    <div className="main-content">
      <div className="left">
        <NotesPanel 
          startDate={startDate}
          endDate={endDate}
          notes={notes}
          setNotes={setNotes}
        />
      </div>

      <div className="right">
        <CalendarGrid
          currentDate={currentDate}   // 👈 IMPORTANT
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div>
    </div>
  </div>
);
};

export default CalendarApp;