import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	joinOuterContainer: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		height: '100vh',
		alignItems: 'center',
		backgroundColor: '#1A1A1D',
		// marginTop: '20px',
		'@media (min-width: 320px) and (max-width: 480px)': {
			height: '100%'
		}
	},
	joinInnerContainer: {
		width: '25%',
		'@media (min-width: 320px) and (max-width: 480px)': {
			width: '90%'
		}
	},
	nameInput: {
		margin: '20px 0 15px',
		background: '#fff',
		borderRadius: 3,
	},
	roomInput: {
		marginBottom: '20px',
		background: '#fff',
		borderRadius: 3
	},
	heading: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: '2.5em',
		paddingBottom: '10px',
		borderBottom: '2px solid #fff'
	},
	button: {
		// color: '#fff',
		// textTransform: 'uppercase',
		textDecoration: 'none',
		background: '#2979FF',
		// padding: '20px',
		// borderRadius: 5,
		// display: 'inline-block',
		// border: 'none',
		// width: '100%'
	},

}))