import React, { useEffect, useState } from "react";

const NotesPanel = ({ startDate, endDate, notes, setNotes }) => {
  const [text, setText] = useState("");

  const getRangeKey = (start, end) => `${start}-${end}`;

  useEffect(() => {
    if (startDate && endDate) {
      const key = getRangeKey(startDate, endDate);
      setText(notes[key] || "");
    } else {
      setText("");
    }
  }, [startDate, endDate, notes]);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (startDate && endDate) {
      const key = getRangeKey(startDate, endDate);
      setNotes((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  };

  return (
    <div className="notes-panel">
      <h3>Notes</h3>

      {startDate && endDate ? (
        <p className="range-text">
        Selected: {startDate} → {endDate} ({endDate - startDate + 1} days)
        </p>
      ) : (
        <p>Select a date range</p>
      )}

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Write notes for selected range..."
      />
    </div>
  );
};

export default NotesPanel;