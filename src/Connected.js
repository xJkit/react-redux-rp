import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _get from 'lodash.get';

const Connected = ({
  stateKey = '',
  actionCreators = {},
  render,
  component,
  children
}) => {
  const InternalComponent = connect(
    state => ({ state: _get(state, stateKey, state) }),
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
  )(({ state, actions, children: internalChildren }) => (
    <Fragment>{internalChildren({ state, actions })}</Fragment>
  ));

  if (render && typeof render === 'function') {
    return <InternalComponent>{render}</InternalComponent>;
  }

  if (children && typeof children === 'function') {
    return <InternalComponent>{children}</InternalComponent>;
  }
  return null;
};

export default Connected;
