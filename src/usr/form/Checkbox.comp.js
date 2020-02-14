import React from 'react';
import CheckboxMUI from '@material-ui/core/Checkbox';
import FormControlLabelMUI from '@material-ui/core/FormControlLabel';
import pickWithValues from './utils/pickWithValues';
import { CheckboxTypes } from './Checkbox.props';

/**
 * Checkboxes allow the user to select one or more items from a set.
 */
class Checkbox extends React.Component {
  handleChange = e => {
    const checked = e.target.checked;
    const { label, value, id } = this.props;
    this.props.onChange({ checked, value, id, label });
  };

  render() {
    const { disabled, label, labelPlacement } = this.props;
    const { value, checked, id, color, indeterminate, required } = this.props;
    const muiFormControlLabelProps = pickWithValues({ disabled, label, labelPlacement });
    const muiCheckboxProps = pickWithValues({ value, checked, id, color, indeterminate, required });
    return (
      <FormControlLabelMUI
        control={
          <CheckboxMUI {...muiCheckboxProps} onChange={this.handleChange} />
        }
        {...muiFormControlLabelProps}
      />
    );
  }
}

Checkbox.propTypes = CheckboxTypes;

Checkbox.defaultProps = {
  label: 'Checkbox',
  color: 'default',
  onChange: () => {
    console.info('Checkbox.onChange is not set');
  }
};

export default Checkbox;
