import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import LinkedinIcon from './../../assets/LinkedinIcon.png';
import CvIcon from '@material-ui/icons/SaveAlt';
import Cv from './../../assets/CV.pdf';
import Chip from '@material-ui/core/Chip';

const styles = {
  root: {
    marginTop: '20px'
  },
  chip: {
    margin: '10px',
    height: '40px',
    padding: '5px',
    backgroundColor: '#eeeeee'
  },
  button: {
    color: '#27ade3',
    padding: '10px'
  }
};

class HeaderActions extends React.Component {

  render() {
    const { classes } = this.props;

    function handleMailClick(url) {
      window.open('mailto:damian.kreick@gmail.com', '_blank');
    }
    function handlePhoneClick(url) {
      window.open('https://wa.me/541133302076', '_blank');
    }
    function handleLinkedinClick(url) {
      window.open('https://www.linkedin.com/in/damiankreick', '_blank');
    }

    return (
      <div className={classes.root}>
        <Chip
          avatar={<CalendarIcon className={classes.button} />}
          label='29/06/1994'
          className={classes.chip}
        />
        <Chip
          avatar={<EmailIcon className={classes.button} />}
          label='damian.kreick@gmail.com'
          className={classes.chip}
          onClick={handleMailClick}
        />
        <Chip
          avatar={<PhoneIcon className={classes.button} />}
          label='(+54) 11-3330-2076'
          className={classes.chip}
          onClick={handlePhoneClick}
        />
        <Chip
          avatar={<img src={LinkedinIcon} />}
          label='Linkedin'
          className={classes.chip}
          onClick={handleLinkedinClick}
        />
      </div>
    );
  }
}

export default withStyles(styles)(HeaderActions);
