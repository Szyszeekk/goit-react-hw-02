import { useState, useEffect } from "react";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";

const App = () => {
  const [rates, setRates] = useState(() => {
    const savedGood = parseInt(window.localStorage.getItem("good")) || 0;
    const savedNeutral = parseInt(window.localStorage.getItem("neutral")) || 0;
    const savedBad = parseInt(window.localStorage.getItem("bad")) || 0;

    return { good: savedGood, neutral: savedNeutral, bad: savedBad };
  });

  const updateFeedback = (feedbackType) => {
    setRates((prevRates) => {
      const updatedRates = {
        ...prevRates,
        [feedbackType]: prevRates[feedbackType] + 1,
      };
      window.localStorage.setItem(feedbackType, updatedRates[feedbackType]);
      return updatedRates;
    });
  };

  const resetFeedback = () => {
    setRates({ good: 0, neutral: 0, bad: 0 });
    window.localStorage.removeItem("good");
    window.localStorage.removeItem("neutral");
    window.localStorage.removeItem("bad");
  };

  const totalFeedback = rates.good + rates.neutral + rates.bad;
  const isFeedback = totalFeedback > 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        isFeedback={isFeedback}
      />
      {isFeedback && <Feedback rates={rates} totalFeedback={totalFeedback} />}
    </>
  );
};

export default App;
