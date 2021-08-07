import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	form: {
		display: 'flex',
		// borderTop: '2px solid #d3f3f3'
	},
	input: {
		display: 'flex',
		justifyContent:'center',
		marginLeft: '15px',
		height: '7vh'
	},
	sendBtn: {
		width:'100px'
	}

}))