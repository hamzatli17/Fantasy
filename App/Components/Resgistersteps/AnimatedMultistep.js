import React, { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";
const defaultInOnNext = "fadeInLeft";
const defaultOutOnNext = "none";
const defaultInOnBack = "fadeInRight";
const defaultOutOnBack = "none";

const AnimatedMultistep = (props) => {
  useEffect(() => {
    setAction(props.comeInOnNext);
    setTotalSteps(props.steps.length - 1);
  }, [props.comeInOnNext, props.steps.length]);

  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [userState, setUserState] = useState({});
  const [action, setAction] = useState("fadeInLeft");
  const [animationFinished, setAnimationFinished] = useState(false);

  const next = () => {
    const animate = true;
    const duration = 500;
    console.log("current step", currentStep);
    console.log("current totalSteps", totalSteps);
    if (currentStep !== totalSteps) {
      onNext();
      setAction(defaultOutOnNext);
      setAnimationFinished(false);
      if (animate) {
        setTimeout(() => {
          setCurrentStep(currentStep + 1);
        }, duration);
      }
    } else {
      console.log("finish");
      finish();
    }
  };

  const nextTwice = () => {
    const animate = true;
    const duration = 500;

    if (currentStep !== totalSteps) {
      onNext();
      setAction(defaultOutOnNext);
      setAnimationFinished(false);
      if (animate) {
        setTimeout(() => {
          setCurrentStep(currentStep + 2);
        }, duration);
      }
    } else {
      finish();
    }
  };

  const back = () => {
    const animate = true;
    const OutOnBack = defaultOutOnBack;
    const duration = 500;

    if (currentStep !== 0) {
      onBack();
      setAction(OutOnBack);
      setAnimationFinished(false);

      if (animate) {
        setTimeout(() => {
          setCurrentStep(currentStep - 1);
        }, duration);
      }
    } else {
      dismiss();
    }
  };

  const backTwice = () => {
    const animate = true;
    const OutOnBack = defaultOutOnBack;
    const duration = 500;
    if (currentStep !== 0) {
      onBack();
      setAction(OutOnBack);
      setAnimationFinished(false);
      if (animate) {
        setTimeout(() => {
          setCurrentStep(0);
        }, duration);
      }
    } else {
      dismiss();
    }
  };

  const onNext = () => {
    if (props.onNext) {
      if (typeof props.onNext !== "function") {
        throw new Error("onNext parameter should be a function");
      }
      props.onNext();
    }
  };

  const onBack = () => {
    if (props.onBack) {
      if (typeof props.onBack !== "function") {
        throw new Error("onBack parameter should be a function");
      }
      props.onBack();
    }
  };

  const finish = () => {
    if (props.onFinish) {
      props.onFinish(userState);
    }
  };

  const dismiss = () => {
    if (props.onDismiss) {
      props.onDismiss();
    }
  };

  const saveState = (state) => {
    if (typeof state !== "object") {
      throw new Error("State must be an object");
    }
    setUserState({ ...userState, ...state });
  };

  const resetState = (state) => {
    setUserState({});
  };

  const getState = () => {
    return userState;
  };

  const getCurrentStep = () => {
    return currentStep + 1;
  };

  const getTotalSteps = () => {
    return totalSteps + 1;
  };

  const animationEnd = () => {
    const OutOnBack = props.OutOnBack ? props.OutOnBack : defaultOutOnBack;
    const comeInOnBack = props.comeInOnBack
      ? props.comeInOnBack
      : defaultInOnBack;
    const comeInOnNext = props.comeInOnNext
      ? props.comeInOnNext
      : defaultInOnNext;

    if (!animationFinished) {
      setAction(action == OutOnBack ? comeInOnBack : comeInOnNext);
      setAnimationFinished(true);
    }
  };

  const Step = props.steps[currentStep].component;
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
      <Animatable.View onAnimationEnd={animationEnd} style={{ flex: 1 }}>
        <Step
          next={next}
          back={back}
          props={props.allProps}
          backTwice={backTwice}
          saveState={saveState}
          nextTwice={nextTwice}
          resetState={resetState}
          getState={getState}
          getCurrentStep={getCurrentStep}
          getTotalSteps={getTotalSteps}
          setCurrentStep={setCurrentStep}
        />
      </Animatable.View>
    </ScrollView>
  );
};

AnimatedMultistep.propTypes = {
  steps: PropTypes.array,
  onFinish: PropTypes.func,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  comeInOnNext: PropTypes.string,
  OutOnNext: PropTypes.string,
  comeInOnBack: PropTypes.string,
  OutOnBack: PropTypes.string,
  duration: PropTypes.number,
  defaultState: PropTypes.object,
};

export default AnimatedMultistep;
