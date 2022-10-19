import React from "react";

import Article from "../components/Article";

const articles = [
  {
    id: 0,
    title: "1 Article",
    author: "Jan kowalski",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi numquam atque reprehenderit ipsam? Exercitationem tempore dolorum tenetur quibusdam asperiores aperiam optio quidem laudantium rem minima,  reiciendis!",
  },
  {
    id: 1,
    title: "2 Article",
    author: "Adam Nowak",
    text: "Lorem ipsum dolor adipisicing elit. Aliquam nisi numquam atque reprehenderit ipsam? Exercitationem tempore dolorum tenetur quibusdam asperiores aperiam optio quidem laudantium rem minima, quaerat, obcaecati dolores reiciendis!",
  },
  {
    id: 2,
    title: "3 Article",
    author: "John Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi numquam atque reprehenderit ipsam? Exercitationem tempore dolorum tenetur quibusdam asperiores  laudantium rem minima, quaerat, obcaecati dolores reiciendis!",
  },
];

const HomePage = () => {
  const artList = articles.map((item) => <Article key={item.id} {...item} />);
  return <div className="start">{artList}</div>;
};

export default HomePage;
