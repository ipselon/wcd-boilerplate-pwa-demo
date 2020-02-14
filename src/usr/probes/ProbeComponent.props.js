import PropTypes from 'prop-types';

export const ProbeComponentTypes = {
  // CSS properties
  styling: PropTypes.shape({
    // The border-color shorthand CSS property sets the color of an element's border.
    borderColor: PropTypes.string,
    // The border-width shorthand CSS property sets the width of an element's border.
    borderWidth: PropTypes.string,
    // The border-style shorthand CSS property sets the line style for all four sides of an element's border.
    borderStyle: PropTypes.oneOf([
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
      'inherit',
      'initial'
    ]),
    // An element's padding area is the space between its content and its border.
    padding: PropTypes.string,
    // The margin CSS property sets the margin area on all four sides of an element.
    margin: PropTypes.string
  }),
  // Used for passing data in the component
  data: PropTypes.shape({
    // Component title value
    title: PropTypes.string,
    // Placeholder text in the input element
    placeholder: PropTypes.string,
    // Text value in the input element
    inputText: PropTypes.string,
    // Input arbitrary object
    inputObject: PropTypes.object,
    // Input arbitrary array
    inputArray: PropTypes.array
  }),
  /*
   *  An array of the placeholders for child components.
   *  Increase array size to put more items.
   */
  cells: PropTypes.arrayOf(PropTypes.element),
  /*
   * Triggered when the text is changed in the input control
   *
   */
  onInputTextChange: PropTypes.func,
  /*
   * Submits the entered value
   *
   */
  onSubmit: PropTypes.func
};
