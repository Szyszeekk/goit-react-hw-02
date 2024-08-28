const Feedback = ({ rates, totalFeedback }) => {
  return (
    <div>
      <p>Good: {rates.good}</p>
      <p>Neutral: {rates.neutral}</p>
      <p>Bad: {rates.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>
        Positive:{" "}
        {Math.round(((rates.good + rates.neutral) / totalFeedback) * 100)}%
      </p>
    </div>
  );
};

export default Feedback;
