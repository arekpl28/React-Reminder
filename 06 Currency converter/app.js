const Cash = (props) => {
  return (
    <div>
      {props.title} {(props.cash / props.ratio).toFixed(2)}{" "}
      {props.sign === "$" ? "$" : "€"}
    </div>
  );
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
        <Cash
          cash={amount}
          ratio={ratioDollar}
          title="Value in dollar: "
          sign="$"
        ></Cash>
        <Cash
          cash={amount}
          ratio={ratioEuro}
          title="Value in euro: "
          sign="€"
        ></Cash>
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
