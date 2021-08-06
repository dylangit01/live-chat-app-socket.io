import React, { useState, useEffect } from 'react';
import {TextField, Typography, Button, Paper} from '@material-ui/core'
import { Link } from 'react-router-dom';
import useStyles from './styles'

const Join = () => {
	const classes = useStyles();
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')

	return (
		<Paper className={classes.joinOuterContainer}>
			<div className={classes.joinInnerContainer}>
				<Typography variant='h1' className={classes.heading}>Join</Typography>
				<TextField fullWidth placeholder='Name' className={classes.nameInput} variant='outlined' type='text' onChange={e=>setName(e.target.value)}/>
				<TextField fullWidth placeholder='Room' className={classes.roomInput} variant='outlined' type='text' onChange={e => setRoom(e.target.value)} />

				{/* using query string */}
				<Link onClick={e => (!name || !room) && e.preventDefault()} to={`/chat?name=${name}&room=${room}`}>
					<Button className={classes.button} variant='contained' fullWidth color='primary' type='submit'>Sign In</Button>
				</Link>
			</div>
		</Paper>
	)
}

export default Join
