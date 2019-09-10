import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from 'react-router-dom';
import EmailDialog from './../components/EmailDialog';
import ListItem from '@material-ui/core/ListItem';
import AvatarIcon from '@material-ui/icons/AccountCircle';
import PortfolioIcon from '@material-ui/icons/Work';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  root: {
    flexGrow: 1
  },
  button: {
    margin: "10px",
    color: "white",
    fontWeight: "bold"
  },
  bar: {
    backgroundColor: "#27ade3"
  },
  grow: {
    color: "white",
    flexGrow: 1,
    fontWeight: "bold"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  icon: {
    paddingLeft: 10,
    backgroundColor: '#27ade3',
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Link to='/AboutMe'>
            <ListItem className={classes.icon}>
              <Tooltip title='About Me!' placement='down'>
                <IconButton><AvatarIcon /></IconButton>
              </Tooltip>
            </ListItem>
          </Link>
          <Link to='/Portfolio'>
            <ListItem className={classes.icon}>
              <Tooltip title='My Portfolio!' placement='down'>
                <IconButton><PortfolioIcon /></IconButton>
              </Tooltip>
            </ListItem>
          </Link>
          <ListItem className={classes.icon}>
            <Tooltip title='Contact Me!' placement='down'>
              <EmailDialog />
            </Tooltip>
          </ListItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
