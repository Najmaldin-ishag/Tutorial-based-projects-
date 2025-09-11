import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  function handleCart() {
    const newItem = {
      pizzaID: id,
      name,
      quantity: 1,
      price: unitPrice,
      totalPrice: unitPrice * 2,
    };

    dispatch(addItem(newItem));
    console.log(newItem);
  }
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}

          {!soldOut && <button onClick={handleCart}>Add to cart</button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
