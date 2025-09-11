import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateItem pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
