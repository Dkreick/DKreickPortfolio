import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedinIcon from './../assets/icons/icon-linkedin.png';
import WhatsappIcon from './../assets/icons/icon-whatsapp.png';
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from '@material-ui/core/Grid';
import ContactForm from '../components/ContactMe/ContactForm';

const styles = {
  root: {
    backgroundColor: '#27ade3',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '70px',
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
  const { classes } = props;

  return (
    <div className={classes.root} id="footer">
      <ScrollAnimation
        animateIn="bounceInUp"
        animateOnce={true}
        offset={0}
        duration={1.5}
      >
        <Typography variant="h5" className={classes.title}>
          Do you have any question?
        </Typography>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="bounceInUp"
        animateOnce={true}
        delay={1000}
        offset={0}
        duration={1.5}
      >
        <Typography variant="h6" className={classes.subtitle}>
          I will try to answer as soon as possible.
        </Typography>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="bounceInUp"
        animateOnce={true}
        delay={2000}
        offset={0}
        duration={1.5}
      >
        <ContactForm />
        <Grid container spacing={8}>
          <Grid item xs={6} sm={3}>
            <PhoneIcon className={classes.button} />
            <Typography variant="h6" className={classes.infoTitle}>
              +54 911-3330-2076
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
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
          </Grid>
          <Grid item xs={6} sm={3}>
            <a
              href="https://www.linkedin.com/in/damiankreick"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.infoContainer}
            >
              <img
                src={LinkedinIcon}
                alt="Linkedin"
                className={classes.button}
              />
              <Typography variant="h6" className={classes.infoTitle}>
                in/damiankreick
              </Typography>
            </a>
          </Grid>
          <Grid item xs={6} sm={3}>
            <a
              href="https://wa.me/541133302076"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.infoContainer}
            >
              <img
                src={WhatsappIcon}
                alt="Whatsapp"
                className={classes.button}
              />
              <Typography variant="h6" className={classes.infoTitle}>
                Whatsapp Me!
              </Typography>
            </a>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
