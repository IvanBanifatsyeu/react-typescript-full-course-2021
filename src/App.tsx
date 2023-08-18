import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
// import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";

const App = () => {
	return (
		// <BrowserRouter>
		// 	<div>
		//     <Route path={'/users'}>
		//       <UsersPage/>
		//     </Route>
		//     <Route path={'/todos'}>
		//       <TodosPage/>
		//     </Route>
		//   </div>
		// </BrowserRouter>
		<BrowserRouter>
    <div>
      <NavLink to="/users">Пользователи</NavLink>
      <Link to='/todos'>Список дел</Link>
    </div>
			<Routes>
				<Route path="/users" element={<UsersPage />} />
				<Route path="/todos" element={<TodosPage />} />
				<Route path="/users/:id" element={<UserItemPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
