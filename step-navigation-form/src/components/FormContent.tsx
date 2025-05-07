import { useContext } from "react";
import MyInformation from "./shared/MyInformation";
import MyExperience from "./shared/MyExperience";
import ApplicationQuestions from "./shared/ApplicationQuestions";
import VoluntaryDisclosures from "./shared/VoluntaryDisclosures";
import Review from "./shared/Review";
import { StepContext } from "../stepContext";

const FormContent = () => {
  const { formStep } = useContext(StepContext);

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
      <div>{renderForm()}</div>
    </div>
  );
};

export default FormContent;
