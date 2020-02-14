import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TypographyMUI from '@material-ui/core/Typography';
import BreadcrumbsMUI from '@material-ui/core/Breadcrumbs';
import LinkMUI from '@material-ui/core/Link';
import pickWithValues from './utils/pickWithValues';
import { BreadcrumbsWithLinksTypes } from './BreadcrumbsWithLinks.props';

const styles = theme => ({
  itemTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  itemIconWrapper: {
    marginRight: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

/**
 * Breadcrumbs allow users to make selections from a range of values.
 */
class BreadcrumbsWithLinks extends React.Component {

  handleClick = (item) => e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onClick(item);
  };

  render() {
    const {
      classes,
      links,
      icons,
      separatorText,
      separatorNode,
      itemsAfterCollapse,
      itemsBeforeCollapse,
      maxItems
    } = this.props;
    const linksElements = [];
    if (links && links.length > 0) {
      let itemIcon;
      for (let i = 0; i < links.length; i++) {
        const { disabled, id, href, color, underline, variant, label, iconIndex } = links[i];
        itemIcon = null;
        if (iconIndex >= 0 && icons && icons[iconIndex]) {
          itemIcon = icons[iconIndex];
        }
        if (!disabled && href) {
          linksElements.push(
            <LinkMUI
              key={`breadcrumbsLink${id}${i}`}
              {...pickWithValues({href, color, underline, variant})}
              onClick={this.handleClick(links[i])}
            >
              {itemIcon
                ? (
                  <div className={classes.itemTextWrapper}>
                    <div className={classes.itemIconWrapper}>
                      {itemIcon}
                    </div>
                    {label}
                  </div>
                )
                : label
              }
            </LinkMUI>
          )
        } else {
          linksElements.push(
            <TypographyMUI
              key={`breadcrumbsDisabledLink${id}${i}`}
              {...pickWithValues({ color, variant })}
            >
              {itemIcon
                ? (
                  <div className={classes.itemTextWrapper}>
                    <div className={classes.itemIconWrapper}>
                      {itemIcon}
                    </div>
                    {label}
                  </div>
                )
                : label
              }
            </TypographyMUI>
          );
        }
      }
    }
    let separator = '/';
    if (separatorText && separatorText.length > 0) {
      separator = separatorText;
    } else if (separatorNode) {
      separator = separatorNode;
    }
    return (
      <BreadcrumbsMUI
        aria-label="breadcrumb"
        separator={separator}
        {...pickWithValues({maxItems, itemsBeforeCollapse, itemsAfterCollapse})}
      >
        {linksElements}
      </BreadcrumbsMUI>
    );
  }
}

BreadcrumbsWithLinks.propTypes = BreadcrumbsWithLinksTypes;

BreadcrumbsWithLinks.defaultProps = {
  itemsAfterCollapse: 1,
  itemsBeforeCollapse: 1,
  maxItems: 8,
  links: [
    {id: '0001', label: 'Path 1', href: '#', variant: 'inherit'},
    {id: '0002', label: 'Path 2', href: '#', variant: 'inherit'},
    {id: '0003', label: 'Path 3', href: '#', variant: 'inherit'},
  ],
  onClick: () => {
    console.info('BreadcrumbsWithLinks.onClick is not set');
  }
};

export default withStyles(styles)(BreadcrumbsWithLinks);
