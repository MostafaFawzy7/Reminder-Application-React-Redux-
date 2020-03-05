import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Redux/Reducer';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

const store = createStore(reducer);

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

