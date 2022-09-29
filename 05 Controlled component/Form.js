class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <form>
          <label>
            Enter your name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Enter your email:
            <input type="email" name="email" />
          </label>
          <br />
          <button>Click</button>
        </form>
      </>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
