import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const submitSlots = (
  activeDate,
  totalSlots,
  messageApi,
  navigate,
  location,
  fetchSlotsData
) => {
  if (
    activeDate.$y >= new Date().getFullYear() &&
    activeDate.$M >= new Date().getMonth() &&
    activeDate.$D >= new Date().getDate()
  ) {
    let timeSlots = [];
    Object.entries(totalSlots).map((val) =>
      val[1] ? timeSlots.push(val[0]) : null
    );
    timeSlots = timeSlots.length > 0 ? timeSlots.join(",") : "";
    const data = {
      data: {
        date: activeDate?.format("YYYY-MM-DD"),
        timeSlots: timeSlots,
      },
    };
    axios
      .post("http://localhost:5000/schedule/appointments", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      })
      .then(() => {
        console.log("done");
        messageApi.open({
          key: 1,
          type: "success",
          content: "Your schedule slots updated",
          duration: 3,
        });
        fetchSlotsData(cookies.get("accessToken"), {
          date: activeDate?.format("YYYY-MM-DD"),
        });
      })
      .catch((err) => {
        if (err?.response?.status == 400) {
          messageApi.open({
            key: 1,
            type: "error",
            content: "your Time has Expired, you can login and try again",
            duration: 3,
          });
          setTimeout(
            () => navigate(`/login?redirect=${location?.pathname}`),
            3000
          );
        } else
          messageApi.open({
            key: 1,
            type: "error",
            content: "there's some issues, please try again later",
            duration: 3,
          });
      });
  }
};

export default submitSlots;
