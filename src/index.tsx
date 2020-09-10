import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import Home from './pages/home';

function App () {
	return (
		<ApolloProvider client={client}>
			<Home />
		</ApolloProvider>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));