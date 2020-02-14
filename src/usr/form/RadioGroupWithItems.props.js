import PropTypes from 'prop-types';

export const RadioGroupWithItemsTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  /**
   * Radio buttons
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Input label text.
     */
    label: PropTypes.string,
    /**
     * The value of the input component.
     */
    value: PropTypes.string,
    /**
     * If true, the input element will be required.
     */
    required: PropTypes.bool,
    /**
     * If true, the control will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['', 'default', 'primary', 'secondary']),
  })),
  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
  /**
   * If true the circular progress is shown and button is disabled.
   */
  loading: PropTypes.bool,
  /**
   * Display group of elements in a compact row.
   */
  row: PropTypes.bool,
  /**
   * Value of the selected radio button.
   */
  selectedValue: PropTypes.string,
  /**
   * The size of the radio. small is equivalent to the dense radio styling
   */
  size: PropTypes.oneOf(['', 'medium', 'small']),
  /*
   * Submits the entered value
   *
   * @functionTypes {RadioGroupWithItemsOnChangeTypes}
   */
  onChange: PropTypes.func
};

export const RadioGroupWithItemsOnChangeTypes = {
  argument: PropTypes.shape({
    // Value of the selected radio button.
    value: PropTypes.string
  }),
};
