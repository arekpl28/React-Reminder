class Clock extends React.Component {
  state = {
    time: this.getTime(),
  };

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    };
  }

  setTime = () => {
    const time = this.getTime();
    this.setState({
      time: time,
    });
  };

  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <>
        <div>
          {hours} : {minutes} : {seconds}
        </div>
      </>
    );
  }
}

const SwitchButton = (props) => {
  return (
    <button onClick={props.click}>{props.active ? "Stop" : "Start"}</button>
  );
};

class App extends React.Component {
  state = {
    active: true,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  };

  render() {
    return (
      <>
        <SwitchButton click={this.handleClick} active={this.state.active} />
        {this.state.active && <Clock></Clock>}
      </>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
