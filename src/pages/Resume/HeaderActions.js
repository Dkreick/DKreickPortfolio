import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import Chip from '@material-ui/core/Chip';
import LinkedinIcon from './../../assets/icons/icon-linkedinCv.png';

const styles = {
  root: {
    marginTop: '20px'
  },
  chip: {
    backgroundColor: '#eeeeee',
    height: '40px',
    margin: '10px',
    padding: '5px'
  },
  button: {
    color: '#27ade3',
    padding: '10px'
  }
};

class HeaderActions extends React.Component {
  render() {
    const {classes} = this.props;

    function handleMailClick() {
      window.open('mailto:damian.kreick@gmail.com', '_blank');
    }
    function handlePhoneClick() {
      window.open('https://wa.me/541133302076', '_blank');
    }
    function handleLinkedinClick() {
      window.open('https://www.linkedin.com/in/damiankreick', '_blank');
    }

    return (
      <div className={classes.root}>
        <Chip
          avatar={<CalendarIcon className={classes.button} />}
          label="DoB: 29/06/1994"
          className={classes.chip}
        />
        <Chip
          avatar={<EmailIcon className={classes.button} />}
          label="damian.kreick@gmail.com"
          className={classes.chip}
          onClick={handleMailClick}
        />
        <Chip
          avatar={<PhoneIcon className={classes.button} />}
          label="(+54) 11-3330-2076"
          className={classes.chip}
          onClick={handlePhoneClick}
        />
        <Chip
          avatar={<img src={LinkedinIcon} alt="" />}
          label="My Linkedin"
          className={classes.chip}
          onClick={handleLinkedinClick}
        />
      </div>
    );
  }
}

export default withStyles(styles)(HeaderActions);
