const ListItems = (props) => {
  const items = props.items.map((item) => (
    <Item key={item.id} name={item.name} activeItem={item.active}></Item>
  ));
  return <ul>{items}</ul>;
};
