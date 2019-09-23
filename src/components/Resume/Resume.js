import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CvComponent from './CvComponent';
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarContent } from '@material-ui/core';
import FlagEs from './../../assets/icons/flag-es.jpg';
import FlagUs from './../../assets/icons/flag-us.jpg';
import CV from './../../assets/CV.pdf';

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
    <div className={classes.container} id="resume">
      <CvComponent />
    </div>
  );
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);
