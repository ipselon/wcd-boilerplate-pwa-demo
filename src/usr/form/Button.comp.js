import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';
import MenuItemMUI from '@material-ui/core/MenuItem';
import MenuMUI from '@material-ui/core/Menu';
import pickWithValues from './utils/pickWithValues';
import ButtonCircularProgress from './lib/ButtonCircularProgress';
import { ButtonTypes } from './Button.props';

const useStyles = makeStyles(theme => ({
  button: {
    position: 'relative',
  },
}));

const Button = props => {
  const {
    className,
    label,
    color,
    variant,
    disabled,
    endIcon,
    startIcon,
    size,
    fullWidth,
    href,
    loading,
    menu,
    byId
  } = props;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleButtonClick = e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    props.onClick();
  };

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (id, href) => e => {
    setAnchorEl(null);
    props.onMenuItemClick({id, href});
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  let menuItems = [];
  if (menu && menu.length > 0) {
    let disabledById = {};
    let selectedById = {};
    if (byId && byId.disabledMenuIds && byId.disabledMenuIds.length > 0) {
      disabledById = byId.disabledMenuIds.reduce(
        (acc, id) => {acc[id] = true; return acc}, disabledById
      );
    }
    if (byId && byId.selectedMenuIds && byId.selectedMenuIds.length > 0) {
      selectedById = byId.selectedMenuIds.reduce(
        (acc, id) => {acc[id] = true; return acc}, selectedById
      );
    }
    for (let i = 0; i < menu.length; i++) {
      menuItems.push(
        <MenuItemMUI
          key={`menuItem${i}`}
          disabled={disabledById[menu[i].id] || menu[i].disabled}
          selected={selectedById[menu[i].id] || menu[i].selected}
          onClick={handleMenuItemClick(menu[i].id, menu[i].href)}
        >
          {menu[i].label}
        </MenuItemMUI>
      )
    }
  }

  const muiButtonProps = pickWithValues({ variant, color, disabled, size, fullWidth, href });
  if (startIcon) {
    muiButtonProps.startIcon = startIcon;
  }
  if (endIcon) {
    muiButtonProps.endIcon = endIcon;
  }
  if (loading) {
    muiButtonProps.disabled = true;
  }
  const buttonElement = (
    <ButtonMUI
      className={`${className} ${classes.button}`}
      {...muiButtonProps}
      onClick={menuItems.length > 0 ? handleOpenMenu : handleButtonClick}
    >
      {label}
      {loading && (
        <ButtonCircularProgress size={size} />
      )}
    </ButtonMUI>
  );
  if (menuItems.length > 0) {
    return (
      <React.Fragment>
        {buttonElement}
        <MenuMUI
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {menuItems}
        </MenuMUI>
      </React.Fragment>
    );
  } else {
    return buttonElement;
  }
};

Button.propTypes = ButtonTypes;

Button.defaultProps = {
  label: 'Button',
  variant: 'contained',
  onClick: () => {
    console.info('Button.onClick is not set');
  }
};

export default Button;
