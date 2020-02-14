import PropTypes from 'prop-types';

export const AuthFormTypes = {
  properties: PropTypes.shape({
    form: PropTypes.shape({
      layout: PropTypes.shape({
        /**
         * Defines the space between cells.
         */
        spacing: PropTypes.oneOf([
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
        ]),
      }),
    }),
  }),
};

// export const AuthenticationFormInputTextTypes = {
//   argument: PropTypes.shape({
//     // changed text in the input control
//     enteredText: PropTypes.string
//   })
// };
//
// export const AuthenticationFormSubmitTypes = {
//   argument: PropTypes.shape({
//     // entered text into the input control
//     enteredText: PropTypes.string
//   })
// };
