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
import Languages from './Languages';
import Hobbies from './Hobbies';
import Button from '@material-ui/core/Button';
import Cv from './../../assets/Cv.pdf';

const styles = {
  card: {
    border: 'solid 1px black',
    boxShadow: '-10px 10px 5px 0px rgba(0,0,0,0.75)',
    maxWidth: '1280px',
    margin: 'auto',
  },
  download: {
    backgroundColor: '#27ade3',
    marginTop: '50px',
    textTransform: 'none',
  },
  link: {
    color: 'white',
    display: 'contents',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  grid: {
    padding: '20px 40px',
  },
};

class CvComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <Header />
          <HeaderActions />
          <Grid container spacing={8} className={classes.grid}>
            <Grid item xs={6}>
              <WorkExperience />
              <ValuableSkills />
            </Grid>
            <Grid item xs={6} className={classes.grid}>
              <Education />
              <Courses />
              <Languages />
              <Hobbies />
            </Grid>
          </Grid>
        </Card>
        <Button className={classes.download}>
          <a href={Cv} download="Damian Kreick CV" className={classes.link}>
            <p className={classes.link}>
              Click Here to download a PDF Version!
            </p>
          </a>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(CvComponent);
