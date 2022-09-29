class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "herbata", active: true },
      { id: 2, name: "ziemniaki", active: false },
      { id: 3, name: "kasza", active: false },
      { id: 4, name: "zupa wodna", active: false },
      { id: 5, name: "wrztek", active: false },
      { id: 6, name: "chleb", active: true },
    ],
  };
  handleChangeStatus = (index) => {
    const items = this.state.items.map((item) => {
      if (item.id === index) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items,
    });
  };
  render() {
    return (
      <>
        <Header items={this.state.items}></Header>
        <ListItems
          changeStatus={this.handleChangeStatus}
          items={this.state.items}
        ></ListItems>
      </>
    );
  }
}
