import { useMemo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ dimension, propTop }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  
  const onArtificialIntelligenceClick = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  const onNameClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <>
    <div
      className="absolute top-[20px] left-[0px] w-[1440px] h-[133px] text-left text-xl text-white font-open-sans"
      style={groupDiv1Style}
    >
      <div className="absolute h-[45.11%] w-[12.71%] top-[0%] right-[83.61%] bottom-[54.89%] left-[3.68%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/online-learning-made-easy-1@2x.png"
        />
      </div>
      <div className="absolute h-[38.35%] w-full top-[61.65%] right-[0%] bottom-[0%] left-[0%] bg-black" />
      <input
        className="bg-white absolute h-[38.35%] w-[31.04%] top-[3.76%] right-[37.29%] bottom-[57.89%] left-[31.67%] rounded-11xl box-border border-[1px] border-solid border-black"
        type="text"
        placeholder="Search Courses"
      />
      <div className="absolute top-[12.78%] left-[67.22%] uppercase font-semibold text-black">
        Login
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[12.78%] left-[67.22%] uppercase font-semibold text-black"
        to="/login"
        onClick={onLoginClick}
      >
        Login
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute w-[4.51%] top-[70.68%] left-[10.63%] uppercase text-[inherit] inline-block"
        to="/"
        onClick={onHomeClick}
      >
        Home
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute w-[17.85%] top-[70.68%] left-[21.32%] uppercase text-[inherit] inline-block"
        to="/courses"
        onClick={onArtificialIntelligenceClick}
      >
        artificial Intelligence
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute w-[9.38%] top-[70.68%] left-[45.35%] uppercase text-[inherit] inline-block"
        to="/courses"
      >
        Blockchain
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute w-[14.38%] top-[70.68%] left-[61.53%] uppercase text-[inherit] inline-block"
        to="/courses"
      >
        Cloud Computing
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute w-[11.32%] top-[70.68%] left-[82.08%] uppercase text-[inherit] inline-block"
        to="/courses"
      >
        Deep Learning
      </Link>
      <div className="absolute top-[70.68%] left-[55.42%] uppercase">{`  `}</div>
      <div className="absolute top-[12.78%] left-[88.47%] uppercase font-semibold text-black">
        Logout
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[12.78%] left-[77.99%] uppercase font-semibold text-black"
        to="/profile"
        onClick={onNameClick}
      >
        Name
      </Link>
      <div className="absolute h-[37.59%] w-[5.63%] top-[3.76%] right-[37.36%] bottom-[58.65%] left-[57.01%]">
        <div className="absolute h-[98%] w-full top-[2%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-orangered" />
        <img
          className="absolute h-[94%] w-[58.02%] top-[0%] right-[20.99%] bottom-[6%] left-[20.99%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={dimension}
        />
      </div>
    </div>
    </>
  );
};

export default Header;
