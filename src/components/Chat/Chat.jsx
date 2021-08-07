import React, { useState, useEffect } from 'react';
import { TextField, Typography, Button, Card } from '@material-ui/core';
import queryString from 'query-string';
import io from 'socket.io-client';
import useStyles from './styles';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

const ENDPOINT = 'localhost:5000'
let socket;

const Chat = ({ location }) => {
	const classes = useStyles();

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
		<div className={classes.outerContainer}>
			<div className={classes.container}>
				<InfoBar room ={room}/>
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
			</div>
		</div>
	)
}

export default Chat
