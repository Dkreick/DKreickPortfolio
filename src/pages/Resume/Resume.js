import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CvComponent from './CvComponent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = theme => ({
  container: {
    marginTop: '90px',
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
  title: {
    marginBottom: '35px',
  },
  divider: {
    marginBottom: '35px',
    width: '100%',
  },
});

export function Resume(props) {
  const { classes } = props;

  return (
    <div className={classes.container} id="resume">
      <Divider variant="middle" className={classes.divider} />
      <ScrollAnimation
        animateIn="bounceInRight"
        animateOnce={true}
        duration={1.5}
      >
        <Typography variant="h3" className={classes.title}>
          Resume
        </Typography>
      </ScrollAnimation>
      <CvComponent />
    </div>
  );
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);
