import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();
const submitFeedback = async (
  rateValue,
  feedbackValue,
  rate_to,
  rate_from,
  messageApi,
  navigate,
  location,
  fetchProfileData
) => {
  const data = {
    rate: rateValue || 0,
    feedback: feedbackValue || null,
    rate_to,
    rate_from,
  };
  messageApi.open({
    key: 1,
    content: "submitting your feedback",
    type: "loading",
    duration: 5,
  });
  axios
    .post(
      "http://localhost:5000/submitfeedback",
      {
        data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies?.get("accessToken")}`,
        },
      }
    )
    .then((val) => {
      messageApi.open({
        key: 1,
        content: "thank you for your feedback ❤",
        type: "success",
        duration: 2,
      });
      setTimeout(
        () => fetchProfileData({ path: "profile", userid: rate_to }),
        2000
      );
    })
    .catch((err) => {
      console.log(err);
      if (err?.response?.status == 400) {
        messageApi.open({
          key: 1,
          type: "error",
          content: "your Time has Expired, you can login and try again",
          duration: 3,
        });
        setTimeout(navigate(`/login?redirect=${location.pathname}`), 3000);
      } else
        messageApi.open({
          key: 1,
          content: "there's some issues cannot submit your feedback now",
          type: "error",
          duration: 2,
        });
    });
};

export default submitFeedback;
