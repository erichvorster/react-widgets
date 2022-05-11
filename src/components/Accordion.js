import React, { useState } from "react";
import react from "react";

const Accordion = ({ items }) => {
  // Calling useState hook
  const [activeIndex, setActiveIndex] = useState(null);

  //function that sets the value of our state on click
  const onTitleClick = (index) => {
    //Remember that our app is rerendered each time we call this function and update state
    setActiveIndex(index);
  };

  //Looping through our dropdown items
  const renderedItems = items.map((item, index) => {
    //Checking if the current index is equal to the clicked index that we set in state
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
