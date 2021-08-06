import React from 'react';
import useStyles from './styles';
import { Typography, Button, Card, Grid } from '@material-ui/core';
import onlineIcon from '../../Icons/onlineIcon.png';
import CloseIcon from '@material-ui/icons/Close';

const InfoBar = ({room}) => {
	const classes = useStyles();
	return (
		<div className={classes.infoBar}>
			<div className={classes.leftInnerContainer}>
				<img className={classes.onlineIcon} src={onlineIcon} alt="online img" />
				<Typography variant='h3' align='center'> {room} </Typography >
			</div>
			<div className={classes.rightInnerContainer}>
				<a href="/"> <Button><CloseIcon className={classes.closeIcon} /></Button> </a>
			</div>
		</div>
	)
}

export default InfoBar
