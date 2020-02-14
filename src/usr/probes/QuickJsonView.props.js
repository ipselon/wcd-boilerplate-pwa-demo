import PropTypes from 'prop-types';

export const QuickJsonViewTypes = {
  data: PropTypes.object,
  dataFieldsBinding: PropTypes.shape({
    items: PropTypes.shape({
      primaryText: PropTypes.shape({
        fieldName: PropTypes.string,
        valueToTextConverter: PropTypes.oneOf(['', 'number-to-text', 'date-to-text', 'timestamp-to-text']),
      }),
      secondaryText: PropTypes.shape({
        fieldName: PropTypes.string,
        valueToTextConverter: PropTypes.oneOf(['', 'number-to-text', 'date-to-text', 'timestamp-to-text']),
      }),
      url: PropTypes.shape({
        fieldName: PropTypes.string,
        valueToTextConverter: PropTypes.oneOf(['', 'number-to-text', 'date-to-text', 'timestamp-to-text']),
      }),
      nestedItems: PropTypes.shape({
        primaryText: PropTypes.shape({
          fieldName: PropTypes.string,
          valueToTextConverter: PropTypes.oneOf(['', 'number-to-text', 'date-to-text', 'timestamp-to-text']),
        }),
        secondaryText: PropTypes.shape({
          fieldName: PropTypes.string,
          valueToTextConverter: PropTypes.oneOf(['', 'number-to-text', 'date-to-text', 'timestamp-to-text']),
        }),
        url: PropTypes.shape({
          fieldName: PropTypes.string,
          valueToTextConverter: PropTypes.oneOf(['', 'number-to-text', 'date-to-text', 'timestamp-to-text']),
        }),
      }),
    }),
  }),
  datum: PropTypes.shape({
    items: PropTypes.object,
  }),
};
