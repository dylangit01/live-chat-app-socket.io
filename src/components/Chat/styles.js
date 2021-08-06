import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	outerContainer: {
		display: 'flex',
  	justifyContent: 'center',
  	alignItems: 'center',
  	height: '100vh',
		backgroundColor: '#1A1A1D',
		[theme.breakpoints.down('xs')]: {
			height: '100%',
		},
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		background: '#FFFFFF',
		borderRadius: '8px',
		height: '60%',
		width: '35%',
		[theme.breakpoints.down('sm')]: {
			width: '60%',
		},
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			height:'100%'
		},
	},


}));