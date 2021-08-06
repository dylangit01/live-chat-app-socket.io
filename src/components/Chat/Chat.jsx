import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'

const ENDPOINT = 'localhost:5000'
let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState([])

	// Handle users with name and room:
	useEffect(() => {
		const { name, room } = queryString.parse(location.search);
		// Establish the connection to the server side:
		socket = io(ENDPOINT);

		setName(name);
		setRoom(room);

		// send object to backend, we also can send some callback fun to the backend, such as handling error msg
		socket.emit('join', { name, room }, () => {});

		// return () => {
		// 	socket.emit('disconnect');
		// 	socket.off();
		// };
	}, [location.search]);

	// Handle messages:
	useEffect(() => {
		// receive message event (user joined info) from the server
		socket.on('message', (message) => {
			setMessages([...messages, message]);
		});
	}, [messages]);

	// function for sending messages:
	const sendMessage = (e) => {
		e.preventDefault();

		// only input has value, the event will be emitted, and the callback func is to clean the input message
		if (message) {
			socket.emit('sendMessage', { message }, () => setMessage(''))
		}
	}

	console.log(message, messages);
	return (
		<div className='outerContainer'>
			<div className='container'>
				<input
					type='text'
					value={message}
					onChange={e => setMessage(e.target.value)}
					onKeyPress={event => event.key === 'Enter' && sendMessage(event)}
				 />
			</div>
		</div>
	)
}

export default Chat
