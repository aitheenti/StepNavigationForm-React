import { useContext } from "react";
import { StepContext } from "../stepContext";

const StepHeader = () => {
  const { formStepsInfo } = useContext(StepContext);
  return (
    <div className="flex flex-col">
      <h1>Job Posting Name</h1>
      <div className="flex">
        {formStepsInfo.map((step, index) => {
          return (
            <div
              className="m-5 flex flex-col items-center"
              key={`${step.stepLabel}-${index}`}
            >
              <h3 className="p-5">Step {step.stepNumber}</h3>
              <h4> {step.stepLabel}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepHeader;
