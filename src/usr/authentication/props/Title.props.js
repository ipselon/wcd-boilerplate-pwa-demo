import PropTypes from 'prop-types';

export const TitleTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: PropTypes.bool,
  // Applies the theme typography styles.
  variant: PropTypes.oneOf([
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
  // The content of the component.
  text: PropTypes.string,
};