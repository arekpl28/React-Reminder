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
        <span> {shoppingCart} </span>
        <button
          onClick={this.handleAddToCart}
          disabled={availbleProducts === shoppingCart ? true : false}
        >
          +
        </button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
