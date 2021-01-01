import "./App.css";
import React, { useEffect, useState } from "react";
import names from "./names.json";
import Order from "./Order.js";
import Main from "./Main.js";

function App() {
  const namesString = JSON.stringify(names);
  const namesObj = JSON.parse(namesString);
  const [nameList, setNameList] = useState(namesObj.names);
  const [decreasingAmountOrder, setAmountOrder] = useState(true);
  const [increasingNameOrder, setNameOrder] = useState(true);

  useEffect(() => {
    console.log("mounted");
  });

  const handleAmountOrder = (event) => {
    let newOrder = [];
    if (decreasingAmountOrder) {
      newOrder = nameList.sort((a, b) => b.amount - a.amount);
      // if Object.is is true React will not re-render
      console.log(Object.is(newOrder, nameList));
      setNameList(newOrder);
      setAmountOrder(false);
    } else {
      newOrder = nameList.sort((a, b) => a.amount - b.amount);
      setNameList(newOrder);
      setAmountOrder(true);
    }

    console.log(" order clicked");
  };

  const handleNameOrder = (event) => {
    let newOrder = [];
    if (increasingNameOrder) {
      newOrder = nameList.sort((a, b) =>
        a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
      );
      // if Object.is is true React will not re-render
      console.log(Object.is(newOrder, nameList));
      setNameList(newOrder);
      console.log(newOrder);
      setNameOrder(false);
    } else {
      newOrder = nameList.sort((a, b) =>
        a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1
      );
      setNameList(newOrder);
      setNameOrder(true);
    }

    console.log(" order clicked");
  };

  return (
    <div className="App">
      <Order handleClick={handleAmountOrder} by={"amount"} />
      <Order handleClick={handleNameOrder} by={"name"} />

      <Main names={nameList} />
    </div>
  );
}

export default App;
