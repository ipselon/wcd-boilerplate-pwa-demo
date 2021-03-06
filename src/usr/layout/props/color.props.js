import PropTypes from 'prop-types';

export const ColorTypes = {
  // A value from the collection of colors, i.e. hues
  colorHue: PropTypes.oneOf([
    '',
    'primary.main',
    'secondary.main',
    'error.main',
    'text.primary',
    'text.secondary',
    'text.disabled',
    'text.hint',
    'red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deepOrange',
    'brown',
    'grey',
    'blueGrey'
  ]),
  // A value from the collection of colors shades
  colorShade: PropTypes.oneOf([
    '',
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A100',
    'A200',
    'A400',
    'A700'
  ]),

};
