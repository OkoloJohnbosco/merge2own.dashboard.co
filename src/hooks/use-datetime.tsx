import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import React from "react";

dayjs.extend(utc);

function useDateTime() {
  const getCurrentDateTime = (from?: string | Date) => {
    const currentTime = dayjs(from).utc(true).format();
    return currentTime.slice(0, currentTime.length - 4);
  };
  const [currentDateTime] = React.useState(() => getCurrentDateTime());

  return { currentDateTime, getCurrentDateTime };
}

export default useDateTime;
