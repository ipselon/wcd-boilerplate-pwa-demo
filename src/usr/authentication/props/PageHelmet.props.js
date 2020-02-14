import PropTypes from 'prop-types';

export const PageHelmetTypes = {
  /**
   * HTML title tag value
   */
  title: PropTypes.string,
  /**
   * Multiple meta elements
   */
  meta: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Meta name attribute value
     */
    name: PropTypes.string,
    /**
     * Meta content attribute value
     */
    content: PropTypes.string,
    /**
     * Meta property attribute value
     */
    property: PropTypes.string,
  })),
};

