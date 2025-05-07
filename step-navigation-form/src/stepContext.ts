import { createContext } from "react";
import { FormValues } from "./model/FormValues";

interface formContextType {
  formStep: number;
  setFormStep: React.Dispatch<React.SetStateAction<number>>;
  formStepsInfo: {
    stepLabel: string;
    stepNumber: number;
  }[];
  validateNextAndContinue: () => void;
  handlePrevious: () => void;
  onSubmit: (data: FormValues) => void;
  handleSubmit: (onSubmit: (data: FormValues) => void) => void;
}

export const StepContext = createContext(<formContextType>{});
