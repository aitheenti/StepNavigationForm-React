import React from "react";

import "./App.css";
import { StepContext } from "./stepContext";
import { InformationFormValues } from "./model/InformationFormValues";
import StepHeader from "./components/StepsHeader";
import FormContent from "./components/FormContent";
import { FormProvider, useForm } from "react-hook-form";
import StepFooter from "./components/StepFooter";

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

  const methods = useForm<InformationFormValues>({
    mode: "onBlur",
  });

  const [formStep, setFormStep] = React.useState(1);

  const validateNextAndContinue = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      if (formStep < formStepsInfo.length) {
        setFormStep((step) => step + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (formStep > formStepsInfo[0].stepNumber) {
      setFormStep((step) => step - 1);
    }
  };

  const onSubmit = (data: InformationFormValues) => {
    console.log(data);
  };

  return (
    <StepContext.Provider
      value={{
        formStep,
        setFormStep,
        formStepsInfo,
        validateNextAndContinue,
        handlePrevious,
        onSubmit,
        handleSubmit: methods.handleSubmit,
      }}
    >
      <FormProvider {...methods}>
        <StepHeader />
        <FormContent />
        <StepFooter />
      </FormProvider>
    </StepContext.Provider>
  );
}

export default App;
