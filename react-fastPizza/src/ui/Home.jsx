import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { Link } from "react-router-dom";

function Home() {
  const userName = useSelector((state) => state.user.username);
  console.log(userName);
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      {userName === "" ? (
        <CreateUser />
      ) : (
        <Link to="/menu">Continue ordering {userName}</Link>
      )}
    </div>
  );
}

export default Home;
