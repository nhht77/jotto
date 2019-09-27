import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, val) => 
    wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.proptypes, 
        conformingProps, 
        'prop', 
        component.name);
    expect(propError).toBeUndefined();
}
