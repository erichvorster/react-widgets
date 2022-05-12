import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React",
    content: "React is a front-end javaScript Framework",
  },
  {
    title: "Why use React",
    content: "React is da bomb",
  },
  {
    title: "What are some alternatives to React",
    content: "There are alternatives but they all suck",
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
