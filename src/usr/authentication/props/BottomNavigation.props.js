import PropTypes from 'prop-types';

export const BottomNavigationItemTypes = {
  // The navigation item id
  id: PropTypes.string,
  // The navigation item label. Shown only when showLabels is true.
  label: PropTypes.string,
  active: PropTypes.bool,
  // An icon index from the icons array property
  iconIndex: PropTypes.number,
};

export const BottomNavigationTypes = {
  properties: PropTypes.shape({
    /**
     * If true, all navigation items will show their labels.
     * By default, only the selected navigation item will show its label.
     */
    showLabels: PropTypes.bool,
    /**
     * An array of actions in the bottom navigation.
     * Use not more than 4-5 items due to look good in the mobile resolution.
     */
    items: PropTypes.arrayOf(PropTypes.shape(BottomNavigationItemTypes)),
  }),
  /**
   * An icons elements array
   */
  icons: PropTypes.arrayOf(PropTypes.node),
};
