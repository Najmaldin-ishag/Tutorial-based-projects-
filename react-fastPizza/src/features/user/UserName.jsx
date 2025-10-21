import { useSelector } from "react-redux";

const UserName = () => {
  const userName = useSelector((state) => state.user.username);

  if (!userName) return null;
  return <div>{userName}</div>;
};

export default UserName;
