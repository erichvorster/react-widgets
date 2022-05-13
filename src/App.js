import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";

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

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color blue",
    value: "blue",
  },
  {
    label: "The color green",
    value: "green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <DropDown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
