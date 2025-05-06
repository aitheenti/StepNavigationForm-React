import { useContext } from "react";
import { StepContext } from "../stepContext";

const StepFooter = () => {
  console.log("step footer");
  const { formStepsInfo, formStep, handlePrevious, handleNext, handleSubmit } =
    useContext(StepContext);

  return (
    <div className="flex justify-end">
      {formStep > 1 && (
        <button
          disabled={formStep === formStepsInfo[0].stepNumber}
          onClick={handlePrevious}
        >
          Back
        </button>
      )}
      {formStep < formStepsInfo.length && (
        <button onClick={handleNext}>Save and Continue</button>
      )}
      {formStep === formStepsInfo.length && (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default StepFooter;
