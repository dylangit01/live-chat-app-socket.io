import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'

const Chat = ({ location }) => {
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')
	const ENDPOINT = 'localhost:5000'

	let socket;

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);
		socket = io(ENDPOINT)

		setName(name);
		setRoom(room)

		// send object to backend, we also can send some callback fun to the backend, such as handling error msg:
		socket.emit('join', { name, room }, () => {

		});

		return () => {
			socket.emit('disconnect');
			socket.off()
		}
	}, [ENDPOINT])

	return (
		<div>
			Chat
		</div>
	)
}

export default Chat
