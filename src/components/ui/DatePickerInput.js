import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerInput({date, setDate}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <DatePicker
          label="Chọn ngày"
          value={date} // date cua dayjs
          onChange={(newDate) => setDate(newDate)} // Truyền đối tượng Dayjs
          className='w-full'	
        />
      </div>
    </LocalizationProvider>
  );
}
