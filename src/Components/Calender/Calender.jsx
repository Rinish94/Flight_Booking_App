import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";
const Calender = ({
  setStartDate,
  setEndDate,
  startDate,
  endDate,
  singleway,
}) => {
  return (
    <div>
      <DatePicker
        selected={startDate}
        placeholderText="Departure Date"
        calendarClassName="red-border"
        dateFormat="dd/MM/yyyy"
        selectsStart
        startDate={startDate}
        minDate={new Date()}
        endDate={endDate}
        onChange={(date) => setStartDate(date)}
      />
      {!singleway && (
        <DatePicker
          selected={endDate}
          placeholderText="Return Date"
          calendarClassName="red-border"
          dateFormat="dd/MM/yyyy"
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={(date) => setEndDate(date)}
        />
      )}
    </div>
  );
};

export default Calender;
