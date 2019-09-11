import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import avatar from './../assets/avatar.jpg';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '150px'
  },
  avatar: {
    color: 'white',
    width: '300px',
    clipPath: 'circle(50% at 50% 50%)'
  }
});

export function Home(props) {

  const { classes } = props;

  return (
    <div className={classes.container}>
      <img src={avatar} alt="Avatar" className={classes.avatar}/>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
