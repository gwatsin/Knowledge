import { useMemo } from "react";

const Footer = ({ propTop }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[1411px] left-[-3px] w-[1443px] h-[266px] text-left text-xl text-black font-open-sans"
      style={groupDivStyle}
    >
      <div className="absolute h-full w-[99.79%] top-[0%] right-[0%] bottom-[0%] left-[0.21%] bg-white" />
      <img
        className="absolute h-[69.53%] w-[13.79%] top-[0%] right-[4.09%] bottom-[30.47%] left-[82.12%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/online-learning-made-easy-sm-ol-1@2x.png"
      />
      <div className="absolute h-[23.68%] w-[99.79%] top-[76.32%] right-[0%] bottom-[0%] left-[0.21%] bg-orangered" />
      <div className="absolute w-[4.5%] top-[16.17%] left-[13.24%] uppercase inline-block">
        Home
      </div>
      <div className="absolute w-[17.81%] top-[42.86%] left-[7.9%] uppercase inline-block">
        artificial Intelligence
      </div>
      <div className="absolute w-[9.36%] top-[16.17%] left-[32.99%] uppercase inline-block">
        Blockchain
      </div>
      <div className="absolute w-[14.35%] top-[42.86%] left-[30.49%] uppercase inline-block">
        Cloud Computing
      </div>
      <div className="absolute w-[11.3%] top-[16.17%] left-[54.82%] uppercase inline-block">
        Deep Learning
      </div>
      <div className="absolute w-[11.3%] top-[42.86%] left-[56.9%] uppercase inline-block">
        About
      </div>
      <div className="absolute w-[19.61%] top-[83.08%] left-[40.12%] text-white inline-block">
        <span className="uppercase">K</span>nowl Edge E-learning, 2023
      </div>
      <div className="absolute h-[0.38%] w-[99.86%] top-[-0.19%] right-[0.17%] bottom-[99.81%] left-[-0.03%] box-border border-t-[1px] border-solid border-black" />
    </div>
  );
};

export default Footer;
