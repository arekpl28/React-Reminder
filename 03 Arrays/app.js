const data = {
  users: [
    {
      id: 0,
      age: 29,
      name: "Ania",
      sex: "female",
    },
    {
      id: 1,
      age: 39,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 9,
      name: "Kasia",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Julia",
      sex: "female",
    },
  ],
};

const Item = (props) => {
  const { age, name, sex } = props.user;
  return (
    <div className="userInfo">
      <h1>{name}</h1>
      <p>User information</p>
      <p>
        User age: <strong>{age}</strong>
      </p>
      <p>
        Sex: <strong>{sex}</strong>
      </p>
    </div>
  );
};

class ListItems extends React.Component {
  state = {
    select: "all",
  };

  handleButton = (sex) => {
    this.setState({
      select: sex,
    });
  };

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "female":
        users = users.filter((user) => user.sex === "female");
        break;
      case "male":
        users = users.filter((user) => user.sex === "male");
        break;
      case "all":
        users = users;
        break;
      default:
        break;
    }
    users = users.map((user) => <Item key={user.id} user={user}></Item>);
    return users;
  };

  render() {
    return (
      <>
        <button onClick={() => this.handleButton("female")}>Female</button>
        <button onClick={() => this.handleButton("male")}>Male</button>
        <button onClick={() => this.handleButton("all")}>All</button>
        {this.usersList()}
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
