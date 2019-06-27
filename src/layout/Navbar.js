import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import EmailDialog from './../components/EmailDialog';

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
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.grow}>
            DKREICK PORTFOLIO
          </Typography>
          <Link to='/ContentList'>
          <Button href="#text-buttons" className={classes.button}>
            My Portfolio
          </Button>
          </Link>
          <Link to='/Resume'>
          <Button href="#text-buttons" className={classes.button}>
            My Resume
          </Button>
          </Link>
          <EmailDialog/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
