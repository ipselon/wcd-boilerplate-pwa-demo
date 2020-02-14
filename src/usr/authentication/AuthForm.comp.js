import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { AuthFormTypes } from './props/AuthForm.props';
import ContentGrid from './lib/ContentGrid';

const styles = theme => ({
  root: {
    display: 'flex',

  }
});

/**
 * Replace this comment with a valuable description.
 */
class AuthForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const properties = this.props.properties || {};
    const form = properties.form || {};
    const formLayout = form.layout || {};
    const formLayoutSpacing = formLayout.spacing;
    const contentCells = [
      <div>
        <h1>AuthForm</h1>
      </div>
    ];
    return (
      <Paper>
          <ContentGrid
            alignContent="flex-start"
            alignItems="stretch"
            spacing={formLayoutSpacing}
            cells={contentCells}
          />
      </Paper>
    );
  }
}

AuthForm.propTypes = AuthFormTypes;

AuthForm.defaultProps = {
};

export default withStyles(styles)(AuthForm);
