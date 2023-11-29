import React, {Component} from "react";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  click = event => {
    this.setState({
      [event]: this.state[event] + 1
    });

  };

  allClick = ({good, neutral, bad}) => good + neutral + bad;

  positivePercentage = ({ good, neutral, bad }) => Math.round((good * 100) / this.allClick(this.state)); 
  
  render() {
    const { good, neutral, bad } = this.state; 
 return   (
    <>
      <Section title='Please leave feedback' >
       <FeedbackOptions option={Object.keys(this.state)} onLeaveFeedback={this.click} />
       <Statistics
         good={good}
         neutral={neutral}
         bad={bad}
         total={this.allClick(this.state)}
         positivePercentage={this.positivePercentage(this.state)}
       />
      </Section>
    </>
  );
};
};