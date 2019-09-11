import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CvComponent from '../components/Cv/CvComponent';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '80px',
    justifyContent: 'center',
  }
});

export function Resume(props) {

  const { classes } = props;

  return (
    <div className={classes.container}>
      <CvComponent/>
    </div>
  );
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);
