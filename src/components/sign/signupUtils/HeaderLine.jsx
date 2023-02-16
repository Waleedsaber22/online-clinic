import React from "react";

export const HeaderLine = ({
  font,
  value,
  color,
  size,
  lineStyle,
  style,
  imp,
  classLine,
  classText,
  center,
  invisible,
}) => {
  return (
    <>
      <span
        style={style}
        className={`text-${size || "lg"} ${classText}
    ${center ? "text-center w-full" : ""} 
    inline-block font-${font || "bold"} !text-${color || "white"}`}
      >
        {imp && <span className="text-red-600">* </span>} {value}
      </span>
      {!invisible && (
        <hr
          style={lineStyle}
          className={`${classLine ? classLine : "border-2 mt-1 mb-4"}`}
        />
      )}
    </>
  );
};
export default HeaderLine;
