import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApi = async () => {
    return await axios.get("http://localhost:3001/api/users");
  };

  useEffect(() => {
    setTimeout(() => {
      getApi()
        .then((res) => {
          console.log(res.data);
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);
  }, []);

  const handleCreate = () => {
    window.location.href = "/users/add";
  };

  // {loading && loading===true} ? <p>loading...</p> :

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {users.map((user, idenx) => (
            <li key={idenx}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
          <button type="button" onClick={handleCreate}>
            Create
          </button>
        </ul>
      )}
    </>
  );
}
