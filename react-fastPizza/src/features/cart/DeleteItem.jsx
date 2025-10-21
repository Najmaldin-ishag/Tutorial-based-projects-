import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(deleteItem(pizzaId))}>Delete</button>;
};

export default DeleteItem;
