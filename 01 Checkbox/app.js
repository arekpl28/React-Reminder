const ValidationMessage = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
};

const OrderForm = (props) => {
  const { submit, change, isConfirmed } = props;
  return (
    <>
      <form onSubmit={submit}>
        <input
          type="checkbox"
          id="age"
          onChange={change}
          checked={isConfirmed}
        />
        <label htmlFor="age">I am at least 16 years old</label>
        <br />
        <button>Buy ticket</button>
      </form>
    </>
  );
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
        <OrderForm
          submit={this.handleFormSubmit}
          change={this.handleCheckBox}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
