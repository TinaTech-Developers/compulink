"use client";
import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarValue() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <div className="flex flex-col items-center justify-center mx-auto md:w-full md:h-[56vh] text-sm ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DateCalendar
            className="w-60 md:w-full"
            defaultValue={Date.dateAdapter}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
