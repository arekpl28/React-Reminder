class Form extends React.Component {
  state = {
    city: "",
    text: "",
    know: true,
    number: 0,
  };

  // handleCityChange = (event) => {
  //   this.setState({
  //     city: event.target.value,
  //   });
  // };

  // handleTextChange = (event) => {
  //   this.setState({
  //     text: event.target.value,
  //   });
  // };

  // handleKnowChange = (event) => {
  //   this.setState({
  //     know: event.target.checked,
  //   });
  // };

  // handleVisitsNumberChange = (event) => {
  //   this.setState({
  //     number: event.target.value,
  //   });
  // };

  handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <>
        <label>
          Enter city name:
          <input
            onChange={this.handleChange}
            value={this.state.city}
            name="city"
            type="text"
          />
        </label>
        <br />
        <label>
          Write something about this city
          <textarea
            onChange={this.handleChange}
            value={this.state.text}
            name="text"
          ></textarea>
        </label>
        <br />
        <label>
          Do you know this city
          <input
            onChange={this.handleChange}
            checked={this.state.know}
            name="know"
            type="checkbox"
          />
        </label>
        <br />
        <label>
          How many times have you been to this city
          <select
            onChange={this.handleChange}
            value={this.state.number}
            name="number"
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
