import React, { Component } from "react";

const data = [
  {
    id: 0,
    title: "Message # 1",
    body: "Message content 1...",
  },
  {
    id: 1,
    title: "Message # 2",
    body: "Message content 2...",
  },
];

setInterval(() => {
  const idnex = data.length;
  data.push({
    id: idnex,
    title: `Message # ${idnex + 1}`,
    body: `Message content ${idnex + 1}...`,
  });
  console.log(data);
}, 2000);

class App extends Component {
  state = {
    comments: [...data],
  };

  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data],
      });
    }
  };

  componentDidMount() {
    this.idI = setInterval(this.getData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.idI);
  }

  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));
    return (
      <>
        <div>{comments.reverse()}</div>
      </>
    );
  }
}

export default App;
