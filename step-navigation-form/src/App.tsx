import React from "react";

import "./App.css";
import FormContent from "./components/FormContent";
import StepFooter from "./components/StepFooter";
import StepHeader from "./components/StepsHeader";
import { StepContext } from "./stepContext";
import { FormValues } from "./model/FormValues";

function App() {
  const formStepsInfo = [
    {
      stepLabel: "My Information",
      stepNumber: 1,
    },
    {
      stepLabel: "My Experience",
      stepNumber: 2,
    },
    {
      stepLabel: "Application Questions",
      stepNumber: 3,
    },
    {
      stepLabel: "Voluntary Disclosures",
      stepNumber: 4,
    },
    {
      stepLabel: "Review",
      stepNumber: 5,
    },
  ];

  const [formStep, setFormStep] = React.useState(1);

  const handleNext = () => {
    if (formStep < formStepsInfo.length) {
      setFormStep((step) => step + 1);
    }
  };

  const handlePrevious = () => {
    if (formStep > formStepsInfo[0].stepNumber) {
      setFormStep((step) => step - 1);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <StepContext.Provider
      value={{
        formStep,
        setFormStep,
        formStepsInfo,
        handleNext,
        handlePrevious,
        onSubmit,
        // handleSubmit,
      }}
    >
      <StepHeader />

      <FormContent />
      <StepFooter />
    </StepContext.Provider>
  );
}

export default App;
