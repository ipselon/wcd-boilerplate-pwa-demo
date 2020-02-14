import uniqueId from 'lodash/uniqueId';
import React from 'react';
import RadioGroupMUI from '@material-ui/core/RadioGroup';
import RadioMUI from '@material-ui/core/Radio';
import FormControlLabelMUI from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import pickWithValues from './utils/pickWithValues';
import InputCircularProgress from './lib/InputCircularProgress';
import { RadioGroupWithItemsTypes } from './RadioGroupWithItems.props';

const styles = theme => ({
  group: {
    position: 'relative',
  },
});

/**
 * Radio buttons allow the user to select one option from a set.
 * Use radio buttons when the user needs to see all available options.
 * If available options can be collapsed, consider using a dropdown menu because it uses less space.
 */
class RadioGroupWithItems extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.uniqueName = uniqueId('radioGroup');
    this.state = {
      selectedValueLocal: this.props.selectedValue,
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { selectedValue } = this.props;
    const { selectedValueLocal } = this.state;
    if (selectedValue !== prevProps.selectedValue && selectedValue !== selectedValueLocal) {
      this.setState({ selectedValueLocal: selectedValue });
    }
  }

  handleChange = e => {
    this.setState({
      selectedValueLocal: e.target.value,
    });
    this.props.onChange({
      value: e.target.value
    });
  };

  render () {
    const { classes, items, loading, row, labelPlacement, size } = this.props;
    const radioElements = [];
    if (items && items.length > 0) {
      let radioItem;
      let muiRadioItemProps;
      let muiRadioLabelProps;
      for (let i = 0; i < items.length; i++) {
        radioItem = items[i];
        if (radioItem) {
          const { label, value, required, disabled, color } = radioItem;
          muiRadioLabelProps = pickWithValues({ label, labelPlacement });
          if (labelPlacement) {
            muiRadioLabelProps.labelPlacement = labelPlacement;
          }
          muiRadioItemProps = pickWithValues({ value, required, disabled, color, size });
          if (loading) {
            muiRadioItemProps.disabled = true;
          }
          radioElements.push(
            <FormControlLabelMUI
              key={`${this.uniqueName}${i}`}
              {...muiRadioLabelProps}
              control={<RadioMUI {...muiRadioItemProps} />}
            />
          )
        }
      }
    }
    const { selectedValueLocal: value } = this.state;
    const muiRadioGroupProps = pickWithValues({ row, value });
    return (
      <RadioGroupMUI
        aria-label={this.uniqueName}
        name={this.uniqueName}
        className={classes.group}
        {...muiRadioGroupProps}
        onChange={this.handleChange}
      >
        {radioElements}
        {loading && (
          <InputCircularProgress/>
        )}
      </RadioGroupMUI>
    );
  }
}

RadioGroupWithItems.propTypes = RadioGroupWithItemsTypes;

RadioGroupWithItems.defaultProps = {
  items: [
    {label: 'Orange', value: 'orange', labelPlacement: 'end', color: 'default'},
    {label: 'Green', value: 'green', labelPlacement: 'end', color: 'default'},
    {label: 'Blue', value: 'blue', labelPlacement: 'end', color: 'default'},
  ],
  row: true,
  selectedValue: 'Green',
  onChange: () => {
    console.info('RadioGroupWithItems.onChange is not set');
  }
};

export default withStyles(styles)(RadioGroupWithItems);
