const Header = (props) => {
  const activeItems = props.items.filter((item) => item.active === true);
  const number = activeItems.length;
  return (
    <header>
      <h2>Order quantity: {number}</h2>
      {number ? <h2>To pay: {number * 20}$</h2> : <h2>No order</h2>}
    </header>
  );
};
