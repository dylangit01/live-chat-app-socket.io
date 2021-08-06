import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	infoBar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		background: '#2979FF',
		borderRadius: '4px 4px 0 0',
		height: '60px',
		width: '100%',
	},
	leftInnerContainer: {
		flex: 0.5,
		display: 'flex',
		alignItems: 'center',
		marginLeft: '5%',
		color: '#fff',
	},
	rightInnerContainer: {
		display: 'flex',
		flex: 0.5,
		justifyContent: 'flex-end',
		marginRight: '2%',
	},
	onlineIcon: {
  	marginRight: '5%',
	},
	closeIcon: {
		color: '#ff0000'
	}
	
}))