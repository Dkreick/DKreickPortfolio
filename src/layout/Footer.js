import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    height: '300px',
    justifyContent: 'space-evenly',
    marginTop: '30px'
  },
  contactInfo: {
    
  },
  title: {
    
  },
  subtitle: {
    
  }
};

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.name}>Damian Kreick</Typography>
      <Typography variant="h5" className={classes.title}>Did you enjoy my website?</Typography>
      <Typography variant="h6" className={classes.subtitle}>
        Please consider contact me, I'm always open to hear what you are thinking
      </Typography>
      <div className={classes.contactInfo}>

      </div>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
