import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import avatar from './../assets/avatar.jpg';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  container: {
    flexWrap: 'wrap',
    marginTop: '150px'
  },
  avatar: {
    color: 'white',
    width: '300px',
    clipPath: 'circle(50% at 50% 50%)'
  },
  name: {
    marginTop: '30px'
  },
  divider: {
    margin: '15px'
  },
  charge: {
    color: 'gray'
  },
});

export function Home(props) {

  const { classes } = props;

  return (
    <div className={classes.container}>
      <img src={avatar} alt="Avatar" className={classes.avatar} />
      <Typography variant="h3" className={classes.name}>DAMIAN KREICK</Typography>
      <Divider variant="middle" className={classes.divider}/>
      <Typography variant="h5" className={classes.charge}>
        Web & Game Developer
        </Typography>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
