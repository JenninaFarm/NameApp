const Order = (props) => {
  return (
    <div>
      <button className="primary" onClick={props.handleClick}>
        Order by {props.by}
      </button>
    </div>
  );
};

export default Order;
