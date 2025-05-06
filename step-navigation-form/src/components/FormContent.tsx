import { useContext } from "react";
import MyInformation from "./shared/MyInformation";
import MyExperience from "./shared/MyExperience";
import ApplicationQuestions from "./shared/ApplicationQuestions";
import VoluntaryDisclosures from "./shared/VoluntaryDisclosures";
import Review from "./shared/Review";
import { StepContext } from "../stepContext";
import { FormProvider, useForm } from "react-hook-form";
import { FormValues } from "../model/FormValues";

const FormContent = () => {
  const { formStep, onSubmit } = useContext(StepContext);

  const methods = useForm<FormValues>();

  const renderForm = () => {
    switch (formStep) {
      case 1:
        return <MyInformation />;
      case 2:
        return <MyExperience />;
      case 3:
        return <ApplicationQuestions />;
      case 4:
        return <VoluntaryDisclosures />;
      case 5:
        return <Review />;
      default:
        return <div>Loading....</div>;
    }
  };

  return (
    <div>
      <h1>FormContent</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>{renderForm()}</div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormContent;
