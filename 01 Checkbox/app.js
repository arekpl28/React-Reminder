const PositiveMessage = () => {
  return <p>You can watch the movie. We invite!</p>;
};

const NegativeMessage = () => {
  return <p>You cannot watch this movie if you are under 16!</p>;
};

class CheckboxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
  };
  handleCheckBox = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />;
    } else {
      return <NegativeMessage />;
    }
  };

  render() {
    return (
      <>
        <h1>Buy a ticket to a horror movie</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handleCheckBox}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">I am at least 16 years old</label>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
