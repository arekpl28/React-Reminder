const Cash = (props) => {
  return (
    <div>
      {props.title} {((props.amount / props.ratio) * props.price).toFixed(2)}{" "}
      {props.sign}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "electricity",
  };

  static defaultProps = {
    currencies: [
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
      {
        id: 3,
        name: "zloty",
        ratio: 1,
        title: "Value in zloty: ",
        sign: "PLN",
      },
    ],
    prices: {
      electricity: 0.51,
      gas: 4.71,
      oranges: 3.2,
    },
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleSelect = (e) => {
    this.setState({
      product: e.target.value,
      amount: "",
    });
  };

  insertSuffix = (select) => {
    if (select === "electricity") {
      return <em> kWh</em>;
    } else if (select === "gas") {
      return <em> liters</em>;
    } else if (select === "oranges") {
      return <em> kg</em>;
    } else return null;
  };

  selectPrice = (select) => {
    const price = this.props.prices[select];
    return price;
  };

  render() {
    const { amount, product } = this.state;

    const price = this.selectPrice(product);

    const calculators = this.props.currencies.map((item) => (
      <Cash
        key={item.id}
        amount={amount}
        ratio={item.ratio}
        title={item.title}
        sign={item.sign}
        price={price}
      ></Cash>
    ));

    return (
      <>
        <label>
          Choose a product:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">electricity</option>
            <option value="gas">gas</option>
            <option value="oranges">oranges</option>
          </select>
          <br />
        </label>
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
          {this.insertSuffix(product)}
        </label>
        {calculators}
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
