import React, { useState } from "react";

const AmountByName = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const submitName = (event) => {
    for (let id in props.names) {
      if (props.names[id].name.toUpperCase() === name.toUpperCase()) {
        setAmount(props.names[id].amount);
        setName(props.names[id].name);
      }
    }
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitName}>
        <p className="subHeadline">Give a name:</p>
        <br />
        <input
          className="amountByName"
          type="text"
          placeholder="give a name"
          onChange={(event) => {
            setName(event.target.value);
            setAmount(0);
          }}
        />
        <input className="amountBySubmit" type="submit" name="Submit" />
      </form>
      {!!amount && (
        <p className="subHeadline">
          There is {amount} of people called {name} in the company
        </p>
      )}
    </div>
  );
};

export default AmountByName;
