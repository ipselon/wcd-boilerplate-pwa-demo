import PropTypes from 'prop-types';

export const SelectWithOptionsTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  /**
   * The input value. Providing an empty string will select no options.
   */
  selectedValue: PropTypes.string,
  /**
   * If true, the input element will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Label text
   */
  label: PropTypes.string,
  /**
   * If true, the component should be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If true, the label will indicate that the select is required.
   */
  required: PropTypes.bool,
  /**
   * If true the circular progress is shown and the component is disabled.
   */
  loading: PropTypes.bool,
  /**
   * Form control properties
   */
  formControl: PropTypes.shape({
    /**
     * If true, the component will be using a native select element.
     */
    native: PropTypes.bool,
    /**
     * If true, the width of the popover will automatically be set according to the items inside the menu,
     * otherwise it will be at least the width of the select input.
     */
    autoWidth: PropTypes.bool,
    /**
     * If true, a value is displayed even if no items are selected.
     */
    displayEmpty: PropTypes.bool,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['', 'standard', 'outlined', 'filled']),
    /**
     * The size of the select control.
     */
    size: PropTypes.oneOf(['', 'small', 'medium']),
    /**
     * If true, the left and right padding is removed in each option.
     */
    disableGuttersInOptions: PropTypes.bool,
    /**
     * If true, compact vertical padding designed for keyboard and mouse input will be used for each option.
     */
    denseOptions: PropTypes.bool,
    /**
     * Helper text, it is placed below the component
     */
    helperText: PropTypes.string,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['', 'primary', 'secondary']),
    /**
     * If true, the component will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /**
     * If true, the label will be hidden. This is used to increase density for a filled component.
     */
    hiddenLabel: PropTypes.bool,
    /**
     * If dense or normal, will adjust vertical spacing of this and contained components.
     */
    margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  }),
  /**
   * An array of select options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Unique id of the option
     */
    id: PropTypes.string,
    /**
     * Option value
     */
    value: PropTypes.string,
    /**
     * Option display label
     */
    label: PropTypes.string,
    /**
     * If true, the list item will be disabled.
     */
    disabled: PropTypes.bool,
  })),
  /*
   * Submits the entered value
   *
   * @functionTypes {SelectWithOptionsOnChangeTypes}
   */
  onChange: PropTypes.func
};

export const SelectWithOptionsOnChangeTypes = {
  argument: PropTypes.shape({
    // Selected option value
    value: PropTypes.string
  }),
};
