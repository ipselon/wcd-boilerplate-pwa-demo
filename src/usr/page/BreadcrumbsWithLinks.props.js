import PropTypes from 'prop-types';

export const BreadCrumbLinkTypes = {

  /**
   * An id of the array item
   */
  id: PropTypes.string,
  /**
   * If true, the link in the item will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * href of the link.
   */
  href: PropTypes.string,
  /**
   * The color of the link.
   */
  color: PropTypes.oneOf([
    'default',
    'error',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary'
  ]),
  /**
   * Controls when the link should have an underline.
   */
  underline: PropTypes.oneOf(['none', 'hover', 'always']),
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    '',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit'
  ]),
  /**
   * Breadcrumbs link label
   */
  label: PropTypes.string,
  /**
   * The index value if the icon in the icons array property
   */
  iconIndex: PropTypes.number,

};

export const BreadcrumbsWithLinksTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  /**
   * An array of breadcrumbs links
   */
  links: PropTypes.arrayOf(PropTypes.shape(BreadCrumbLinkTypes)),
  /**
   * A character that will be used as a separator.
   */
  separatorText: PropTypes.string,
  /**
   * If specified, it will be used as a separator.
   */
  separatorNode: PropTypes.node,
  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   */
  itemsAfterCollapse: PropTypes.number,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   */
  itemsBeforeCollapse: PropTypes.number,
  /**
   * Specifies the maximum number of breadcrumbs to display.
   * When there are more than the maximum number,
   * only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown,
   * with an ellipsis in between.
   */
  maxItems: PropTypes.number,
  /**
   * An array of icons that can be used in the breadcrumbs item referenced by index number value in the iconIndex property.
   */
  icons: PropTypes.arrayOf(PropTypes.node),
  /*
   * Triggered when the user clicks on the link
   *
   * @functionTypes {BreadcrumbsWithLinksOnClickTypes}
   */
  onClick: PropTypes.func
};

export const BreadcrumbsWithLinksOnClickTypes = {
  // href in the clicked link
  argument: PropTypes.shape(BreadCrumbLinkTypes),
};
