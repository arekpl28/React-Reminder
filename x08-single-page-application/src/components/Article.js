import React from "react";

import "../styles/Article.css";

const Article = (props) => {
  const { title, author, text } = props;
  return (
    <article>
      <h3>{title}</h3>
      <span>{author}</span>
      <p>{text}</p>
    </article>
  );
};

export default Article;
