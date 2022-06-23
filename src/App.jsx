import { useState } from 'react';
import './App.css';
import { userrandom } from './getUsuario';
import { Card } from './componentes/Card';


function App() {
	const [users, setUsers] = useState([]);

	const newUser = () => {
		const oldUsers = [...users];
		userrandom().then((usuarios) => {
			setUsers([...oldUsers, ...usuarios]);
		});
	};

	if (users.length === 0) {
		userrandom().then((usuarios) => {
			setUsers(usuarios);
		});
	} else {
		return (
			<>
				<header>
					<div className='titulo'>
						<h1>Profiles App</h1>
						<h3>From Html to Api Rest </h3>
					</div>
				</header>
				<main>
					<Card users={users} newUser={newUser} />
				</main>
			</>
		);
	}
}

export default App;
