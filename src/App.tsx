import { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
// import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])
  
  useEffect(()=> {
     fetchusers()
     fetchTodos()
     
  }, [])

  async function fetchusers () {
    try {
    
       const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
       setUsers(response.data)
    } catch (e) {
      alert(e)
   
    }
  }

  async function fetchTodos () {
    try {
    
       const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
       setTodos(response.data)
    } catch (e) {
      alert(e)
   
    }
  }

	return (
    <>
		<Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width="400px" height="200px">
			<button>Кнопка</button>
		</Card>
    {/* <UserList users={users} /> */}
    <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}/>
    <hr/>
    <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}/>
    </>
	);
};

export default App;
