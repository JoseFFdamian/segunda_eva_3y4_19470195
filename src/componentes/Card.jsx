import { useEffect, useState } from 'react';
import { CardArrows } from './CardArrows';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';

export const Card = ({ users, newUser }) => {
	const [reciente, setReciente] = useState(0);
	const [textos, setTextos] = useState({});
	const previo = () => {
		setReciente(reciente - 1);
		if (reciente === 0) {
			setReciente(0);
		}
	};
	const siguiente = () => {
		setReciente(reciente + 1);
		if (reciente === users.length - 5) {
			newUser();
			console.log(users);
		}
	};


	useEffect(() => {
		cambiaTextos('user');
	}, [reciente]);


	const cambiaTextos = (icono) => {
		switch (icono) {
			case 'user':
				setTextos({
					espacio: 'Hi, My name is',
					main: `${users[reciente].name.title}, ${users[reciente].name.first} ${users[reciente].name.last}`,
					icono: 'user',
				});
				break;
			case 'email':
				setTextos({
					espacio: 'My email address is',
					main: `${users[reciente].email}`,
					icono: 'email',
				});
				break;
			case 'birthday':
				setTextos({
					espacio: 'My birthday is',
					main: `${users[reciente].dob.date.slice(
						8,
						10
					)}/${users[reciente].dob.date.slice(5, 7)}/${users[
						reciente
					].dob.date.slice(0, 4)}`,
					icono: 'birthday',
				});
				break;
				case 'address':
					setTextos({
						espacio: 'My address is',
						main: `${users[reciente].location.street.number} ${users[reciente].location.street.name}`,
						icono: 'address',
					});
				break;
			case 'phone':
				setTextos({
					espacio: 'My phone number is',
					main: `${users[reciente].phone}`,
					icono: 'phone',
				});
				break;
			case 'username':
				setTextos({
					espacio: 'My username is',
					main: `${users[reciente].login.username}`,
					icono: 'username',
				});
				break;

			default:
				break;
		}
	};


	return (
		<>
			<div className='card'>
				<CardHeader user={users[reciente]} />
				<CardBody textos={textos} />
				<CardFooter
					user={users[reciente]}
					cambiaTextos={cambiaTextos}
					textos={textos}
				/>
				<CardArrows
					users={users}
					reciente={reciente}
					previo={previo}
					siguiente={siguiente}
				/>
			</div>
		</>
	);
};
