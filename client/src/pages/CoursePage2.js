import Header from "../components/Header";
import Footer from "../components/Footer";

const CoursePage = () => {
  return (
    <div className="relative bg-white w-full h-[1355px] overflow-hidden text-left text-xl text-black font-open-sans">
      <div className="absolute top-[192px] left-[72px] w-[1297px] h-[858px]">
        <div className="absolute top-[231px] left-[39px] bg-white box-border w-[386px] h-[126px] border-[1px] border-solid border-black" />
        <div className="absolute top-[357px] left-[39px] bg-white box-border w-[386px] h-32 border-[1px] border-solid border-black" />
        <div className="absolute top-[485px] left-[39px] bg-white box-border w-[386px] h-[126px] border-[1px] border-solid border-black" />
        <div className="absolute top-[611px] left-[39px] bg-white box-border w-[386px] h-32 border-[1px] border-solid border-black" />
        <div className="absolute top-[231px] left-[482px] bg-white box-border w-[815px] h-[555px] border-[1px] border-solid border-black" />
        <div className="absolute h-[3.03%] w-[10.87%] top-[47.55%] left-[6.25%] font-semibold inline-block">
          Chapter 2
        </div>
        <div className="absolute h-[3.03%] w-[10.87%] top-[62.35%] left-[6.25%] font-semibold inline-block">
          Chapter 3
        </div>
        <div className="absolute h-[3.03%] w-[10.87%] top-[76.46%] left-[6.25%] font-semibold inline-block">
          Chapter 4
        </div>
        <div className="absolute h-[3.03%] w-[10.87%] top-[32.75%] left-[6.25%] font-semibold inline-block">
          Chapter 1
        </div>
        <div className="absolute h-[3.03%] w-[10.87%] top-[13.64%] left-[3.01%] font-semibold inline-block">
          Course Name
        </div>
        <div className="absolute h-[3.03%] w-[10.87%] top-[21.45%] left-[3.01%] font-semibold inline-block">
          Chapters:
        </div>
        <div className="absolute top-[0px] left-[0px] text-5xl font-semibold">
          Progress
        </div>
        <div className="absolute top-[58px] left-[25px] bg-white box-border w-[1272px] h-[11px] border-[1px] border-solid border-black" />
        <div className="absolute h-[7.93%] w-[28.22%] top-[92.07%] right-[68.77%] bottom-[0%] left-[3.01%]">
          <div className="absolute h-[38.24%] w-[35.79%] top-[30.88%] left-[31.97%] font-semibold inline-block">
            Attempt Quiz
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-11xl w-[366px] h-[68px]"
            alt=""
            src="/rectangle-7.svg"
          />
        </div>
      </div>
      <Header dimension="/search.svg" propTop="20px" />
      <Footer propTop="1089px" />
    </div>
  );
};

export default CoursePage;
