import forOwn from 'lodash/forOwn';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import BoxMUI from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';
import pickWithValues from './utils/pickWithValues';
import findColor from './utils/colorMap';
import elevationMap from './utils/elevationMap';
import { BoxTypes } from './Box.props';

/**
 * Box comment
 */
class Box extends React.Component {
  render () {
    let properties = {};
    const {
      borders,
      display,
      flexbox,
      palette,
      positions,
      sizing,
      spacing,
      boxShadow,
      typography,
      child,
      theme
    } = this.props;
    if (borders) {
      properties = borders;
      if (borders.borderColor) {
        const { colorHue, colorShade } = borders.borderColor;
        properties.borderColor = findColor(colorHue, colorShade, theme);
      }
    }
    if (display) {
      properties = {
        ...properties,
        ...pickWithValues(display)
      };
    }
    if (palette) {
      const { color, backgroundColor } = palette;
      if (color) {
        const { colorHue, colorShade } = color;
        properties.color = findColor(colorHue, colorShade, theme);
      }
      if (backgroundColor) {
        const { colorHue, colorShade } = backgroundColor;
        properties.bgcolor = findColor(colorHue, colorShade, theme);
      }
    }
    if (sizing) {
      properties = {
        ...properties,
        ...pickWithValues(sizing)
      };
    }
    if (flexbox) {
      properties = {
        ...properties,
        ...flexbox
      };
    }
    if (positions) {
      properties = {
        ...properties,
        ...positions
      };
    }
    if (spacing) {
      forOwn(spacing, (spacingGroup) => {
        const validSpacing = pickWithValues(spacingGroup);
        if (!isEmpty(validSpacing)) {
          forOwn(validSpacing, (value, prop) => {
            if (!isNaN(value)) {
              properties[prop] = parseFloat(value);
            } else {
              properties[prop] = value;
            }
          });
        }
      });
    }
    if (boxShadow) {
      properties.boxShadow = elevationMap[boxShadow];
    }
    if (typography) {
      properties = {
        ...properties,
        ...typography
      };
    }
    // get rid of nulls and undefined
    properties = pickWithValues(properties);
    //
    return (
      <BoxMUI {...properties}>
        {child}
      </BoxMUI>
    );
  }
}

Box.propTypes = BoxTypes;

Box.defaultProps = {
  doNotUseInFlows: true,
  display: {
    display: 'flex',
  },
  sizing: {
    width: '100%'
  },
  child: <span/>,
};

export default withTheme(Box);
