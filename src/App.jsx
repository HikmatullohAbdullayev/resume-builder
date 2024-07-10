
import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Result from "./components/Result";
import { Button, Container, Stack, styled } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: blue[500],
  marginTop: "20px",
  "&:hover": {
    backgroundColor: blue[700],
  },
}));

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    ism: "",
    familya: "",
    yosh: "",
    jinsi: "",
    telefon: "",
    skills: "",
    tajribasi: "",
    talim: "",
    til: "",
    about: "",
    qoshimcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const next = () => {
    if (step === 1 && data.ism && data.familya) {
      setStep((prev) => prev + 1);
    } else if (step === 2 && data.yosh && data.jinsi && data.telefon) {
      setStep((prev) => prev + 1);
    } else if (
      step === 3 &&
      data.skills &&
      data.tajribasi &&
      data.talim &&
      data.til
    ) {
      setStep((prev) => prev + 1);
    } else if (step === 4 && data.about && data.qoshimcha) {
      setStep((prev) => prev + 1);
    } else if (step === 5) {
      setStep(1);
    } else {
      setStep(1);
    }
  };

  let stepComponent;

  if (step === 1) {
    stepComponent = <Step1 handleChange={handleChange} data={data} />;
  } else if (step === 2) {
    stepComponent = <Step2 handleChange={handleChange} data={data} />;
  } else if (step === 3) {
    stepComponent = <Step4 handleChange={handleChange} data={data} />;
  } else if (step === 4) {
    stepComponent = <Step5 handleChange={handleChange} data={data} />;
  } else if (step === 5) {
    stepComponent = <Result data={data} />;
  } else {
    stepComponent = <Step1 handleChange={handleChange} data={data} />;
  }

  return (
    <Container maxWidth="sm">
      <Stack textAlign="center" alignItems="center" paddingY="20px">
        <form onSubmit={submitData}>
          {stepComponent}
          <ColorButton variant="contained" onClick={next}>
            Keyingisi
          </ColorButton>
        </form>
      </Stack>
    </Container>
  );
}

export default App;
