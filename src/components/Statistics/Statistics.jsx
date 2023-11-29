import Notification from "components/Notification/Notification";


const Statistics = ({ good, neutral, bad, total = 0, positivePercentage }) => {
    return ( <div>
                <span>Good: {good}</span>
                <span>Neutral: {neutral}</span>
                <span>Bad: {bad}</span>
                <span>Total: {total}</span>
        <span>Positive feedback: {positivePercentage}%</span>
            </div>) 
}

export default Statistics;