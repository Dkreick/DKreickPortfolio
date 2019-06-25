import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Resume from '../components/Resume/Resume';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '84px',
  }
});

export function AboutMe(props) {

  const { classes } = props;

  return (
    <div className={classes.container}>
      <Resume/>
    </div>
  );
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutMe);
