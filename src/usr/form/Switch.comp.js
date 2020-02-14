import React from 'react';
import SwitchMUI from '@material-ui/core/Switch';
import FormControlLabelMUI from '@material-ui/core/FormControlLabel';
import pickWithValues from './utils/pickWithValues';
import { SwitchTypes } from './Switch.props';

/**
 * Switches toggle the state of a single setting on or off.
 * Switches are the preferred way to adjust settings on mobile. The option that the switch controls,
 * as well as the state it’s in, should be made clear from the corresponding inline label.
 */
class Switch extends React.Component {
  handleChange = e => {
    const checked = e.target.checked;
    const { label, value, id } = this.props;
    this.props.onChange({ checked, value, id, label });
  };

  render() {
    const { disabled, label, labelPlacement } = this.props;
    const { value, checked, id, color,  required, size } = this.props;
    const muiFormControlLabelProps = pickWithValues({ disabled, label, labelPlacement });
    const muiSwitchProps = pickWithValues({ value, checked, id, color, required });
    if (size) {
      muiSwitchProps.size = size;
    }
    return (
      <FormControlLabelMUI
        control={
          <SwitchMUI {...muiSwitchProps} onChange={this.handleChange} />
        }
        {...muiFormControlLabelProps}
      />
    );
  }
}

Switch.propTypes = SwitchTypes;

Switch.defaultProps = {
  label: 'Switch',
  color: 'default',
  onChange: () => {
    console.info('SwitchTypes.onChange is not set');
  }
};

export default Switch;
