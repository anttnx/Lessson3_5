import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert, Form, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import User from './components/User'

const App = () => {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => setUsers(data))
			.finally(() => setIsLoading(false))
	}, [])

	console.log(users)

	if (isLoading)
		return (
			<Spinner animation='border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		)

	return (
		<div className='p-5 d-flex flex-column gap-5 text-center'>
			{users.map((user) => (
				<User userInfo={user} key={user.id} />
			))}
		</div>
	)
}

export default App
