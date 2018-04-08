import React, { Fragment } from 'react';
import { render } from 'react-dom';

import { Connected } from 'react-redux-rp';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import * as actionCreators from './actions';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Fragment>
      <h3>Use Render Props Directly</h3>
      <h6>FaCC(Function as Child Component)</h6>
      <Connected stateKey="count" actionCreators={actionCreators}>
        {({ state, actions }) => {
          return (
            <Fragment>
              <div>count: {state}</div>
              <button onClick={actions.increment}>+</button>
              <button onClick={actions.decrement}>-</button>
            </Fragment>
          );
        }}
      </Connected>
      <h6>render props</h6>
      <Connected
        stateKey="count"
        actionCreators={actionCreators}
        render={({ state, actions }) => (
          <Fragment>
            <div>count: {state}</div>
            <button onClick={actions.increment}>+</button>
            <button onClick={actions.decrement}>-</button>
          </Fragment>
        )}
      />
    </Fragment>
  </Provider>
);

render(<App />, document.getElementById('root'));
