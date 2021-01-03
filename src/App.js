import "./App.css";
import React, { useEffect, useState } from "react";
import names from "./names.json";
import Order from "./Order.js";
import Main from "./Main.js";
import AmountByName from "./AmountByName.js";

function App() {
  console.log("here here");
  const namesString = JSON.stringify(names);
  const namesObj = JSON.parse(namesString);
  let namesTotal = 0;
  for (let name of namesObj.names) {
    namesTotal += Number(name.amount);
  }
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
      <AmountByName names={nameList} />
      <p>Names totally: {namesTotal}</p>
      <Main names={nameList} />
    </div>
  );
}

export default App;
