const Order = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>order by {props.by}</button>
    </div>
  );
};

export default Order;
