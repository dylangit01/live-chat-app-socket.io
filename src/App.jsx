import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Join from '../src/components/Join/Join'
import Chat from '../src/components/Chat/Chat'


const App = () => {
	return (
		<Router>
			<Switch>
					<Route path='/' exact component={Join} />
			<Route path='/chat' exact component={Chat} />
			</Switch>
		
		</Router>
	)
}

export default App
