import React from 'react';
import { ImageHolderTypes } from './ImageHolder.props';

class ImageHolder extends React.Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <img src={imageUrl} title={imageUrl} alt="Image is not found" />
    );
  }
}

ImageHolder.propTypes = ImageHolderTypes;

ImageHolder.defaultProps = {
  imageUrl: '',
};

export default ImageHolder;
