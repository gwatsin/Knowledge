import Header from "../components/Header";
import Footer from "../components/Footer";

const Frame = () => {
  return (
    <div className="relative bg-white w-full h-[1249px] overflow-hidden">
      <div className="absolute h-[21.3%] w-full top-[112.97%] right-[0%] bottom-[-34.27%] left-[0%] bg-white" />
      <Header dimension="/search1.svg" propTop="20px" />
      <Footer propTop="983px" />
      <img
        className="absolute h-[43.07%] w-[48.68%] top-[23.94%] right-[25.69%] bottom-[32.99%] left-[25.63%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-19.svg"
      />
    </div>
  );
};

export default Frame;
