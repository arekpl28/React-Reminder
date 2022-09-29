class Form extends React.Component {
  state = {
    city: "",
    text: "",
    know: true,
    number: 0,
  };

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleKnowChange = (event) => {
    this.setState({
      know: event.target.checked,
    });
  };

  handleVisitsNumberChange = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  render() {
    return (
      <>
        <label>
          Enter city name:
          <input
            onChange={this.handleCityChange}
            value={this.state.city}
            type="text"
          />
        </label>
        <br />
        <label>
          Write something about this city
          <textarea
            value={this.state.text}
            onChange={this.handleTextChange}
          ></textarea>
        </label>
        <br />
        <label>
          Do you know this city
          <input
            type="checkbox"
            checked={this.state.know}
            onChange={this.handleKnowChange}
          />
        </label>
        <br />
        <label>
          How many times have you been to this city
          <select
            value={this.state.number}
            onChange={this.handleVisitsNumberChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="more">more</option>
          </select>
        </label>
      </>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
