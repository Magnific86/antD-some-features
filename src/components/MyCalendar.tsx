import { FC } from "react";
import { Calendar } from "antd";

interface CalendarProps {
  show: boolean;
}

export const MyCalendar: FC<CalendarProps> = ({ show }) => {
  if (show) {
    return (
      <div className="site-calendar-demo-card">
        <Calendar fullscreen={true} />
      </div>
    );
  }
};
