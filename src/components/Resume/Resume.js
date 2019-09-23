import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CvComponent from './CvComponent';

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
