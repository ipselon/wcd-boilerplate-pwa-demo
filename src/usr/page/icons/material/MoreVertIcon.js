import React from 'react';
import SvgIconMUI from '@material-ui/core/SvgIcon';

class MoreVertIcon extends React.Component {
  render () {
    return (
      <SvgIconMUI>
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        />
      </SvgIconMUI>
    );
  }
}

export default MoreVertIcon;
