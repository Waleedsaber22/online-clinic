import React, { Children, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
const DetailsWrapper = ({ color, maskColor, children }) => {
  const wrapperRef = useRef(null);
  const isMobile = useMediaQuery({
    query: "(max-width:445px)",
  });
  const [heightWrapperRef, setHeightWrapperRef] = useState(
    wrapperRef?.current?.offsetHeight || null
  );
  useEffect(() => {
    setHeightWrapperRef(wrapperRef?.current?.offsetHeight);
    const observer = new ResizeObserver(() =>
      setHeightWrapperRef(wrapperRef?.current?.offsetHeight)
    );
    observer.observe(wrapperRef?.current);
  }, []);
  return (
    // lg:w-3/4 2xl:w-1/2
    <div
      className="profile--specialty--cover
        relative my-5 w-fit overflow-hidden"
      style={{
        paddingRight: `${heightWrapperRef / (isMobile ? 3 : 2)}px`,
        backgroundColor: color || "gray",
      }}
      ref={wrapperRef}
    >
      <div
        className={`cover--mask 
      ${maskColor ? "" : "!border-r-gray-300"}`}
        style={{
          position: "absolute",
          left: `calc(100% - ${heightWrapperRef / (isMobile ? 3 : 2)}px)`,
          width: `${heightWrapperRef}px`,
          height: `${heightWrapperRef}px`,
          borderRadius: `${heightWrapperRef / 2}px`,
          backgroundColor: maskColor,
          // borderLeft: `solid ${heightWrapperRef / 2}px transparent`,
          // borderRight: `solid ${heightWrapperRef / 2}px ${maskColor || "blue"}`,
          // borderTop: `solid ${heightWrapperRef / 2}px transparent`,
          // borderBottom: `solid ${heightWrapperRef / 2}px transparent`,
        }}
      ></div>
      {Children.map(children, (child) => child)}
    </div>
  );
};

export default DetailsWrapper;
