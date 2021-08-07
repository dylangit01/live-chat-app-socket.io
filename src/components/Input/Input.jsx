import React from 'react';
import { TextField,Button } from '@material-ui/core';
import useStyles from './styles'

const Input = ({ message, setMessage, sendMessage }) => {
	const classes = useStyles();
	return (
		<form className={classes.form}>
			<TextField
				className={classes.input}
				fullWidth
				variant='standard'
				label='Type a message'
				type='text'
				value={message}
				onChange={e => setMessage(e.target.value)}
				onKeyDown={event => event.key === 'Enter' && sendMessage(event)}
				InputProps={
					{disableUnderline: true}
				}
			/>
			<Button variant='contained' color='primary' className={classes.sendBtn} onClick={e=>sendMessage(e)}>Send</Button>
		</form>
		
	)
}

export default Input
