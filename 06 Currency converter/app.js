const Dollars = (props) => {
  return <div>Value in dollar: {(props.cash / props.ratio).toFixed(2)} $ </div>;
};
const Euros = (props) => {
  return <div>Value in euro: {(props.cash / props.ratio).toFixed(2)} € </div>;
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    ratioDollar: 3.6,
    ratioEuro: 3.3,
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };
  render() {
    const { amount, ratioDollar, ratioEuro } = this.state;
    return (
      <>
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />{" "}
          PLN
        </label>
        <Dollars cash={amount} ratio={ratioDollar}></Dollars>
        <Euros cash={amount} ratio={ratioEuro}></Euros>
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
