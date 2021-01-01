import "./App.css";
import names from "./names.json";
import Name from "./Name.js";

function App() {
  let namesString = JSON.stringify(names);
  let namesObj = JSON.parse(namesString);
  let nameList = namesObj.names.map((name) => {
    return <Name name={name.name} amount={name.amount} />;
  });
  return (
    <div className="App">
      <div>{nameList}</div>
    </div>
  );
}

export default App;
