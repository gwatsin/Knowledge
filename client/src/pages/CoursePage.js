import Header from "../components/Header";
import Footer from "../components/Footer";

const Completion = () => {
  return (
    <div className="relative bg-white w-full h-[1355px] overflow-hidden text-left text-xl text-black font-open-sans">
      <div className="absolute h-[5.02%] w-[25.42%] top-[72.32%] right-[4.1%] bottom-[22.66%] left-[70.49%]">
        <div className="absolute h-[38.24%] w-[35.79%] top-[30.88%] left-[31.97%] font-semibold inline-block">
          Go to Home
        </div>
        <img
          className="absolute top-[0px] left-[0px] rounded-11xl w-[366px] h-[68px]"
          alt=""
          src="/rectangle-7.svg"
        />
      </div>
      <Header dimension="/search.svg" propTop="20px" />
      <Footer propTop="1089px" />
      <img
        className="absolute h-[43.39%] w-[46.11%] top-[16.61%] right-[26.88%] bottom-[40%] left-[27.01%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group.svg"
      />
      <div className="absolute h-[4.87%] top-[62.36%] left-[calc(50%_-_501px)] text-[48px] font-semibold inline-block w-[1002px]">
        Congratulations on completing the course!
      </div>
    </div>
  );
};

export default Completion;
