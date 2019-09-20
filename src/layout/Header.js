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
    color: 'gray'
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
        Lorem ipsum dolor sit amet consectetur adipiscing elit congue quam tempus 
        senectus tincidunt et imperdiet, habitant id fames turpis sollicitudin nibh 
        lectus duis magnis orci pellentesque libero curae. Curae neque nunc dignissim 
        eros leo sem vulputate habitant platea cras vestibulum conubia tempor, varius 
        torquent sollicitudin augue odio tellus lectus ornare primis inceptos magna. 
        Pellentesque nostra etiam rhoncus laoreet habitasse viverra taciti sodales luctus, 
        velit elementum quis magnis nisi facilisi natoque justo.
      </p>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
