import PropTypes from 'prop-types';

export const IconButtonTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
  /**
   * If given, uses a negative margin to counteract the padding on one side
   * (this is often helpful for aligning the left or right side of the icon with content above or below,
   * without ruining the border size and shape).
   */
  edge: PropTypes.oneOf(['', 'start', 'end', 'false']),
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Icon
   */
  icon: PropTypes.element,
  /**
   * The size of the button. `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['', 'small', 'medium']),
  /**
   * If true the circular progress is shown and button is disabled.
   */
  loading: PropTypes.bool,
  /*
   * Triggered when the user click on the button
   */
  onClick: PropTypes.func
};
