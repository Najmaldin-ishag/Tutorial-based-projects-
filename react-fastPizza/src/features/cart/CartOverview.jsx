import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getCartTotalQuantity, getCartTotalPrice } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getCartTotalQuantity);
  const totalCartPrice = useSelector(getCartTotalPrice);
  console.log(totalCartQuantity);
  return (
    <div>
      <p>
        <span>{totalCartQuantity} pizzas</span>
        <span>${formatCurrency(totalCartPrice)}5</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
