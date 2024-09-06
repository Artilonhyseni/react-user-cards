import User from "../components/User";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    // Fetch data from API
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
    );
    const data = await response.json();
    setUsers(data);
  }
  return (
    <div className="page">
      <section className="grid">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </section>
    </div>
  );
}
