import { useContext } from "react";
import { StepContext } from "../stepContext";

const StepFooter = () => {
  const {
    formStepsInfo,
    formStep,
    handlePrevious,
    onSubmit,
    validateNextAndContinue,
    handleSubmit,
  } = useContext(StepContext);

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
        <button onClick={validateNextAndContinue}>Save and Continue</button>
      )}
      {formStep === formStepsInfo.length && (
        <button onClick={() => handleSubmit(onSubmit)}>Submit</button>
      )}
    </div>
  );
};

export default StepFooter;
