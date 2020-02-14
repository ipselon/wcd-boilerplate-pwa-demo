import React from 'react';
import BottomNavigationMUI from '@material-ui/core/BottomNavigation';
import BottomNavigationActionMUI from '@material-ui/core/BottomNavigationAction';
import { BottomNavigationTypes } from './props/BottomNavigation.props';

class BottomNavigation extends React.Component {

  handleChange = (e, value) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { onClick } = this.props;
    if (onClick) {
      onClick({
        id: value,
      });
    }
  };

  render() {
    const { icons } = this.props;
    const properties = this.props.properties || {};
    const { items, showLabels } = properties;
    if (items) {
      const actionsElements = [];
      let activeId;
      if (items && items.length > 0) {
        for (let i = 0; i < items.length; i++) {
          if (items[i]) {
            const { id, label, active, iconIndex } = items[i];
            if(active) {
              activeId = id;
            }
            const icon = icons && icons.length > 0 ? icons[iconIndex] : null;
            actionsElements.push(
              <BottomNavigationActionMUI
                key={`navigationAction${i}`}
                label={label}
                value={id}
                icon={icon}
              />
            );
          }
        }
      }
      return (
        <BottomNavigationMUI
          showLabels={showLabels}
          value={activeId}
          onChange={this.handleChange}
        >
          {actionsElements}
        </BottomNavigationMUI>
      );
    }
    return null;
  }
}

BottomNavigation.propTypes = BottomNavigationTypes;

BottomNavigation.defaultProps = {
  properties: {
    showLabels: true,
    items: [
      {
        id: 'navItem1',
        label: 'Nav Item 1',
      },
      {
        id: 'navItem2',
        label: 'Nav Item 2',
      },
      {
        id: 'navItem3',
        label: 'Nav Item 3',
      },
    ],
  }
};

export default BottomNavigation;
