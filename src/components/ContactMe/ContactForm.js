import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    borderRadius: '10px',
    backgroundColor: 'white',
    margin: 'auto',
    marginBottom: '60px',
    height: '400px',
    width: '300px'
  }
};

function ContactForm(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

    </div>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactForm);
