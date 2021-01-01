import Name from "./Name.js";

const Main = (props) => {
  return (
    <div>
      {props.names.map((name, index) => {
        return <Name key={index} name={name.name} amount={name.amount} />;
      })}
    </div>
  );
};

export default Main;
