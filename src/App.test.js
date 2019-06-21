import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import reducers from './reducers';
import { createStore} from 'redux';

const Hello = () => {
  return (<div>
      Hello world!
    </div>)
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
