import React from 'react';
import ContainerMUI from '@material-ui/core/Container';
import { ContainerTypes } from './Container.props';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { child, fixed, maxWidth, disableMaxWidth } = this.props;
    return (
      <ContainerMUI
        fixed={fixed}
        maxWidth={disableMaxWidth ? false : maxWidth}
      >
        {child}
      </ContainerMUI>
    );
  }
}

Container.propTypes = ContainerTypes;

Container.defaultProps = {
  doNotUseInFlows: true,
  fixed: false,
  maxWidth: 'lg',
  disableMaxWidth: false,
  child: <span />
};

export default Container;
