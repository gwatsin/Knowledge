import Header from "../components/Header";
import Footer from "../components/Footer";

const QuizPage = () => {
  return (
    <div className="relative bg-white w-full h-[1355px] overflow-hidden text-left text-xl text-black font-open-sans">
      <div className="absolute top-[192px] left-[72px] w-[1286px] h-[858px]">
        <div className="absolute top-[191px] left-[28px] bg-white box-border w-[386px] h-[126px] border-[1px] border-solid border-black" />
        <div className="absolute top-[317px] left-[28px] bg-white box-border w-[386px] h-32 border-[1px] border-solid border-black" />
        <div className="absolute top-[445px] left-[28px] bg-white box-border w-[386px] h-[126px] border-[1px] border-solid border-black" />
        <div className="absolute top-[571px] left-[28px] bg-white box-border w-[386px] h-32 border-[1px] border-solid border-black" />
        <div className="absolute top-[191px] left-[471px] bg-white box-border w-[815px] h-[555px] border-[1px] border-solid border-black" />
        <div className="absolute h-[3.03%] w-[10.96%] top-[28.09%] left-[5.44%] font-semibold inline-block">
          Question 1
        </div>
        <div className="absolute h-[3.03%] w-[10.96%] top-[42.89%] left-[5.44%] font-semibold inline-block">
          Question 2
        </div>
        <div className="absolute h-[3.03%] w-[10.96%] top-[57.69%] left-[5.44%] font-semibold inline-block">
          Question 3
        </div>
        <div className="absolute h-[3.03%] w-[10.96%] top-[72.38%] left-[5.44%] font-semibold inline-block">
          Question 4
        </div>
        <div className="absolute h-[3.03%] w-[10.96%] top-[8.97%] left-[2.18%] font-semibold inline-block">
          Course Name
        </div>
        <div className="absolute h-[3.03%] w-[10.96%] top-[16.78%] left-[2.18%] font-semibold inline-block">
          Questions:
        </div>
        <div className="absolute top-[0px] left-[0px] text-5xl font-semibold">
          Quiz
        </div>
        <div className="absolute h-[7.93%] w-[28.46%] top-[92.07%] right-[68.51%] bottom-[0%] left-[3.03%]">
          <div className="absolute h-[38.24%] w-[35.79%] top-[30.88%] left-[31.97%] font-semibold inline-block">
            Submit Quiz
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

export default QuizPage;
