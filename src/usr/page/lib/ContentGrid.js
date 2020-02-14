import React from 'react';
import BoxMUI from '@material-ui/core/Box';
import GridMUI from '@material-ui/core/Grid';
import gridSpacingMap from '../utils/gridSpacingMap';

class ContentGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { spacing, alignContent, alignItems, direction, justify, wrap, cells } = this.props;
    const contentList = [];
    if (cells && cells.length > 0) {
      cells.forEach((contentCell, idx) => {
        contentList.push(
          <GridMUI
            key={`cell${idx}`}
            item={true}
            xs={12}
          >
            {contentCell}
          </GridMUI>
        );
      });
    }
    console.info('Content grid: ', contentList);
    return (
      <BoxMUI width="100%" paddingY={gridSpacingMap[spacing]}>
        <GridMUI
          container={true}
          alignContent={alignContent}
          alignItems={alignItems}
          justify={justify}
          wrap={wrap}
          direction={direction}
          spacing={gridSpacingMap[spacing]}
        >
          {contentList}
        </GridMUI>
      </BoxMUI>
    );
  }
}

export default ContentGrid;
