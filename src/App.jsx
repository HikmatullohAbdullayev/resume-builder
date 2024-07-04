import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Result from "./components/Result";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    ism: "",
    familya: "",
    yosh: "",
    jinsi: "",
    telefon: "",
    kasbi: "",
    email: "",
    telegram: "",
    instagram: "",
    linkedin: "",
    skills: "",
    tajribasi: "",
    talim: "",
    til: "",
    about: "",
    qoshimcha: "",
    projects: [
      { name: "", link: "", info: "" },
      { name: "", link: "", info: "" },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(data);
    setStep(1)
    // Ma'lumotlarni yuborish uchun kerakli  yozing
  };
  const next = () => {
    if (step < 7) {
      
      setStep((prewStep) => prewStep+1)
    }else{
      setStep(1)
    }
    // Ma'lumotlarni yuborish uchun kerakli  yozing
  };

  

  return (
    <div>
    <form onSubmit={submitData}>
  {step === 1 && (
    <Step1 handleChange={handleChange} data={data} />
  )}
  {step === 2 && (
    <Step2 handleChange={handleChange} data={data} />
  )}
  {step === 3 && (
    <Step3 handleChange={handleChange} data={data} />
  )}
  {step === 4 && (
    <Step4 handleChange={handleChange} data={data} />
  )}
  {step === 5 && (
    <Step5 handleChange={handleChange} data={data} />
  )}
  {step === 6 && (
    <Step6 handleChange={handleChange} data={data} />
  )}
  {step === 7 && (
    <Result  data={data} />
  )}
  {step === 7 ? <button  type="submit">Tayyor</button> : ""
  }
  
 {step < 7 &&  <button onClick={next} type="button"> Keyingisi </button> }
  
</form>

    </div>
  );
}

export default App;
