import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import HeaderActions from './HeaderActions';
import WorkExperience from './WorkExperience';

const styles = {
  card: {
    flexWrap: 'wrap',
    marginLeft: '114px',
    marginRight: '114px',
    justifyContent: 'center'
  }
};

class Resume extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <Header />
        <HeaderActions />
        <Grid item xs={6}>
          <WorkExperience />
        </Grid>
      </Card>
    );
  }
}

export default withStyles(styles)(Resume);
