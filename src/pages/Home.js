import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Resume from '../components/Cv/CvComponent';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '84px',
  }
});

export function Home(props) {

  const { classes } = props;

  return (
    <div className={classes.container}>
      akgejbaeoigbue
      
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
