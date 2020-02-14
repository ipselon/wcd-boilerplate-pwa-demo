import PropTypes from 'prop-types';

export const ActionControlTypes = {
  /**
   * Action control id
   */
  id: PropTypes.string,
  /**
   * Action control
   */
  buttonType: PropTypes.oneOf(['iconButton', 'button']),
  /**
   * Works when the buttonType is button
   */
  button: PropTypes.shape({
    /**
     * Action control label
     */
    label: PropTypes.string,
    /**
     * An icon placed before the button label.
     */
    startIconIndex: PropTypes.number,
    /**
     * An icon placed after the button label.
     */
    endIconIndex: PropTypes.number,
    /**
     * The size of the button. `small` is equivalent to the dense button styling.
     */
    size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['', 'text', 'outlined', 'contained']),
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
  }),
  /**
   * Works when the buttonType is iconButton
   */
  iconButton: PropTypes.shape({
    /**
     * An icon found in the icons array by index
     */
    iconIndex: PropTypes.number,
    /**
     * The size of the button. `small` is equivalent to the dense button styling.
     */
    size: PropTypes.oneOf(['', 'small', 'medium']),
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
  }),
  /**
   * If true the circular progress is shown and button is disabled.
   */
  loading: PropTypes.bool,
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
};

export const CardWithCommentTypes = {
  /**
   * The list of action controls in the left bottom area
   */
  leftActionArea: PropTypes.arrayOf(PropTypes.shape(ActionControlTypes)),
  /**
   * The list of action controls in the right bottom area
   */
  rightActionArea: PropTypes.arrayOf(PropTypes.shape(ActionControlTypes)),
  /**
   * An array of icons that can be used in the list item referenced by
   * index number value in the buttonIconIndex property.
   */
  icons: PropTypes.arrayOf(PropTypes.node),
  /*
   * Triggered when the user clicks on a button in the action areas
   *
   * @functionTypes {CardWithCommentOnClickTypes}
   */
  onButtonClick: PropTypes.func
};

export const CardWithCommentOnClickTypes = {
  argument: PropTypes.shape({
    /**
     * An id of the button in the action areas
     */
    id: PropTypes.string
  })
};
