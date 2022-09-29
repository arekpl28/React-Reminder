const Item = (props) => {
  const { name, activeItem } = props;
  return <li style={activeItem ? { fontWeight: "bold" } : {}}>{name}</li>;
};
