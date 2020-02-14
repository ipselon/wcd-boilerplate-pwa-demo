import PropTypes from 'prop-types';

export const DivWithStyleTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  /**
   * Inline styles of the component. The object is used as a style property of the div component.
   */
  style: PropTypes.object,
  /**
   *  An array of the placeholders for child components.
   *  Increase array size to put more items.
   */
  children: PropTypes.arrayOf(PropTypes.element),
};
