import debounce from 'lodash/debounce';
import React from 'react';
import TextFieldMUI from '@material-ui/core/TextField';
import InputAdornmentMUI from '@material-ui/core/InputAdornment';
import pickWithValues from './utils/pickWithValues';
import { TextFieldTypes } from './TextField.props';

/**
 * Text field lets users enter and edit text.
 */
class TextField extends React.Component {
  constructor(props) {
    super(props);
    const { value, debounceDelay } = this.props;
    this.state = {
      localInputText: value,
    };
    this.setUpOnChange(debounceDelay);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { value, debounceDelay } = this.props;
    const { localInputText } = this.state;
    if (value !== prevProps.value && localInputText !== value) {
      this.setState({
        localInputText: value
      });
    }
    if (debounceDelay !== prevProps.debounceDelay) {
      this.setUpOnChange(debounceDelay);
    }
  }

  setUpOnChange = (debounceDelay) => {
    if (debounceDelay > 0) {
      this.debouncedChange = debounce((value) => {
        this.props.onChange({value});
      }, debounceDelay);
    } else {
      this.debouncedChange = (value) => {
        this.props.onChange({value});
      };
    }
  };

  handleChange = e => {
    this.setState({
      localInputText: e.target.value
    });
    this.debouncedChange(e.target.value);
  };

  render() {
    const { localInputText } = this.state;
    const { disabled, error, helperText, required, label, inputControl, formControl, multilineControl } = this.props;
    let mainProps = pickWithValues({ disabled, error, required, label, helperText });
    let inputProps = {};
    if (inputControl) {
      mainProps = {...mainProps, ...pickWithValues(inputControl)};
    }
    if (formControl) {
      const { color, fullWidth, margin, placeholder, variant, startAdornment, endAdornment } = formControl;
      mainProps = {...mainProps, ...pickWithValues({color, fullWidth, margin, placeholder, variant})};
      if (startAdornment) {
        inputProps.startAdornment = (
          <InputAdornmentMUI position="start">{startAdornment}</InputAdornmentMUI>
        );
      }
      if (endAdornment) {
        inputProps.endAdornment = (
          <InputAdornmentMUI position="end">{endAdornment}</InputAdornmentMUI>
        );
      }
    }
    if (multilineControl) {
      mainProps = {...mainProps, ...pickWithValues(multilineControl)};
    }
    return (
      <TextFieldMUI
        value={localInputText || ''}
        InputProps={inputProps}
        {...mainProps}
        onChange={this.handleChange}
      />
    );
  }
}

TextField.propTypes = TextFieldTypes;

TextField.defaultProps = {
  debounceDelay: 300,
  inputControl: {
    type: 'text',
  },
  formControl: {
    margin: 'none',
  },
  onChange: () => {
    console.info('TextField.onChange is not set');
  },
};

export default TextField;
