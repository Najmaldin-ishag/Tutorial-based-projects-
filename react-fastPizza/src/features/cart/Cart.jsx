import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, getCart, getUserName } from "./cartSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const cart = useSelector(getCart);

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;
  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart,{userName}</h2>

      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button onClick={handleClearCart}>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
