import { useMemo } from "react";

const CourseCard = ({ propTop, propLeft, propCursor, propTextDecoration }) => {
  const groupDiv2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      cursor: propCursor,
      textDecoration: propTextDecoration,
    };
  }, [propCursor, propTextDecoration]);

  return (
    <div
      className="absolute top-[1002px] left-[179px] w-80 h-[337px] text-left text-base text-black font-open-sans"
      style={groupDiv2Style}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" />
      <div
        className="absolute h-[64.69%] w-full top-[0%] right-[0%] bottom-[35.31%] left-[0%] rounded-11xl bg-gainsboro"
        style={rectangleDivStyle}
      />
      <div className="absolute top-[68.25%] left-[6.56%] text-5xl font-semibold">{`Course Name `}</div>
      <div className="absolute top-[79.23%] left-[6.56%]">Provider</div>
      <div className="absolute top-[86.94%] left-[6.56%]">Course Domain</div>
    </div>
  );
};

export default CourseCard;
