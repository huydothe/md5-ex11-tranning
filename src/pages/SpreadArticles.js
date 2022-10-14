import axios from "axios";
import { useState, useEffect } from "react";

export default function SpreadArticles() {
  const [users, setUsers] = useState([]);

  const getApi = async () => {
    const getUsers = await axios.get("http://localhost:3001/api/users");
    const getArticle = await axios.get("http://localhost:3001/api/articles");
    return await axios.all([getUsers, getArticle]);
  };

  useEffect(() => {
    getApi().then(
      axios.spread((res1, res2) => {
    
        
        const user = res1.data.map(user => {
            return {
              ...user,
              article: res2.data.filter(item => {
                return item.user_id === user.id;
              })
            };
          });
          setUsers(user);
        console.log(user)
      })
    );
  }, []);

  return (
    <>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Articles</th>
        </tr>

        {users.map((item, index) => (
          <tr>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.article.length}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
