"use client";

import Calendar from "@/components/Calendar";

export default function CalendarExample() {
  const events = [
    { date: new Date("2001-06-15"), className: "bg-purple-300" },
    { date: new Date("2001-06-20"), className: "bg-red-300" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 space-y-6">
      {/* Basic usage */}
      <Calendar startOfWeek="Mon" />

      {/* With minDate / maxDate */}
      <Calendar
        multiSelect
        minDate={new Date("2001-06-10")}
        maxDate={new Date("2001-06-30")}
      />

      {/* With disabled dates */}
      <Calendar
        disabledDates={(d) => d.getDay() === 0 || d.getDay() === 6} // disable weekends
      />

      {/* With events */}
      <Calendar events={events} />

      {/* With range selection */}
      <Calendar
        onSelectRange={(from, to) => {
          console.log("Range:", from, to);
        }}
      />

      {/* With week selection */}
      <Calendar
        onSelectWeek={(week) => {
          console.log("Week:", week);
        }}
      />

      {/* With multiple selection */}
      <Calendar
        multiSelect
        showWeekNumbers
        onMultiSelect={(dates) => {
          console.log("Selected dates:", dates);
        }}
      />

      {/* With custom render */}
      <Calendar
        showWeekNumbers
        renderDay={(date) => (
          <span>
            {/* {date.getDate()} */}
            {date.getDate() % 5 === 0 && "Bruh"}
          </span>
        )}
      />
    </div>
  );
}
