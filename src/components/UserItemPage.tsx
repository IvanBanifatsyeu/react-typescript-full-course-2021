import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';

interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams()
    const navigate = useNavigate()
   

    

	useEffect(() => {
		fetchuser();
	}, []);

	async function fetchuser() {
		try {
			const response = await axios.get<IUser>(
				"https://jsonplaceholder.typicode.com/users/" + params.id
			);
			setUser(response.data);
		} catch (e) {
			alert(e);
		}
	}
    return (
        <div>
            <button onClick={() => navigate('/users')}>back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address.city}</div>

            
        </div>
    );
};

export default UserItemPage;