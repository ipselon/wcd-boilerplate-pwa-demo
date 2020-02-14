import PropTypes from 'prop-types';

export const GridItemTypes = {
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the lg breakpoint and wider screens if not overridden.
   */
  lg: PropTypes.oneOf([
    'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the md breakpoint and wider screens if not overridden.
   */
  md: PropTypes.oneOf([
    'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the sm breakpoint and wider screens if not overridden.
   */
  sm: PropTypes.oneOf([
    'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the xl breakpoint and wider screens if not overridden.
   */
  xl: PropTypes.oneOf([
    'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the xs breakpoint and wider screens if not overridden.
   */
  xs: PropTypes.oneOf([
    'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ]),
  // If true, it sets min-width: 0 on the item.
  zeroMinWidth: PropTypes.bool,
};

export const GridContainerTypes = {
  // Defines the align-content style property. It's applied for all screen sizes.
  alignContent: PropTypes.oneOf([
    'stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'
  ]),
  // Defines the align-items style property. It's applied for all screen sizes.
  alignItems: PropTypes.oneOf([
    'flex-start', 'center', 'flex-end', 'stretch', 'baseline'
  ]),
  // Defines the flex-direction style property. It is applied for all screen sizes.
  direction: PropTypes.oneOf([
    'row', 'row-reverse', 'column', 'column-reverse'
  ]),
  // Defines the justify-content style property. It is applied for all screen sizes.
  justify: PropTypes.oneOf([
    'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'
  ]),
  // Defines the flex-wrap style property. It's applied for all screen sizes.
  wrap: PropTypes.oneOf([
    'nowrap', 'wrap', 'wrap-reverse'
  ]),
  /**
   * Defines the space between the type item component.
   */
  spacing: PropTypes.oneOf([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]),
};

export const GridWithCellsTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  // Common container properties, it's applied only to the container component.
  grid: PropTypes.shape(GridContainerTypes),
  // A list of the cells in the grid.
  cells: PropTypes.arrayOf(PropTypes.shape({
    // Place here a component
    child: PropTypes.element,
    // Cell properties
    cell: PropTypes.shape(GridItemTypes),
  })),
};