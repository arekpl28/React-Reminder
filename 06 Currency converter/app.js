const Cash = (props) => {
  return (
    <div>
      {props.title} {(props.amount / props.ratio).toFixed(2)} {props.sign}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
  };

  currencies = [
    {
      id: 0,
      name: "dollar",
      ratio: 3.6,
      title: "Value in dollar: ",
      sign: "$",
    },
    {
      id: 1,
      name: "euro",
      ratio: 4.6,
      title: "Value in euro: ",
      sign: "€",
    },
    {
      id: 2,
      name: "pound",
      ratio: 5.6,
      title: "Value in pound: ",
      sign: "£",
    },
  ];

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };
  render() {
    const { amount } = this.state;

    const calculators = this.currencies.map((item) => (
      <Cash
        key={item.id}
        amount={amount}
        ratio={item.ratio}
        title={item.title}
        sign={item.sign}
      ></Cash>
    ));

    return (
      <>
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />{" "}
          PLN
        </label>
        {calculators}
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
