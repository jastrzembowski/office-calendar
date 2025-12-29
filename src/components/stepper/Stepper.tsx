import { Line } from "./line";
import { Step } from "./step";

import styles from "./styles.module.scss";

interface StepperProps {
  steps: string[];
  currentStep: number;
}
export const Stepper = ({ steps, currentStep }: StepperProps) => {
  
  const getStepStatus = (index: number) => {
    if (currentStep > index) return "completed";
    if (currentStep === index) return "current";
    return "locked";
  }
  
  return (

    <div className={styles.stepper}>
      {steps.map((step, index) => (
        <div key={index} className={styles.stepWrapper}>
          <Step step={step} status={getStepStatus(index)} />
          {index < steps.length - 1 && <Line />}
        </div>
      ))}
    </div>
  );
};

