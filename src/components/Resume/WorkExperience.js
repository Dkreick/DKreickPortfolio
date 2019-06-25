import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    flexWrap: 'wrap',
    marginLeft: '114px',
    marginRight: '114px',
    justifyContent: 'center'
  }
};

class WorkExperience extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        sarasa
      </div>
    );
  }
}

export default withStyles(styles)(WorkExperience);
