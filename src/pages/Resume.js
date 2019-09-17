import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CvComponent from '../components/Cv/CvComponent';
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarContent } from '@material-ui/core';
import FlagEs from './../assets/flag-es.jpg';
import FlagUs from './../assets/flag-us.jpg';
import CV from './../assets/CV.pdf';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '90px',
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
  }
});

export function Resume(props) {

  const { classes } = props;

  return (
    <div className={classes.container}>
      <CvComponent />
      <Snackbar
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
            <a href={CV} download="Damian Kreick CV" className={classes.link}><img src={FlagUs} alt="us" className={classes.flag}/>EN</a>
            <a href={CV} download="Damian Kreick CV" className={classes.link}><img src={FlagEs} alt="es" className={classes.flag}/>ES</a>
          </div>}
        /></Snackbar>
    </div>
  );
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);
