import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';


const client = new ApolloClient({
  uri:"https://htbs22kx91.execute-api.us-east-1.amazonaws.com/dev/graphql", 
  
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client ={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
