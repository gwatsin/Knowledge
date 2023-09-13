import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const[values, setValues] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/Login', values)
    .then(res => {
      if(res.data.Status === "Success"){
        navigate('/')
      } else {
          alert("Error");
      }
    })
    .then(res => console.log(res))
    .then(res => console.log(values))
    .then(err => console.log(err));
  }

  return (
    <div className="relative bg-white w-full h-[1173px] overflow-hidden text-left text-xl text-black font-open-sans">
      <form onSubmit={handleSubmit}>
        <div className="absolute top-[208px] left-[58px] w-[1323px] h-[644px]">
        <div className="absolute top-[0px] left-[0px] w-[1323px] h-[644px]">
          <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1323px] h-[644px] border-[1px] border-solid border-black" />
          <div className="absolute h-[4%] w-[11.56%] top-[77.95%] left-[38.93%] font-semibold inline-block">{`Not Registered? `}</div>
          
            <div className="absolute h-[4%] w-[9.75%] top-[77.95%] left-[51.1%] font-semibold text-orangered inline-block">
            <Link to="/register">Register here</Link>
          </div>
          <img
            className="absolute h-[26.23%] w-[40.82%] top-[7.57%] right-[29.55%] bottom-[66.2%] left-[29.63%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/online-learning-made-easy-12@2x.png"
          />
        </div>
        <button type = 'submit' className="absolute top-[418px] left-[479px] w-[366px] h-[68px] text-5xl">
          <img
            className="absolute top-[0px] left-[0px] rounded-11xl w-[366px] h-[68px]"
            alt=""
            src="/rectangle-71.svg"
          />
          <div className="absolute h-[46.32%] w-[20.77%] top-[26.47%] left-[39.62%] uppercase font-semibold inline-block">
            Login
          </div>
        </button>
        <div className="absolute h-[12.42%] w-[27.66%] top-[49.38%] right-[36.13%] bottom-[38.2%] left-[36.21%]">
          <div className="absolute h-[32.21%] w-[27.05%] top-[0%] left-[0%] font-semibold inline-block">
            Password:
          </div>
          <input onChange={e => setValues({...values, password: e.target.value})} className="absolute top-[31px] left-[0px] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] box-border w-[366px] h-[49px] border-[1px] border-solid border-black" />
        </div>
        <div className="absolute h-[12.27%] w-[27.66%] top-[36.18%] right-[36.13%] bottom-[51.55%] left-[36.21%]">
          <div className="absolute h-[32.62%] w-[28.96%] top-[0%] left-[0%] font-semibold inline-block">
            Email:
          </div>
          <input onChange={e => setValues({...values, email: e.target.value})} className="absolute top-[30px] left-[0px] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] box-border w-[366px] h-[49px] border-[1px] border-solid border-black" />
        </div>
      </div>
      </form>
      <Header dimension="/search.svg" propTop="20px" />
      <Footer propTop="907px" />
    </div>
  );
};

export default Login;
