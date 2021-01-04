import "./App.css";
import React, { useState } from "react";
import names from "./names.json";
import Order from "./Order.js";
import Main from "./Main.js";
import AmountByName from "./AmountByName.js";

function App() {
  const namesString = JSON.stringify(names);
  const namesObj = JSON.parse(namesString);
  let namesTotal = 0;
  for (let name of namesObj.names) {
    namesTotal += Number(name.amount);
  }
  const [nameList, setNameList] = useState(namesObj.names);
  const [decreasingAmountOrder, setAmountOrder] = useState(true);
  const [increasingNameOrder, setNameOrder] = useState(true);

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
  };

  return (
    <div className="App">
      <h1>Most popular names in Solita workers</h1>
      <header>
        <p className="subHeadline">Popular names totally: {namesTotal}</p>
        <div className="order">
          <Order handleClick={handleAmountOrder} by={"Amount"} />
          <Order handleClick={handleNameOrder} by={"Name"} />
        </div>
      </header>

      <Main names={nameList} />

      <AmountByName names={nameList} />
    </div>
  );
}

export default App;
