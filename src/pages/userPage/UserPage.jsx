import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncRequest } from "../../redux/actions";
import Card from "../card/Card";

const UserPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const getUsers = () => {
    dispatch(fetchAsyncRequest(users));
  };
  return (
    <div>
      <button onClick={getUsers} disabled="true">
        GET
      </button>
      <div>
        {users.map((user, idx) => (
          <Card cardInfo={user} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
