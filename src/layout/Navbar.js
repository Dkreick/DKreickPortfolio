import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll';

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
    fontWeight: 'bold',
    width: 'max-content'
  },
  icons: {
    display: 'flex',
    position: 'absolute',
    right: '20px'
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
  nav: {
    display: 'flex',
    margin: 'auto'
  },
  toolbar: {
    width: '-webkit-fill-available'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          <List className={classes.nav}>
            <Link to="header" spy={true} smooth={true} duration={500} className={classes.link}>
              <ListItem className={classes.item}>
                <Button className={classes.button}>Home</Button>
              </ListItem>
            </Link>
            <Link to="portfolio" spy={true} smooth={true} duration={500} className={classes.link}>
              <ListItem className={classes.item}>
                <Button className={classes.button}>Projects</Button>
              </ListItem>
            </Link>
            <Link to="resume" spy={true} smooth={true} duration={500} className={classes.link}>
              <ListItem className={classes.item}>
                <Button className={classes.button}>Resume</Button>
              </ListItem>
            </Link>
            <Link to="footer" spy={true} smooth={true} duration={500} className={classes.link}>
              <ListItem className={classes.item}>
                <Button className={classes.button}>Contact</Button>
              </ListItem>
            </Link>
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
