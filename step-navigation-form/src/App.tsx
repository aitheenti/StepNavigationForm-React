import React from "react";

import "./App.css";
import { StepContext } from "./stepContext";
import { FormValues } from "./model/FormValues";
import StepHeader from "./components/StepsHeader";
import FormContent from "./components/FormContent";
import { FormProvider, useForm } from "react-hook-form";
import StepFooter from "./components/StepFooter";
import { DevTool } from "@hookform/devtools";

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

  const methods = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      country: "",
      email: "",
      prefix: "",
      firstName: "",
      middleName: "",
      lastName: "",
      suffix: "",
      jobDetails: [],
      languages: [],
      socialNetworkUrl: "",
      minQualifications: "",
      legalWork: "",
      associateStatus: "",
      hire: "",
      sponsorship: "",
      sponsorshipType: "",
      availability: "",
    },
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

  const onSubmit = (data: FormValues) => {
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
        {process.env.NODE_ENV === "development" && (
          <DevTool control={methods.control} />
        )}
      </FormProvider>
    </StepContext.Provider>
  );
}

export default App;
