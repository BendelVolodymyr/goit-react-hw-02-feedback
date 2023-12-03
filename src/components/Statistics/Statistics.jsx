import Notification from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
    <div className="feedback__box">
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {positivePercentage}%</span>
    </div>
  );
};

export default Statistics;
