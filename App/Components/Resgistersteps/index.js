import React from "react";
import AnimatedMultistep from "./AnimatedMultistep"
import { RegisterFirstStep } from "./Register/RegisterFisrtStep";
import { RegisterSecondStep } from "./Register/RegisterSecondStep";
import { RegisterThirdStep } from "./Register/RegisterThirdStep";



const ReactegisterSteps = (props) => {
  const allSteps = [
     { name: "step 1", component: RegisterFirstStep },
     { name: "step 2", component: RegisterSecondStep },
     { name: "step 3", component: RegisterThirdStep },

  /*   { name: "step 2", component: CreateSecondStep }, 
    { name: "step 3", component: CreateThirdStep },
    { name: "step 4", component: CreatefourthStep }, */
  ];

  const finish = async (finalState) => {
    //  props.navigateToLogin();
  };

  const dismiss = () => {
    //  props.navigateToLogin();
  };

  return (
    <AnimatedMultistep
      onDismiss={dismiss}
      steps={allSteps}
      onFinish={finish}
      allProps={props}
      comeInOnNext="slideInRight"
      OutOnNext="slideOutLeft"
      comeInOnBack="slideInLeft"
      OutOnBack="slideOutRight"
    />
  );
};

export default ReactegisterSteps;
