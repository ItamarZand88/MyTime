import React from "react";
import { Card, Title } from "@tremor/react";

const style = {
  title: "text-center mb-4 text-slate-800",
  table: "w-full border-collapse text-slate-100",
  tableHeader: "bg-slate-200 p-2 text-slate-900",
  tableRow: "border-t",
  tableCell: "border-l border-r border-b p-2",
};

const WeeklySchedule = () => {
  const days = ["שבת", "שישי", "חמישי", "רביעי", "שלישי", "שני", "ראשון"];
  const timeSlots = [
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00",
  ]; // and so on...

  return (
    <Card className="max-w-full overflow-x-auto">
      <Title className={style.title}>מערכת שעות</Title>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.tableHeader}>שעה/יום</th>
            {days.map((day) => (
              <th key={day} className={style.tableHeader}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((timeSlot) => (
            <tr key={timeSlot} className={style.tableRow}>
              <td className={style.tableCell}>{timeSlot}</td>
              {days.map((day) => (
                <td key={day} className={style.tableCell}>
                  Lecture Info
                </td> // Replace 'Lecture Info' with actual data
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default WeeklySchedule;
