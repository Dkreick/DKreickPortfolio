import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedinIcon from './../assets/icons/icon-linkedin.png';
import WhatsappIcon from './../assets/icons/icon-whatsapp.png';

const styles = {
  root: {
    backgroundColor: '#27ade3',
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    marginTop: '50px',
    left: '0px',
    position: 'absolute',
    width: '100%'
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'center'
  },
  infoContainer: {
    display: 'block',
    margin: '0px 30px',
    textAlign: 'center',
    textDecoration: 'none'
  },
  infoTitle: {
    color: 'white',
    fontSize: '18px'
  },
  button: {
    color: 'white',
    width: '36px',
    height: '36px'
  },
  title: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    paddingTop: '40px'
  },
  subtitle: {
    color: 'white',
    fontSize: '20px',
    marginBottom: '60px',
    paddingTop: '10px'
  }
};

function Footer(props) {
  const {classes} = props;

  return (
    <div className={classes.root} id="footer">
      <Typography variant="h5" className={classes.title}>
        Did you enjoy my website?
      </Typography>
      <Typography variant="h6" className={classes.subtitle}>
        Please consider contact me, I'm always open to hear what you are
        thinking!
      </Typography>
      <div className={classes.contactInfo}>
        <div className={classes.infoContainer}>
          <PhoneIcon className={classes.button} />
          <Typography variant="h6" className={classes.infoTitle}>
            +54 911-3330-2076
          </Typography>
        </div>
        <a
          href="https://wa.me/541133302076"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.infoContainer}
        >
          <EmailIcon className={classes.button} />
          <Typography variant="h6" className={classes.infoTitle}>
            damian.kreick@gmail.com
          </Typography>
        </a>
        <a
          href="https://www.linkedin.com/in/damiankreick"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.infoContainer}
        >
          <img src={LinkedinIcon} alt="Linkedin" className={classes.button} />
          <Typography variant="h6" className={classes.infoTitle}>
            in/damiankreick
          </Typography>
        </a>
        <a
          href="https://wa.me/541133302076"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.infoContainer}
        >
          <img src={WhatsappIcon} alt="Whatsapp" className={classes.button} />
          <Typography variant="h6" className={classes.infoTitle}>
            Whatsapp Me!
          </Typography>
        </a>
      </div>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
