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
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarContent } from '@material-ui/core';
import FlagUs from './../../assets/icons/flag-us.jpg';
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
  },
  link: {
    color: 'white',
    display: 'contents',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  flag: {
    borderRadius: '5px',
    margin: '0px 10px',
    verticalAlign: 'middle',
    width: '32px',
  },
  grid: {
    padding: '20px 40px',
  },
  snackbar: {
    margin: 'auto',
    left: '0px',
    top: '30px',
    position: 'relative',
    width: 'fit-content',
    zIndex: 'auto',
  },
};

class CvComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
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
            <Snackbar
              className={classes.snackbar}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={true}
            >
              <SnackbarContent
                className={classes.download}
                message={
                  <div>
                    <p className={classes.link}>Download my CV here: </p>
                    <a
                      href={Cv}
                      download="Damian Kreick CV"
                      className={classes.link}
                    >
                      <img src={FlagUs} alt="us" className={classes.flag} />
                      English version!
                    </a>
                  </div>
                }
              />
            </Snackbar>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(styles)(CvComponent);
