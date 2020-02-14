import PropTypes from 'prop-types';

export const ButtonTypes = {
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
  variant: PropTypes.oneOf(['', 'text', 'outlined', 'contained']),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * An element placed after the button label.
   */
  endIcon: PropTypes.node,
  /**
   * An element placed before the button label.
   */
  startIcon: PropTypes.node,
  /**
   * The size of the button. `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   */
  href: PropTypes.string,
  /**
   * If true the circular progress is shown and button is disabled.
   */
  loading: PropTypes.bool,
  /**
   * Set the menu items props by their ids
   */
  byId: PropTypes.shape({
    /**
     * Selected menu items by id
     */
    selectedMenuIds: PropTypes.arrayOf(PropTypes.string),
    /**
     * Disabled menu items by id
     */
    disabledMenuIds: PropTypes.arrayOf(PropTypes.string),
  }),
  /**
   * A list of the menu items
   */
  menu: PropTypes.arrayOf(PropTypes.shape({
    /**
     * A menu item id
     */
    id: PropTypes.string,
    /**
     * A menu item label
     */
    label: PropTypes.string,
    /**
     * The URL to link to when the menu item is clicked.
     */
    href: PropTypes.string,
    /**
     * If true, the menu item is disabled
     */
    disabled: PropTypes.bool,
    /**
     * If true, the menu item is selected
     */
    selected: PropTypes.bool,
  })),
  /*
   * Triggered when the user click on the button
   *
   */
  onClick: PropTypes.func,
  /*
   * Triggered when the user click on the menu item
   *
   */
  onMenuItemClick: PropTypes.func
};
