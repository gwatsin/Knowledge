import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";

const Home = () => {
  return (
    <div className="relative bg-white w-full h-[1677px] overflow-hidden text-left text-5xl text-black font-open-sans">
      <div className="absolute top-[153px] left-[0px] bg-gray w-[1440px] h-[668px]" />
      <div className="absolute top-[667px] left-[537px] w-[366px] h-[86px]">
        <img
          className="absolute top-[0px] left-[0px] w-[366px] h-[86px]"
          alt=""
          src="/rectangle-72.svg"
        />
        <div className="absolute top-[27px] left-[51px] uppercase font-semibold">
          Start LEarning NOW
        </div>
      </div>
      <div className="absolute top-[894px] left-[82px] font-semibold">
        Recommended for you:
      </div>
      <div className="absolute top-[332px] left-[264px] text-[40px] font-extrabold">
        <p className="m-0">Learn Latest Tech,</p>
        <p className="m-0">From The Best Teachers,</p>
        <p className="m-0">All From Home!</p>
      </div>
      <Footer />
      <div className="absolute top-[820.5px] left-[-0.5px] box-border w-[1441px] h-px border-t-[1px] border-solid border-black" />
      <Header dimension="/search.svg" />
      <CourseCard />
      <CourseCard
        propTop="1002px"
        propLeft="179px"
        propCursor="pointer"
        propTextDecoration="none"
      />
      <CourseCard
        propTop="1002px"
        propLeft="calc(50% - 160px)"
        propCursor="pointer"
        propTextDecoration="none"
      />
      <CourseCard
        propTop="1002px"
        propLeft="calc(50% + 221px)"
        propCursor="pointer"
        propTextDecoration="none"
      />
      <img
        className="absolute top-[213px] left-[740px] w-[436px] h-[430px] overflow-hidden"
        alt=""
        src="/work-from-home.svg"
      />
    </div>
  );
};

export default Home;
