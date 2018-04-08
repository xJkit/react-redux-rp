# react-redux-rp

> The awesome, declarative render props version of connect

[![NPM](https://img.shields.io/npm/v/react-redux-rp.svg)](https://www.npmjs.com/package/react-redux-rp) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash****
npm install --save react-redux-rp
```

## Usage

```jsx
import { Connected } from 'react-redux-rp';

// Function as a child component
<Connected stateKey="count" actionCreators={actionCreators}>
  {({ state, actions }) => (
      <Fragment>
        <div>count: {state}</div>
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
      </Fragment>
    );
  }
</Connected>;

// or you can use render props
<Connected
  stateKey="count" // get specific state from the store; default equals the entire store.
  actionCreators={actionCreators} // auto bind action creators with dispatch.
  render={({ state, actions }) => (
    <Fragment>
      <div>count: {state}</div>
      <button onClick={actions.increment}>+</button>
      <button onClick={actions.decrement}>-</button>
    </Fragment>
  )}
/>
```

## License

MIT © [xJkit](https://github.com/xJkit)
