import { AppState } from '../App';

type FeedbackOption = keyof AppState;

interface FeedBackOptionsProps {
  option: FeedbackOption[];
  onLeaveFeedback: (option: FeedbackOption) => void;
}

const FeedbackOptions: React.FC<FeedBackOptionsProps> = ({
  option,
  onLeaveFeedback,
}) => {
  return (
    <>
      {option.map((element, key) => {
        return (
          <button
            type="button"
            key={key}
            className={`feedback__btn feedback__btn--${element}`}
            onClick={() => onLeaveFeedback(element)}
          >
            {element}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
