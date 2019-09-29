import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/reducers';
import {createStore} from 'redux';

export const storeFactory = (initState={}) => createStore(rootReducer, initState);

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
