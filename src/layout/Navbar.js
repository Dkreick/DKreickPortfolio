import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import LinkedinIcon from './../assets/LinkedinIcon.png';

const styles = {
  root: {
    flexGrow: 1
  },
  bar: {
    alignItems: 'flex-end',
    backgroundColor: '#27ade3',
    height: '61px',
    position: 'fixed',
    top: '0px'
  },
  button: {
    color: 'white',
    width: 'max-content'
  },
  icons: {
    display: 'flex'
  },
  link: {
    color: 'white',
    margin: 'auto',
    padding: '0px',
    textDecoration: 'none'
  },
  item: {
    padding: '5px'
  },
  linkedin: {
    width: '24px'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <List className={classes.icons}>
            <Link to="/" className={classes.link}>
              <ListItem className={classes.item}>
                <Button className={classes.button}>Home</Button>
              </ListItem>
            </Link>
            <Link to="/Portfolio" className={classes.link}>
              <ListItem className={classes.item}>
                <Button className={classes.button}>My Jobs</Button>
              </ListItem>
            </Link>
            <Link to="/Resume" className={classes.link}>
              <ListItem className={classes.item}>
                <Button className={classes.button}>My CV</Button>
              </ListItem>
            </Link>
            <a href="mailto:damian.kreick@gmail.com" className={classes.link}>
              <ListItem className={classes.item}>
                <Tooltip title="Contact Me!" placement="bottom">
                  <EmailIcon />
                </Tooltip>
              </ListItem>
            </a>
            <a href="https://www.linkedin.com/in/damiankreick/" className={classes.link}>
              <ListItem className={classes.item}>
                <Tooltip title="My Linkedin!" placement="bottom">
                      <img src={LinkedinIcon} alt="Linkedin" className={classes.linkedin}/>
                </Tooltip>
              </ListItem>
            </a>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
