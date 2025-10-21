import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateCart = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <button>Update Priority</button>;
    </fetcher.Form>
  );
};

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
export default UpdateCart;
