import get from 'lodash/get';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from './icons/material/ExpandLessIcon';
import ExpandMoreIcon from './icons/material/ExpandMoreIcon';
import pickWithValues from './utils/pickWithValues';
import { ListNavigationTypes } from './props/ListNavigation.props';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class ListNavigation extends React.Component {

  handleItemClick = (item) => e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { onListNavigationItemClick } = this.props;
    if (onListNavigationItemClick) {
      onListNavigationItemClick({url: item.url});
    }
  };

  handleItemToggle = (item) => (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { onListNavigationItemExpandClick, onListNavigationItemCollapseClick } = this.props;
    if (item.expanded && onListNavigationItemCollapseClick) {
      onListNavigationItemCollapseClick({url: item.url});
    } else if (!item.expanded && onListNavigationItemExpandClick) {
      onListNavigationItemExpandClick({url: item.url});
    }
  };

  renderList = (listItems, level = 0) => {
    const { classes, properties, icons } = this.props;
    let dense = false;
    if (properties) {
      dense = properties.dense;
    }
    const resultElementList = [];
    if (listItems && listItems.length > 0) {
      listItems.forEach((item, idx) => {
        if (item) {
          const {
            primaryText,
            secondaryText,
            url: href,
            selected,
            expanded,
            disabled,
            childrenItems,
            divider,
            iconIndex
          } = item;
          const listItemProperties = pickWithValues({ dense, divider, selected, disabled });
          const uniqueKey = `listItem${idx}.${level}`;
          const iconElement = get(icons, `[${iconIndex}]`);
          if (childrenItems && childrenItems.length > 0) {
            resultElementList.push(
              <ListItem
                key={uniqueKey}
                button={true}
                {...listItemProperties}
                onClick={this.handleItemToggle(item)}
              >
                {iconElement && (
                  <ListItemIcon>
                    {iconElement}
                  </ListItemIcon>
                )}
                <ListItemText primary={primaryText} secondary={secondaryText} />
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
            );
            resultElementList.push(
              <Collapse
                key={`collapse.${uniqueKey}`}
                in={expanded}
                timeout="auto"
                unmountOnExit={true}
              >
                {this.renderList(childrenItems, level + 1)}
              </Collapse>
            );
          } else {
            resultElementList.push(
              <ListItem
                key={uniqueKey}
                button={!href}
                {...listItemProperties}
                onClick={this.handleItemClick(item)}
              >
                {iconElement && (
                  <ListItemIcon>
                    {iconElement}
                  </ListItemIcon>
                )}
                {href
                  ? (
                    <ListItemText
                      primary={
                        <a
                          href={href}
                          onClick={this.handleItemClick(item)}
                        >
                          {primaryText}
                        </a>
                      }
                      secondary={secondaryText}
                    />
                  )
                  : (
                    <ListItemText
                      primary={primaryText}
                      secondary={secondaryText}
                    />
                  )
                }
              </ListItem>
            );
          }
        }
      });
    }
    return (
      <List
        component="div"
        className={level > 0 ? classes.nested : ''}
        disablePadding={true}
      >
        {resultElementList}
      </List>
    );
  };

  render () {
    const properties = this.props.properties || {};
    if (properties.items) {
      return this.renderList(properties.items);
    }
    return null;
  }
}

ListNavigation.propTypes = ListNavigationTypes;

ListNavigation.defaultProps = {
  properties: {
    items: [
      {
        url: '/page1',
        primaryText: 'List Item 00001',
        secondaryText: 'Subtext 00001',
        divider: true,
      },
      {
        url: '/page2',
        primaryText: 'List Item 00002',
        secondaryText: 'Subtext 00002'
      },
      {
        url: '/page3',
        primaryText: 'List Item 00003',
        secondaryText: 'Subtext 00003',
      },
      {
        url: '/page4',
        primaryText: 'List Item 00004',
        secondaryText: 'Subtext 00004'
      }
    ]
  }
};

export default withStyles(styles)(ListNavigation);
