import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import HeaderActions from './HeaderActions';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Courses from './Courses';
import ValuableSkills from './ValuableSkills';

const styles = {
  card: {
    flexWrap: 'wrap',
    marginLeft: '114px',
    marginRight: '114px',
    justifyContent: 'center'
  }
};

class CvComponent extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <Header />
        <HeaderActions />
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <WorkExperience />
            <ValuableSkills />
          </Grid>
          <Grid item xs={6}>
            <Education />
            <Courses />
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(styles)(CvComponent);
