import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []);
  return (
    <>
      <h2> 사용자 목록</h2>
      <ul>
        {users.map((item)=>{
          return <li key={item.id}> {item.name}</li>
          })
        }
      </ul>
    </>
  );
}

export default UserList;
