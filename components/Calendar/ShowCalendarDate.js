import React from 'react';
import CalendarComonent from './CalendarComonent';
import { Calendar, DateRangePicker } from "react-date-range";
import { useState } from 'react';
import { format } from 'date-fns';

const ShowCalendarDate = () => {
    const [calendar, setCalendar] = useState("");
    const handleSelect = (date) =>{
      setCalendar(format(date, 'dd/MM/yyyy'))
    }
    return (
        <div>
            <input type="text" />
            <CalendarComonent/>
        </div>
    );
};

export default ShowCalendarDate;