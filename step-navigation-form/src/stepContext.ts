import { createContext } from "react";
import { InformationFormValues } from "./model/InformationFormValues";

interface formContextType {
  formStep: number;
  setFormStep: React.Dispatch<React.SetStateAction<number>>;
  formStepsInfo: {
    stepLabel: string;
    stepNumber: number;
  }[];
  validateNextAndContinue: () => void;
  handlePrevious: () => void;
  onSubmit: (data: InformationFormValues) => void;
  handleSubmit: (onSubmit: (data: InformationFormValues) => void) => void;
}

export const StepContext = createContext(<formContextType>{});
