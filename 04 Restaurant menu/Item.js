const Item = (props) => {
  const { id, name, activeItem, changeStatus } = props;
  return (
    <li
      className={activeItem ? "enabled" : null}
      onClick={() => changeStatus(props.id)}
      // style={activeItem ? { fontWeight: "bold" } : {}}
    >
      {name}
    </li>
  );
};
