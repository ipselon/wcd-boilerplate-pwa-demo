import PropTypes from 'prop-types';

export const FloatingActionButtonTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  /**
   * Button label text
   */
  label: PropTypes.string,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['', 'round', 'extended']),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * An icon placed as a child of the button.
   */
  icon: PropTypes.node,
  /**
   * The size of the button. `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
  /**
   * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * If true the circular progress is shown and button is disabled.
   */
  loading: PropTypes.bool,
  /*
   * Triggered when the user click on the button
   */
  onClick: PropTypes.func
};
