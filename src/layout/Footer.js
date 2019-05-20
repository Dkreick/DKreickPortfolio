import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EmailIcon from "@material-ui/icons/Email";
import CvIcon from "@material-ui/icons/SaveAlt";
import PhoneIcon from "@material-ui/icons/Phone";
import Cv from './../assets/CV.pdf';

const styles = {
  root: {
    marginLeft: '64px',
    marginTop: '50px',
  }
};

class Footer extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Contact me!" icon={<EmailIcon />} />
        <BottomNavigationAction label="Download my CV!" icon={<CvIcon />} href={Cv} download="Damian Kreick - CV"/>
        <BottomNavigationAction label="Call me!" icon={<PhoneIcon />} href='https://wa.me/541133302076'/>
      </BottomNavigation>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
