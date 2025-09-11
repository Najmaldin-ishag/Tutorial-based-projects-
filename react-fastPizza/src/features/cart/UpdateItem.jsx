import { useDispatch } from "react-redux";
import { DecreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(DecreaseItemQuantity(pizzaId))}>-</button>
      <button onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</button>
    </div>
  );
};

export default UpdateItem;
