import React from 'react';
import ContainerMUI from '@material-ui/core/Container';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, fixed, maxWidth, disableMaxWidth } = this.props;
    return (
      <ContainerMUI
        fixed={fixed}
        maxWidth={disableMaxWidth ? false : maxWidth}
      >
        {children}
      </ContainerMUI>
    );
  }
}

export default Container;
