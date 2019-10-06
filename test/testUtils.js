import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/store';

export const storeFactory = (initState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initState);
};

export const findComponentByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
