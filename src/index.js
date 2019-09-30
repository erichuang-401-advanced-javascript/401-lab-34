import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import blogReducer from './reducer/blog-crud-reducer';

const store = createStore(blogReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
