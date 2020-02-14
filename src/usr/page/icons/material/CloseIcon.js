import React from 'react';
import SvgIconMUI from '@material-ui/core/SvgIcon';

class CloseIcon extends React.Component {
  render () {
    return (
      <SvgIconMUI>
        <path
          d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
        />
      </SvgIconMUI>
    );
  }
}

export default CloseIcon;
