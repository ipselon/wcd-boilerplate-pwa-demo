import forOwn from 'lodash/forOwn';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import BoxMUI from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';
import pickWithValues from './utils/pickWithValues';
import elevationMap from './utils/elevationMap';
import findColor from './utils/colorMap';
import { BoxResponsiveTypes } from './BoxResponsive.props';

/**
 * BoxResponsive comment..... test
 */
class BoxResponsive extends React.Component {
  render() {
    let properties = {};
    const { stylesByScreenSize, child, theme } = this.props;
    if (stylesByScreenSize && stylesByScreenSize.length > 0) {
      let stylingBreakpoint;
      for(let i = 0; i < stylesByScreenSize.length; i++) {
        stylingBreakpoint = stylesByScreenSize[i];
        if (stylingBreakpoint && stylingBreakpoint.styling) {
          let breakpointProperties = {};
          const { breakpoint, styling } = stylingBreakpoint;
          const {
            borders,
            display,
            flexbox,
            palette,
            positions,
            sizing,
            spacing,
            boxShadow,
            typography
          } = styling;
          if (borders) {
            const {
              border,
              borderTop,
              borderRight,
              borderBottom,
              borderLeft,
              borderColor,
              borderRadius
            } = borders;
            breakpointProperties = {
              ...pickWithValues({ border, borderTop, borderRight, borderBottom, borderLeft }),
              borderRadius,
            };
            if (borderColor) {
              const { colorHue, colorShade } = borderColor;
              breakpointProperties.borderColor = findColor(colorHue, colorShade, theme);
            }
          }
          if (display) {
            breakpointProperties = {
              ...breakpointProperties,
              ...pickWithValues(display)
            };
          }
          const { color, backgroundColor } = palette;
          if (color) {
            const { colorHue, colorShade } = color;
            breakpointProperties.color = findColor(colorHue, colorShade, theme);
          }
          if (backgroundColor) {
            const { colorHue, colorShade } = backgroundColor;
            breakpointProperties.bgcolor = findColor(colorHue, colorShade, theme);
          }
          if (sizing) {
            breakpointProperties = {
              ...breakpointProperties,
              ...pickWithValues(sizing)
            };
          }
          if (flexbox) {
            breakpointProperties = {
              ...breakpointProperties,
              ...flexbox
            };
          }
          if (positions) {
            breakpointProperties = {
              ...breakpointProperties,
              ...positions
            };
          }
          if (spacing) {
            forOwn(spacing, (spacingGroup) => {
              const validSpacing = pickWithValues(spacingGroup);
              if (!isEmpty(validSpacing)) {
                forOwn(validSpacing, (value, prop) => {
                  if (!isNaN(value)) {
                    breakpointProperties[prop] = parseFloat(value);
                  } else {
                    breakpointProperties[prop] = value;
                  }
                });
              }
            });
          }
          if (boxShadow) {
            breakpointProperties.boxShadow = elevationMap[boxShadow];
          }
          if (typography) {
            breakpointProperties = {
              ...breakpointProperties,
              ...typography
            };
          }
          // get rid of nulls and undefined
          breakpointProperties = pickWithValues(breakpointProperties);
          //
          forOwn(breakpointProperties, (propValue, propName) => {
            properties[propName] = properties[propName] || {};
            properties[propName][breakpoint] = propValue;
          });
        }
      }
    }
    return (
      <BoxMUI {...properties}>
        {child}
      </BoxMUI>
    );
  }
}

BoxResponsive.propTypes = BoxResponsiveTypes;

BoxResponsive.defaultProps = {
  doNotUseInFlows: true,
  stylesByScreenSize: [
    {
      breakpoint: 'xs',
      styling: {
        borders: {
          border: 1,
        },
      }
    }
  ],
  child: <span/>,
};

export default withTheme(BoxResponsive);
