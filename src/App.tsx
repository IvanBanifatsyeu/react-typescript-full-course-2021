import { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(()=> {
    fetchusers ()
  }, [])

  async function fetchusers () {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      console.log (response)
      setUsers(response.data)
    } catch (e) {
      alert(e)
   
    }
  }

	return (
    <>
		<Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width="400px" height="200px">
			<button>Кнопка</button>
		</Card>
    <UserList users={users} />
    </>
	);
};

export default App;
