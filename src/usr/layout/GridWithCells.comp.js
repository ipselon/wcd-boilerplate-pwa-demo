import React from 'react';
import GridMUI from '@material-ui/core/Grid';
import gridSpacingMap from './utils/gridSpacingMap';
import gridMap from './utils/gridMap';
import { GridWithCellsTypes } from './GridWithCells.props';

class GridWithCells extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { grid, cells } = this.props;
    const { spacing, alignContent, alignItems, direction, justify, wrap } = grid;
    const contentList = [];
    if (cells && cells.length > 0) {
      cells.forEach((contentCellItem, idx) => {
        const { child, cell } = contentCellItem;
        const { lg, md, sm, xl, xs, zeroMinWidth } = cell;
        contentList.push(
          <GridMUI
            key={`cell${idx}`}
            item={true}
            lg={gridMap[lg]}
            md={gridMap[md]}
            sm={gridMap[sm]}
            xl={gridMap[xl]}
            xs={gridMap[xs]}
            zeroMinWidth={zeroMinWidth}
          >
            {child}
          </GridMUI>
        );
      });
    }
    return (
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
    );
  }
}

GridWithCells.propTypes = GridWithCellsTypes;

GridWithCells.defaultProps = {
  doNotUseInFlows: true,
  grid: {
    spacing: '0',
    alignContent: 'stretch',
    alignItems: 'stretch',
    direction: 'row',
    justify: 'flex-start',
    wrap: 'nowrap',
  },
  cells: [
    {
      child: <span />,
      cell: {
        lg: 'false',
        md: 'false',
        sm: 'false',
        xl: 'false',
        xs: 'auto',
        zeroMinWidth: false,
      }
    }
  ],
};

export default GridWithCells;
