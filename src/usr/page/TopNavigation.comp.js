import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Button from './lib/Button';
import { TopNavigationTypes } from './props/TopNavigation.props';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  leftSection: {
    flexGrow: 0,
    display: 'flex',
    '& div:first-child': {
      marginLeft: 0,
    },
    '& div': {
      marginLeft: theme.spacing(1),
    },
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightSection: {
    flexGrow: 1,
    display: 'flex',
    '& div:last-child': {
      marginRight: 0,
    },
    '& div': {
      marginRight: theme.spacing(1),
    },
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});

class TopNavigation extends React.Component {

  handleControlClick = ({href}) => {
    if (this.props.onTopNavigationItemClick) {
      this.props.onTopNavigationItemClick({url: href});
    }
  };

  render() {
    const { classes } = this.props;
    const properties = this.props.properties || {};
    const { menuLabel, size, items } = properties;
    let mobileControls = [];
    let desktopControls = [];
    if (items && items.length > 0) {
      const mobileControlMenuItems = [];
      for (let i = 0; i < items.length; i++) {
        const { label, url, active, disabled } = items[i];
        mobileControlMenuItems.push({
          label,
          href: url,
          selected: active,
          disabled,
        });
        desktopControls.push(
          <Button
            key={`navButton${i}`}
            size={size}
            color="inherit"
            disabled={disabled}
            variant={active ? 'outlined' : 'text'}
            href={url}
            label={label}
            onClick={this.handleControlClick}
          />
        );
      }
      mobileControls.push(
        <Button
          key="mobileButton"
          size={size}
          menu={mobileControlMenuItems}
          label={menuLabel}
          variant="text"
          color="inherit"
          onMenuItemClick={this.handleControlClick}
        />
      );
    }
    return (
      <div className={classes.root}>
        {/* Show for mobile */}
        <Hidden smUp implementation="js">
          <div className={classes.leftSection} />
          <div className={classes.rightSection}>
            {mobileControls.map((control, index) => {
              return (
                <div key={`control${index}`}>{control}</div>
              );
            })}
          </div>
        </Hidden>
        {/* Show for desktop */}
        <Hidden xsDown implementation="js">
          <div className={classes.leftSection} />
          <div className={classes.rightSection}>
            {desktopControls.map((control, index) => {
              return (
                <div key={`control${index}`}>{control}</div>
              );
            })}
          </div>
        </Hidden>
      </div>
    );
  }
}

TopNavigation.propTypes = TopNavigationTypes;

TopNavigation.defaultProps = {
  properties: {
    menuLabel: 'Go To',
    size: 'medium',
    items: [
      {
        url: '/',
        label: 'Home',
      },
      {
        url: '/blog',
        label: 'Blog',
      },
      {
        url: '/about',
        label: 'About',
      },
    ]
  }
};

export default withStyles(styles)(TopNavigation);
