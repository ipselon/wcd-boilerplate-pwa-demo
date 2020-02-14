import React from 'react';
import TypographyMUI from '@material-ui/core/Typography';
import pickWithValues from '../utils/pickWithValues';
import { TitleTypes } from '../props/Title.props';

class Title extends React.Component {
  render() {
    const { color, noWrap, variant, text } = this.props;
    const muiTypographyProps =
      pickWithValues({ color, noWrap, variant, text });
    return (
      <TypographyMUI
        align="left"
        {...muiTypographyProps}
      >
        <span>{text}</span>
      </TypographyMUI>
    );
  }
}

Title.propTypes = TitleTypes;

Title.defaultProps = {
  color: 'initial',
  noWrap: false,
  variant: 'h5',
  text: 'Text here'
};

export default Title;
