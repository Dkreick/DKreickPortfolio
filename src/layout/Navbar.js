import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import EmailDialog from './../components/EmailDialog';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1
  },
  bar: {
    alignItems: "flex-end",
    backgroundColor: "#27ade3",
    height: "60px",
    position: "fixed",
    top: "0px",
  },
  button: {
    color: "white",
    width: "max-content"
  },
  icons: {
    display: "flex"
  },
  link: {
    textDecoration: "none"
  },
  icon: {
    paddingLeft: 10,
    backgroundColor: '#27ade3'
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <List className={classes.icons}>
          <Link to='/' className={classes.link}>
            <ListItem className={classes.icon}>
              <Button className={classes.button}>Home</Button>
            </ListItem>
          </Link>
          <Link to='/Portfolio' className={classes.link}>
            <ListItem className={classes.icon}>
              <Button className={classes.button}>My Jobs</Button>
            </ListItem>
          </Link>
          <Link to='/Resume' className={classes.link}>
            <ListItem className={classes.icon}>
              <Button className={classes.button}>My CV</Button>
            </ListItem>
          </Link>
          <ListItem className={classes.icon}>
            <Tooltip title='Contact Me!' placement='bottom'>
              <EmailDialog />
            </Tooltip>
          </ListItem>
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
