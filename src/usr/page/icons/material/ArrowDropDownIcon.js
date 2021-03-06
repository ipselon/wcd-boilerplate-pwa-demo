import React from 'react';
import SvgIconMUI from '@material-ui/core/SvgIcon';

class ArrowDropDownIcon extends React.Component {
  render () {
    return (
      <SvgIconMUI>
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path
          d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"
        />
      </SvgIconMUI>
    );
  }
}

export default ArrowDropDownIcon;
