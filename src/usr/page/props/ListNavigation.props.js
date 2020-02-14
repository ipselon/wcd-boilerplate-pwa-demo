import PropTypes from 'prop-types';

export const ListItemTypes = {
  // The list item url.
  url: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  // The list item primary text
  primaryText: PropTypes.string,
  // The list item secondary text
  secondaryText: PropTypes.string,
  // If true, a 1px light border is added to the bottom of the list item.
  divider: PropTypes.bool,
  /**
   * The index value of the icon in the icons array property
   */
  iconIndex: PropTypes.number,
  /**
   * Nested list items
   */
  childrenItems: PropTypes.arrayOf(PropTypes.shape({
    // The list item url.
    url: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    // The list item primary text
    primaryText: PropTypes.string,
    // The list item secondary text
    secondaryText: PropTypes.string,
    // If true, a 1px light border is added to the bottom of the list item.
    divider: PropTypes.bool,
    /**
     * The index value of the icon in the icons array property
     */
    iconIndex: PropTypes.number,
  })),
};

export const ListNavigationTypes = {
  properties: PropTypes.shape({
    /**
     * If true, compact vertical padding designed for keyboard and mouse input will be used.
     */
    dense: PropTypes.bool,
    /**
     * The list of actions.
     */
    items: PropTypes.arrayOf(PropTypes.shape(ListItemTypes)),
  }),
  /**
   * An icons elements array
   */
  icons: PropTypes.arrayOf(PropTypes.node),
  /**
   * @functionTypes {ListNavigationItemClickTypes}
   */
  onListNavigationItemClick: PropTypes.func,
  /**
   * @functionTypes {ListNavigationItemToggleClickTypes}
   */
  onListNavigationItemExpandClick: PropTypes.func,
  /**
   * @functionTypes {ListNavigationItemToggleClickTypes}
   */
  onListNavigationItemCollapseClick: PropTypes.func,
};

export const ListNavigationItemClickTypes = {
  /**
   * Clicked item in the list
   */
  argument: PropTypes.shape({
    /**
     *  Dispatches the selected item url.
     */
    url: PropTypes.string,
  }),
};

export const ListNavigationItemToggleClickTypes = {
  /**
   * An object passed as the first function argument
   */
  argument: PropTypes.shape({
    /**
     *  Dispatches the selected item url.
     */
    url: PropTypes.string,
  }),
};

export const SelectListNavigationItemByUrlTypes = {
  /**
   * An object passed as the first function argument
   */
  argument: PropTypes.shape({
    /**
     *  Dispatches the selected item url.
     */
    url: PropTypes.string,
  }),
  dispatch: PropTypes.shape({
    properties: PropTypes.object,
  }),
};

export const ToggleExpandListNavigationItemByUrlTypes = {
  /**
   * An object passed as the first function argument
   */
  argument: PropTypes.shape({
    /**
     *  Dispatches the selected item url.
     */
    url: PropTypes.string,
  }),
  dispatch: PropTypes.shape({
    properties: PropTypes.object,
  }),
};
