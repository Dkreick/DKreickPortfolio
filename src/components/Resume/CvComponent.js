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
import FlagEs from './../../assets/icons/flag-es.jpg';
import FlagUs from './../../assets/icons/flag-us.jpg';
import CV from './../../assets/CV.pdf';

const styles = {
  card: {
    boxShadow: '-10px 10px 5px 0px rgba(0,0,0,0.75)',
    flexWrap: 'wrap',
    marginLeft: '114px',
    marginRight: '114px',
    justifyContent: 'center'
  },
  download: {
    backgroundColor: '#27ade3'
  },
  link: {
    color: 'white',
    display: 'contents',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  flag: {
    borderRadius: '5px',
    margin: '0px 10px',
    verticalAlign: 'middle',
    width: '32px'
  },
  snackbar: {
    margin: 'auto',
    left: '0px',
    top: '30px',
    position: 'relative',
    width: 'fit-content',
    zIndex: 'auto'
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
            <Languages />
            <Hobbies />
            <Snackbar className={classes.snackbar}
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
                    <a href={CV} download="Damian Kreick CV" className={classes.link}><img src={FlagUs} alt="us" className={classes.flag} />EN</a>
                    <a href={CV} download="Damian Kreick CV" className={classes.link}><img src={FlagEs} alt="es" className={classes.flag} />ES</a>
                  </div>}
              /></Snackbar>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(styles)(CvComponent);
