import {
  Button,
  Calendar,
  Checkbox,
  DatePicker,
  Input,
  message,
  Popover,
  Segmented,
  Switch,
} from "antd";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import dayjs from "dayjs";
// import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom";
// import { useSlotsContext } from "../../../../contexts/SlotsContextProvider";
// import { submitSlots } from "../profileServices";
import Loader from "../../Loader";
const { Title } = Typography;
const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];
// const cookies = new Cookies();
const ScheduleAppointments = ({ userid }) => {
  // const { slotsData, isLoading, fetchSlotsData } = useSlotsContext();
  const location = useLocation();
  const [messageApi, contextHolder] = message.useMessage();
  const [totalSlots, setTotalSlots] = useState({});
  const [bookedSlots, setBookedSlots] = useState({});
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(() => dayjs());
  const [calendarView, setCalendarView] = useState(false);
  // useEffect(() => {
  //   fetchSlotsData();
  //   cookies.get("accessToken"),
  //     {
  //       date: selectedDate.format("YYYY-MM-DD"),
  //     };
  // }, [selectedDate]);
  const slots = { totalSlots: totalSlots }; //slotsData?.data;
  // useEffect(() => {
  //   if (slots?.totalSlots || slots?.totalSlots == "")
  //     setTotalSlots(slots.totalSlots);
  //   if (slots?.busySlots || slots?.busySlots == "")
  //     setBookedSlots(slots.busySlots);
  // }, [slotsData]);
  // if (isLoading) <Loader />;
  const isMobile = useMediaQuery({
    query: "(max-width:300px)",
  });
  const handleDate = (val) => {
    setSelectedDate(val);
  };
  return (
    <div className="schedule--wrapper  2xl:w-1/2 m-2 p-3 rounded bg-gray-600">
      {contextHolder}
      <Title className="!text-white !text-center !text-lg sm:!text-2xl lg:!text-3xl 2xl:!text-4xl">
        Schedule Your Available Time
      </Title>
      {!isMobile ? (
        <>
          <Checkbox onChange={() => setCalendarView((val) => !val)}>
            <span className="text-white font-bold">Large View</span>
          </Checkbox>
          <Calendar
            fullscreen={calendarView}
            value={selectedDate}
            onSelect={(val) => handleDate(val)}
          />
        </>
      ) : (
        <DatePicker
          className="w-full !mb-2"
          value={selectedDate}
          onSelect={(val) => handleDate(val)}
        />
      )}
      {/* <Segmented options={timeSlots} /> */}
      <div className="flex justify-center  items-end bg-white">
        <div className="text-center w-full sm:w-2/3">
          {timeSlots.map((value, i) => (
            <Popover
              placement="top"
              showArrow={false}
              key={value}
              color={bookedSlots[i] ? "orange" : "purple"}
              open={slots?.totalSlots[i] ? null : false}
              content={
                bookedSlots[i] ? (
                  <span className="text-white font-medium">
                    booked from patient
                  </span>
                ) : (
                  <span className="text-white font-medium">free slot</span>
                )
              }
            >
              <span
                className={`p-1 m-1 cursor-pointer select-none rounded text-white font-medium
            inline-block ${
              totalSlots[i]
                ? bookedSlots[i]
                  ? "bg-orange-600 cursor-not-allowed"
                  : "bg-gray-700"
                : "bg-gray-400"
            }`}
                onClick={() =>
                  setTotalSlots((books) => ({ ...books, [i]: !books[i] }))
                }
              >
                {value}
              </span>
            </Popover>
          ))}
        </div>
      </div>
      <Button
        // onClick={
        //   () =>
        //   submitSlots(
        //     selectedDate,
        //     totalSlots,
        //     messageApi,
        //     navigate,
        //     location,
        //     fetchSlotsData
        //   )
        // }
        type="primary"
        className="my-2 m-auto  w-full sm:w-1/2 !block hover:!bg-gray-400 !bg-gray-500 !rounded-lg"
      >
        Submit
      </Button>
    </div>
  );
};

export default ScheduleAppointments;
