import React from 'react';
import { DivWithStyleTypes } from './DivWithStyle.props';

/**
 * StyledDiv is used in case when the theme styles are not enough.
 * It is recommended to use it for complex layouts mostly.
 */
class DivWithStyle extends React.Component {
  render() {
    const { children, style } = this.props;
    return (
      <div style={style}>
        {children}
      </div>
    );
  }
}

DivWithStyle.propTypes = DivWithStyleTypes;

DivWithStyle.defaultProps = {
  doNotUseInFlows: true,
  style: {
    display: 'flex',
  },
  children: [<span/>],
};

export default DivWithStyle;
