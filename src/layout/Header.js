import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import avatar from './../assets/images/avatar.jpg';
import Divider from '@material-ui/core/Divider';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = {
  root: {
    flexGrow: 1,
    paddingTop: '100px'
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
    padding: '50px'
  }
};

function Header(props) {
  const {classes} = props;
  return (
    <div className={classes.root} id="header">
      <ScrollAnimation
        animateIn="zoomIn"
        animateOnce={true}
        offset={0}
        duration={2}
      >
        <img src={avatar} alt="Avatar" className={classes.avatar} />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInLeft"
        animateOnce={true}
        delay={500}
        duration={2}
      >
        <Typography variant="h3" className={classes.name}>
          DAMIAN KREICK
        </Typography>
      </ScrollAnimation>
      <Divider variant="middle" className={classes.divider} />
      <ScrollAnimation
        animateIn="fadeInRight"
        animateOnce={true}
        delay={1000}
        duration={2}
      >
        <Typography variant="h5" className={classes.charge}>
          Web & Game Developer
        </Typography>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="flipInX"
        animateOnce={true}
        duration={3}
        offset={550}
      >
        <p className={classes.info}>
          I have been in the world of coding since I was 14. Now more than 10
          years later I am still trying to improve myself. Resilience,
          comprehension and knowledge are the three words who make my work days
          fructiferous. In this portfolio you will find all of my projects, no
          mattter if they are finished or not, even this web is a project itself
          made with React. So please be my guest and keep scrolling!.
        </p>
      </ScrollAnimation>
      <Divider variant="middle" className={classes.divider} />
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
