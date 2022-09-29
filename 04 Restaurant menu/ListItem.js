const ListItems = (props) => {
  const items = props.items.map((item) => (
    <Item
      key={item.id}
      name={item.name}
      id={item.id}
      activeItem={item.active}
      changeStatus={props.changeStatus}
    ></Item>
  ));
  return <ul>{items}</ul>;
};
