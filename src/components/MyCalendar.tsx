import React from 'react';
import { Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';

export const MyCalendar: React.FC = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
  };

  return (
    <div className="site-calendar-demo-card">
      <Calendar fullscreen={true} onPanelChange={onPanelChange} />
    </div>
  );
};
