// const PositiveMessage = () => {
//   return <p>You can watch the movie. We invite!</p>;
// };

// const NegativeMessage = () => {
//   return <p>You cannot watch this movie if you are under 16!</p>;
// };

const ValidationMessage = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
};

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckBox = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="You can watch the movie. We invite!" />;
      } else {
        return (
          <ValidationMessage txt="You cannot watch this movie if you are under 16!" />
        );
      }
    } else {
      return null;
    }
  };

  render() {
    const { isConfirmed } = this.state;
    return (
      <>
        <h1>Buy a ticket to a horror movie</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckBox}
            checked={isConfirmed}
          />
          <label htmlFor="age">I am at least 16 years old</label>
          <br />
          <button>Buy ticket</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
