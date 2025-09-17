"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface CalendarProps {
  month?: Date;
  onSelectDay?: (date: Date) => void;
  onSelectWeek?: (dates: Date[]) => void;
  onSelectRange?: (from: Date, to: Date) => void;
  renderDay?: (date: Date) => React.ReactNode;
  disabledDates?: (date: Date) => boolean;
  minDate?: Date;
  maxDate?: Date;
  multiSelect?: boolean;
  selectedDates?: Date[];
  onMultiSelect?: (dates: Date[]) => void;
  showOutsideDays?: boolean;
  startOfWeek?: "Sun" | "Mon";
  showWeekNumbers?: boolean;
  events?: { date: Date; className?: string }[];
}

export default function Calendar({
  month = new Date(),
  onSelectDay,
  onSelectWeek,
  onSelectRange,
  renderDay,
  disabledDates,
  minDate,
  maxDate,
  multiSelect = false,
  selectedDates = [],
  onMultiSelect,
  showOutsideDays = false,
  startOfWeek = "Sun",
  showWeekNumbers = false,
  events = [],
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(month);
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

  const startDay = startOfWeek === "Mon" ? 1 : 0;
  const firstOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1,
  );
  const firstDayIndex = (firstOfMonth.getDay() - startDay + 7) % 7;
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0,
  ).getDate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const generateGrid = () => {
    const cells: (Date | null)[] = [];
    for (let i = 0; i < firstDayIndex; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d),
      );
    }
    return cells;
  };

  const isDisabled = (date: Date) =>
    (minDate && date < minDate) ||
    (maxDate && date > maxDate) ||
    (disabledDates && disabledDates(date));

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const isInRange = (date: Date) =>
    rangeStart && rangeEnd && date >= rangeStart && date <= rangeEnd;

  const isRangeStart = (date: Date) =>
    rangeStart && isSameDay(date, rangeStart);

  const isRangeEnd = (date: Date) => rangeEnd && isSameDay(date, rangeEnd);

  const handleClick = (date: Date) => {
    if (isDisabled(date)) return;

    if (multiSelect) {
      const exists = selectedDates.some((d) => isSameDay(d, date));
      const newDates = exists
        ? selectedDates.filter((d) => !isSameDay(d, date))
        : [...selectedDates, date];
      onMultiSelect?.(newDates);
      return;
    }

    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(date);
      setRangeEnd(null);
    } else {
      if (date < rangeStart) {
        setRangeEnd(rangeStart);
        setRangeStart(date);
        onSelectRange?.(date, rangeStart);
      } else {
        setRangeEnd(date);
        onSelectRange?.(rangeStart, date);
      }
    }

    onSelectDay?.(date);
  };

  const grid = generateGrid();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() - 1,
                1,
              ),
            )
          }
        >
          ◀
        </button>
        <h2 className="font-bold">
          {currentMonth.toLocaleString("default", { month: "long" })}{" "}
          {currentMonth.getFullYear()}
        </h2>
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() + 1,
                1,
              ),
            )
          }
        >
          ▶
        </button>
      </div>

      <div className="grid grid-cols-7 text-center font-semibold">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
          .slice(startDay)
          .concat(
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].slice(
              0,
              startDay,
            ),
          )
          .map((d) => (
            <div key={d}>{d}</div>
          ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {grid.map((date, idx) => {
          if (!date) return <div key={idx} className="h-12" />;

          const disabled = isDisabled(date);
          const selected = selectedDates.some((d) => isSameDay(d, date));
          const isToday = isSameDay(today, date);
          const inRange = isInRange(date);
          const start = isRangeStart(date);
          const end = isRangeEnd(date);
          const eventClass = events.find((e) =>
            isSameDay(e.date, date),
          )?.className;

          return (
            <div
              key={idx}
              onClick={() => handleClick(date)}
              className={twMerge(
                "flex h-12 cursor-pointer items-center justify-center rounded border text-sm",
                disabled && "cursor-not-allowed opacity-40",
                isToday && "bg-title text-bg font-bold",
                selected && "bg-green-500 font-bold text-white",
                inRange && "bg-title/35",
                start && "outline-title/75 rounded-l-full outline outline-1",
                end && "outline-title/75 rounded-r-full outline outline-1",
                eventClass,
              )}
            >
              {renderDay ? renderDay(date) : date.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
