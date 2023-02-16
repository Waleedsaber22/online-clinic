import React from "react";
import { Typography } from "antd";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { BiEdit } from "react-icons/bi";

const { Title } = Typography;
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
const UserDetails = ({ data, userValues, setUserValues, isAuth, showEdit }) => {
  const isLarge = useMediaQuery({
    query: "(min-width:768px)",
  });
  return (
    <div className="flex justify-between gap-2 flex-wrap items-center">
      {data.map(({ label, name }, i) => (
        <>
          {isLarge && i % 2 == 1 ? (
            <div
              className="mx-2"
              style={{
                height: "40px",
                border: "solid 1px white",
              }}
            ></div>
          ) : !isLarge && i != 0 ? (
            <hr className="w-full" />
          ) : null}
          {isLarge && i != 0 && i % 2 == 0 ? <hr className="w-full" /> : null}
          <div className="flex justify-evenly w-full md:w-1/3 grow p-3 sm:p-4 items-center">
            <Title className="sm:whitespace-nowrap sm:p-1 xl:p-2 break-normal !text-xs md:!text-sm 2xl:!text-lg !m-0 !font-bold !text-white">
              {label}
            </Title>
            <AiOutlineArrowRight className="text-gray-300 mx-4 text-sm md:text-lg 2xl:text-xl" />
            <Title
              className={`${
                userValues?.[name]?.length > 25
                  ? "break-all"
                  : "break-normal sm:whitespace-nowrap"
              } sm:px-3 !text-xs  md:!text-sm 2xl:!text-sm !m-0 !font-normal !text-white`}
              editable={
                isAuth && showEdit
                  ? editingObject(userValues?.[name], setUserValues, name)
                  : false
              }
            >
              {userValues?.[name]}
            </Title>
          </div>
        </>
      ))}
    </div>
  );
};

export default UserDetails;
