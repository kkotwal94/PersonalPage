import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
import './stylesheets/main.css';
//import routes from './routes';
//import Router from 'react-router';

main();

function main() {
	let app = document.createElement('div');
	app.id = "node";
	//document.body.style.backgroundColor = "#ededed";
	document.body.appendChild(app);
	ReactDOM.render(<App />, document.getElementById('node'));
}
