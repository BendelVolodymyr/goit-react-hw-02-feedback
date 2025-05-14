import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import DateNow from './DateNow/DateNow';

export interface AppState {
  good: number;
  neutral: number;
  bad: number;
}

export class App extends Component<{}, AppState> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  click = (event: keyof AppState): void => {
    this.setState(prevState => ({
      ...prevState,
      [event]: this.state[event] + 1,
    }));
  };

  allClick = ({ good, neutral, bad }: AppState) => good + neutral + bad;

  positivePercentage = ({ good, neutral, bad }: AppState) =>
    Math.round((good * 100) / this.allClick(this.state));

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <DateNow />
        <Section title="Please leave feedback">
          <FeedbackOptions
            option={Object.keys(this.state) as (keyof AppState)[]}
            onLeaveFeedback={this.click}
          />
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
  }
}
