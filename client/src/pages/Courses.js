import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  return (
    <div className="relative bg-white w-full h-[1528px] overflow-hidden text-left text-5xl text-black font-open-sans">
      <div className="absolute top-[256px] left-[153px] font-semibold">{`Course Category `}</div>
      <Header dimension="/search.svg" propTop="20px" />
      <Footer propTop="1262px" />
      <CourseCard
        propTop="377px"
        propLeft="calc(50% - 561px)"
        propCursor="unset"
        propTextDecoration="unset"
      />
      <CourseCard
        propTop="377px"
        propLeft="calc(50% - 160px)"
        propCursor="unset"
        propTextDecoration="unset"
      />
      <CourseCard
        propTop="377px"
        propLeft="calc(50% + 234px)"
        propCursor="unset"
        propTextDecoration="unset"
      />
      <CourseCard
        propTop="802px"
        propLeft="calc(50% - 567px)"
        propCursor="unset"
        propTextDecoration="unset"
      />
      <CourseCard
        propTop="802px"
        propLeft="calc(50% - 166px)"
        propCursor="unset"
        propTextDecoration="unset"
      />
      <CourseCard
        propTop="802px"
        propLeft="calc(50% + 228px)"
        propCursor="unset"
        propTextDecoration="unset"
      />
    </div>
  );
};

export default Courses;
