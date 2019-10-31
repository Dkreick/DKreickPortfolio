import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import {Link} from 'react-scroll';

const styles = {
  bar: {
    position: 'fixed',
    backgroundColor: '#27ade3',
    height: '61px',
    top: '0px'
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    width: 'max-content'
  },
  icons: {
    display: 'flex',
    position: 'absolute',
    right: '20px'
  },
  item: {
    padding: '5px 20px'
  },
  nav: {
    display: 'flex',
    margin: 'auto'
  }
};

function ButtonAppBar(props) {
  const {classes} = props;
  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <List className={classes.nav}>
          <Link to="header" spy={true} smooth={true} duration={500}>
            <ListItem className={classes.item}>
              <Button className={classes.button}>Home</Button>
            </ListItem>
          </Link>
          <Link to="portfolio" spy={true} smooth={true} duration={500}>
            <ListItem className={classes.item}>
              <Button className={classes.button}>Projects</Button>
            </ListItem>
          </Link>
          <Link to="resume" spy={true} smooth={true} duration={500}>
            <ListItem className={classes.item}>
              <Button className={classes.button}>Resume</Button>
            </ListItem>
          </Link>
          <Link to="footer" spy={true} smooth={true} duration={500}>
            <ListItem className={classes.item}>
              <Button className={classes.button}>Contact</Button>
            </ListItem>
          </Link>
        </List>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
