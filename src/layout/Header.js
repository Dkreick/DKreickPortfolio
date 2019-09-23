import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import avatar from './../assets/images/avatar.jpg';
import Divider from '@material-ui/core/Divider';

const styles = {
  root: {
    flexGrow: 1
  },
  avatar: {
    boxShadow: '0px 0px 20px 5px rgba(0,0,0,0.75)',
    clipPath: 'circle(50% at 50% 50%)',
    color: 'white',
    width: '300px'
  },
  name: {
    marginTop: '30px'
  },
  divider: {
    margin: '15px'
  },
  charge: {
    color: 'gray',
    marginTop: '35px'
  },
  info: {
    color: 'gray',
    fontSize: '18px',
    fontStyle: 'cursive',
    fontWeight: 'bold',
    padding : '50px'
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root} id="header">
      <img src={avatar} alt="Avatar" className={classes.avatar} />
      <Typography variant="h3" className={classes.name}>DAMIAN KREICK</Typography>
      <Divider variant="middle" className={classes.divider} />
      <Typography variant="h5" className={classes.charge}>
        Web & Game Developer
      </Typography>
      <p className={classes.info}>
        I have been in the world of coding since I was 14. Now more than 10 years later I am still trying
        to improve myself. Resilience, comprehension and knowledge are the three words who make my work days
        fructiferous. In this portfolio you will find all of my projects, no mattter if they are finished or not,
        even this web is a project itself made with React. So please be my guest and keep scrolling!.
      </p>
      <Divider variant="middle" className={classes.divider} />
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);