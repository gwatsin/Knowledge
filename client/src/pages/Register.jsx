import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Register() {
  const[values, setValues] = useState({
    email: '',
    password: '',
    name: ''
  })
  //const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/Register', values)
    .then(res => console.log(res))
    .then(res =>console.log(values))
    .then(err => console.log(err));
  }

  return (
    <div className="relative bg-white w-full h-[1226px] overflow-hidden text-left text-xl text-black font-open-sans">
      <form onSubmit={handleSubmit}>
        <img
        className="absolute top-[207px] left-[53px] w-[1323px] h-[702px]"
        alt=""
        src="/rectangle-201.svg"
      />
      <div className="absolute top-[63.87%] left-[39.03%] font-semibold">{`Already Registered? `}</div>
      <div className="absolute top-[63.87%] left-[52.78%] font-semibold text-orangered">
      <Link to="/login">Login here</Link>
      </div>
      <img
        className="absolute h-[14.44%] w-[37.5%] top-[21.86%] right-[31.6%] bottom-[63.7%] left-[30.9%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/online-learning-made-easy-11@2x.png"
      />
      <button type = 'submit' className="absolute top-[705px] left-[560px] w-[366px] h-[68px] text-5xl">
          <img
            className="absolute top-[0px] left-[0px] rounded-11xl w-[366px] h-[68px]"
            alt=""
            src="/rectangle-71.svg"
          />
        <div className="absolute top-[26.47%] left-[36.61%] uppercase font-semibold">
          SIGN UP
        </div>
      </button>
      <div className="absolute h-[6.2%] w-[25.42%] top-[43.15%] right-[37.64%] bottom-[50.65%] left-[36.94%]">
        <div className="absolute top-[0%] left-[0%] font-semibold">
          Email:
        </div>
        <input onChange={e => setValues({...values, email: e.target.value})} className="absolute top-[27px] left-[0px] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] box-border w-[366px] h-[49px] border-[1px] border-solid border-black" />
      </div>
      <div className="absolute h-[6.2%] w-[25.42%] top-[50.16%] right-[37.64%] bottom-[43.64%] left-[36.94%]">
        <div className="absolute top-[0%] left-[0%] font-semibold">
          Password:
        </div>
        <input onChange={e => setValues({...values, password: e.target.value})} className="absolute top-[27px] left-[0px] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] box-border w-[366px] h-[49px] border-[1px] border-solid border-black" />
      </div>
      <div className="absolute h-[6.2%] w-[25.42%] top-[36.13%] right-[37.64%] bottom-[57.67%] left-[36.94%]">
        <div className="absolute top-[0%] left-[0%] font-semibold">
          Name:
        </div>
        <input onChange={e => setValues({...values, name: e.target.value})} className="absolute top-[27px] left-[0px] rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] box-border w-[366px] h-[49px] border-[1px] border-solid border-black" />
      </div>
      <Header dimension="/search.svg" propTop="20px" />
      <Footer propTop="964px" />
      </form>
    </div>
  );
};

export default Register;
