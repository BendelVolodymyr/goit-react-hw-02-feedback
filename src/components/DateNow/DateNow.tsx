import React, { Component } from 'react';

interface DateState {
  date: Date;
}

class DateNow extends Component<{}, DateState> {
  private intervalId!: ReturnType<typeof setInterval>;

  constructor(props: {}) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount(): void {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalId);
  }

  render(): React.ReactNode {
    return (
      <>
        <header className="header">
          <div className="header__date">
            <p className="header__date-text">
              {this.state.date.toLocaleString()}
            </p>
          </div>
        </header>
      </>
    );
  }
}

export default DateNow;
