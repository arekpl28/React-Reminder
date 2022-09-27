class App extends React.Component {
  state = {
    availbleProducts: 7,
    shoppingCart: 0,
  };

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    });
  };

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    });
  };

  handleBuy = () => {
    this.setState({
      availbleProducts: this.state.availbleProducts - this.state.shoppingCart,
      shoppingCart: 0,
    });
  };

  render() {
    const { availbleProducts, shoppingCart } = this.state;
    return (
      <>
        <button
          onClick={this.handleRemoveFromCart}
          disabled={shoppingCart ? false : true}
        >
          -
        </button>
        <span style={shoppingCart === 0 ? { opacity: 0.3 } : {}}>
          {" "}
          {shoppingCart}{" "}
        </span>
        <button
          onClick={this.handleAddToCart}
          disabled={availbleProducts === shoppingCart ? true : false}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}> Buy </button>}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
