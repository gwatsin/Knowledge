import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Profile = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/add-course");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1249px] overflow-hidden text-left text-5xl text-black font-open-sans">
      <div className="absolute top-[174px] left-[59px] w-[1323px] h-[734px]">
        <div className="absolute top-[0px] left-[0px] w-[1323px] h-[734px]">
          <div className="absolute top-[90px] left-[0px] bg-white box-border w-[1323px] h-[644px] border-[1px] border-solid border-black" />
          <div className="absolute top-[0px] left-[957px] w-[366px] h-[68px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-11xl w-[366px] h-[68px] cursor-pointer"
              alt=""
              src="/rectangle-71.svg"
              onClick={onRectangle1Click}
            />
            <div className="absolute h-[35.48%] w-[68.31%] top-[23.53%] left-[15.85%] uppercase font-semibold inline-block">
              Create New Course
            </div>
          </div>
          <div className="absolute h-[12.51%] w-[18.14%] top-[24.52%] right-[76.11%] bottom-[62.97%] left-[5.74%] text-xl">
            <div className="absolute h-[21.84%] w-[44.17%] top-[0%] left-[0%] font-semibold inline-block">
              Username:
            </div>
            <div className="absolute h-[22.03%] w-[50.83%] top-[0%] left-[49.17%] font-semibold inline-block">{`{Username}`}</div>
            <div className="absolute h-[22.03%] w-[52.92%] top-[77.97%] left-[0%] font-semibold inline-block">
              My courses:
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] font-semibold">
          Profile
        </div>
        <CourseCard
          propTop="346px"
          propLeft="117px"
          propCursor="unset"
          propTextDecoration="unset"
        />
        <CourseCard
          propTop="346px"
          propLeft="calc(50% - 163.5px)"
          propCursor="unset"
          propTextDecoration="unset"
        />
        <CourseCard
          propTop="346px"
          propLeft="calc(50% + 217.5px)"
          propCursor="unset"
          propTextDecoration="unset"
        />
      </div>
      <Header dimension="/search.svg" propTop="0px" />
      <Footer propTop="983px" />
    </div>
  );
};

export default Profile;
