import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import { SlotsContextProvider } from "../../../contexts";
import {
  Typography,
  Image,
  Rate,
  Button,
  Drawer,
  message,
  Input,
  Switch,
  Alert,
} from "antd";
import Loader from "../Loader";
import {
  ScheduleAppointments,
  DetailsWrapper,
  UserDetails,
} from "./profileUtils";
import { AiOutlineMessage } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useEffect } from "react";
import doctorPhoto from "./../../images/doctorPhoto.jpg";
// import { useProfileContext } from "../../../contexts/ProfileContextProvider";
// import { submitFeedback } from "./profileServices";
// import Cookies from "universal-cookie";
const editingObject = (value, setValue, name, normal) => ({
  onChange: (newValue) => setValue((val) => ({ ...val, [name]: newValue })),
  icon: (normal && null) || <BiEdit color="white" className="text-white" />,
  tooltip: false,
  text: value,
  enterIcon: null,
  // autoSize: {
  //   maxRows: 5,
  //   minRows: 3,
  // }
});

const UserProfile = ({ userid }) => {
  const { profileid } = useParams();
  const [rateValue, setRateValue] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const [feedbackValue, setFeedbackValue] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const isAuth = profileid == userid ? true : false;
  const {
    isLoading,
    profileData: data,
    fetchProfileData,
  } = { isLoading: false, profileData: {}, fetchProfileData: () => {} }; // useProfileContext();
  useEffect(() => {
    fetchProfileData({ path: "profile", userid: profileid });
  }, []);
  const [handleDrawer, setHandleDrawer] = useState({
    isOpen: false,
    type: "",
  });
  const [userValues, setUserValues] = useState({
    nickname: null,
    about: null,
    specialty: null,
    age: null,
    bdate: null,
    pnumber: null,
    email: null,
    province: null,
    city: null,
    street: null,
    images: [],
  });
  const userRecord = data?.data;
  useEffect(() => {
    if (userRecord?.["user"]) {
      const bdate = userRecord?.["user"]?.bdate;
      setUserValues({
        nickname: userRecord?.["user"]?.nick_name,
        about: userRecord?.["staff"]?.about || null,
        specialty: userRecord?.["staff"]?.specialty || null,
        age: `${userRecord?.["staff"]?.age} years`,
        bdate: bdate?.slice(0, bdate?.indexOf("T")),
        pnumber: userRecord?.["user"]?.pnumber,
        email: userRecord?.["user"]?.email,
        province: userRecord?.["user"]?.province,
        city: userRecord?.["user"]?.city,
        street: userRecord?.["user"]?.street,
        images: userRecord?.["user"]?.img_urls || [],
      });
    }
  }, [userRecord]);
  const { Title, Text } = Typography;
  const navigate = useNavigate();
  const location = useLocation();
  // const cookies = new Cookies();
  // if (isLoading || !userRecord?.["user"]) return <Loader />;
  const isVisitor = userid ? false : true;
  const isUser = userRecord?.["user"]?.user_type == "staff" ? false : true;
  const showDrawer = (type) => {
    setHandleDrawer(() => ({ isOpen: true, type }));
  };

  return (
    <div className="profile--wrapper">
      {contextHolder}
      {isVisitor ? (
        <div className="flex justify-center">
          <Alert
            className="!my-2"
            closable
            message={
              <span className="text-blue-900 font-medium w-full inline-block text-center">
                You need to login / signup so you can book appointment or other
                features
              </span>
            }
            type="info"
          />
        </div>
      ) : null}
      <div
        className="profile--intro--wrapper 
      2xl:w-1/2 lg:w-2/3 w-full"
      >
        <div
          className="flex flex-wrap sm:flex-nowrap p-4"
          style={{
            backgroundColor: "rgb(32 58 89 / 90%)",
            borderRadius: "0px 20px 20px 0px",
          }}
        >
          <div className="text-center w-full sm:w-1/4">
            <Image
              src={userValues?.img_urls?.[0]?.img_url || doctorPhoto}
              width={130}
              height={130}
              style={{ borderRadius: "100px" }}
            />
          </div>
          <div className="profile--intro ml-5 grow">
            <div
              className="profile--intro---name
            flex flex-wrap sm:flex-nowrap items-center justify-between"
            >
              <Title
                editable={
                  isAuth && showEdit
                    ? editingObject(
                        userValues?.nickname,
                        setUserValues,
                        "nickname"
                      )
                    : false
                }
                className="whitespace-nowrap p-2 !text-lg lg:!text-xl 2xl:!text-2xl !m-0"
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                }}
              >
                {!isUser ? "Dr. " : " "}
                {userValues?.nickname}
              </Title>
              {!isAuth ? (
                <div>
                  <Link to="/">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "sans-serif",
                        fontSize: "28px",
                      }}
                      className={`!w-full !rounded-lg !text-xs lg:!text-sm
                      !bg-gray-700 !p-4 !flex !items-center ${
                        isAuth || !userid ? "" : "hover:!bg-gray-800"
                      }`}
                      disabled={isAuth || !userid ? true : false}
                    >
                      Book Appointment
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "sans-serif",
                        fontSize: "28px",
                      }}
                      icon={<AiOutlineMessage color="yellow" />}
                      className={`!w-full !rounded-lg !text-xs lg:!text-sm
           !bg-gray-700 mt-2 !p-4 !flex !items-center ${
             isAuth || !userid ? "" : "hover:!bg-gray-800"
           }
           `}
                      disabled={isAuth || !userid ? true : false}
                    >
                      &nbsp;Message me
                    </Button>
                  </Link>
                </div>
              ) : (
                <Switch
                  onChange={() => {
                    setShowEdit((showEdit) => !showEdit);
                  }}
                  checked={showEdit}
                  unCheckedChildren={"Make Edit"}
                  checkedChildren={"Hide Edit"}
                  className="!block !m-auto"
                />
              )}
            </div>
            {!isUser && (
              <div className="profile--about text-white p-2 my-2 text-xs md:text-sm rounded bg-gray-200/50">
                <Title
                  className="!text-xs !text-gray-100"
                  editable={
                    isAuth && showEdit
                      ? editingObject(userValues?.about, setUserValues, "about")
                      : false
                  }
                >
                  {userValues?.about || "there's no Introduction Offered"}
                </Title>
              </div>
            )}
            <div
              className="profile--rating flex
              justify-evenly items-center flex-wrap
              p-2 rounded bg-gray-300"
            >
              <div>
                <Rate value={userRecord?.["staff"]?.rate || 0} disabled />
                <Title className="!inline-block relative -top-2 !text-xs !text-gray-700">
                  &nbsp;&nbsp;{userRecord?.["staff"]?.num_rate || 0} users rate
                </Title>
              </div>
              {!isUser && !isAuth ? (
                <>
                  <Button
                    style={{
                      color: "white",
                      fontFamily: "sans-serif",
                      fontSize: "28px",
                    }}
                    className={`!rounded-lg !text-xs lg:!text-sm
                  !bg-orange-800 !p-4 !flex !items-center ${
                    isAuth || !userid ? "" : "hover:!bg-orange-600"
                  }
            `}
                    onClick={() => showDrawer("rate")}
                    disabled={isAuth || !userid ? true : false}
                  >
                    Place Your Feedback
                  </Button>
                </>
              ) : null}
              <Drawer
                title={
                  <span className="text-lg font-black">Your Feedback</span>
                }
                placement="right"
                open={handleDrawer?.isOpen}
                onClose={() =>
                  setHandleDrawer((val) => ({ ...val, isOpen: false }))
                }
              >
                {handleDrawer.type == "rate" ? (
                  <>
                    <Title className="!text-xs !mt-4 !font-medium">
                      Submit Your Rate
                    </Title>
                    <Rate onChange={setRateValue} allowHalf defaultValue={1} />
                    <Title className="!text-xs !mt-4 !font-medium">
                      Write Any feedback About your experince with Dr.{" "}
                      {userValues?.nickname}
                    </Title>
                    <Input.TextArea
                      onChange={(e) => setFeedbackValue(e?.target?.value)}
                      maxLength={300}
                      showCount
                      name="feedback"
                      placeholder="place your feedback here"
                    ></Input.TextArea>
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "sans-serif",
                        fontSize: "28px",
                      }}
                      className="!rounded-lg !text-xs lg:!text-sm
                    !bg-gray-700 !p-4 !m-4 !flex !items-center hover:!bg-gray-600
             "
                      // onClick={() =>
                      //   submitFeedback(
                      //     rateValue,
                      //     feedbackValue,
                      //     profileid,
                      //     userid,
                      //     messageApi,
                      //     navigate,
                      //     location,
                      //     fetchProfileData
                      //   )
                      // }
                    >
                      Submit Your Feedback
                    </Button>
                  </>
                ) : null}
              </Drawer>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-2">
        {!isUser ? (
          // <SlotsContextProvider>
          <ScheduleAppointments />
        ) : //</SlotsContextProvider>
        null}
        <div
          className="profile--wrapper--details 
        my-5 rounded-xl"
        >
          {!isUser && (
            <DetailsWrapper color="#0A3758" maskColor="#f0f2f5">
              <UserDetails
                isAuth={isAuth}
                showEdit={showEdit}
                setUserValues={setUserValues}
                userValues={userValues}
                data={[
                  {
                    label: "Specialty",
                    name: "specialty",
                  },
                ]}
              />
            </DetailsWrapper>
          )}
          <DetailsWrapper color="#245D87" maskColor="#f0f2f5">
            <UserDetails
              isAuth={isAuth}
              showEdit={showEdit}
              setUserValues={setUserValues}
              userValues={userValues}
              data={[
                {
                  label: !isUser ? "Age" : "Birh Date",
                  name: !isUser ? "age" : "bdate",
                },
                {
                  label: "Phone Number",
                  name: "pnumber",
                },
              ]}
            />
          </DetailsWrapper>
          <DetailsWrapper color="#426B89" maskColor="#f0f2f5">
            <UserDetails
              isAuth={isAuth}
              showEdit={showEdit}
              setUserValues={setUserValues}
              userValues={userValues}
              data={[
                {
                  label: "Province",
                  name: "province",
                },
                {
                  label: "City",
                  name: "city",
                },
                {
                  label: "Street",
                  name: "street",
                },
              ]}
            />
          </DetailsWrapper>
          <DetailsWrapper color="#6589A3" maskColor="#f0f2f5">
            <UserDetails
              isAuth={isAuth}
              showEdit={showEdit}
              setUserValues={setUserValues}
              userValues={userValues}
              data={[
                {
                  label: "Email",
                  name: "email",
                },
              ]}
            />
          </DetailsWrapper>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
