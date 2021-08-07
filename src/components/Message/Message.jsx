import React from 'react';
import './Message.css'

// messages send back from the server side contains {user, text}, so each message has user and text
const Message = ({ message:{user, text}, name }) => {

	let isSentByCurrentUser = false;

	// Because message.user 
	const trimmedName = name.trim().toLowerCase();

	if (user === trimmedName) isSentByCurrentUser = true;

	return (
		isSentByCurrentUser ? (
			<div className="messageContainer justifyEnd">
				<p className="sentText pr-10">{trimmedName}</p>
				<div className="messageBox backgroundBlue">
					<p className="messageText colorWhite">{text}</p>
				</div>
			</div>
		) : (
				<div className="messageContainer justifyStart">
				<div className="messageBox backgroundLight">
					<p className="messageText colorDark">{text}</p>
				</div>
				<p className="sentText pl-10 ">{user}</p>
			</div>
		)
	)
}

export default Message
