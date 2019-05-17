import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import AvatarIcon from '@material-ui/icons/AccountCircle';
import PortfolioIcon from '@material-ui/icons/Work';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import EmailDialog from './../components/EmailDialog';
import { Link } from "react-router-dom";

const drawerWidth = 64;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#27ade3',
  },
  icon: {
    paddingLeft: 10,
    backgroundColor: '#27ade3',
  },
  toolbar: theme.mixins.toolbar,
});

function Sidebar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
        <Link to="/AboutMe">
          <ListItem className={classes.icon}>
            <Tooltip title="About Me" placement="right">
              <IconButton><AvatarIcon /></IconButton>
            </Tooltip>
          </ListItem>
          </Link>
          <Link to="/ContentList">
          <ListItem className={classes.icon}>
            <Tooltip title="My Portfolio" placement="right">
              <IconButton><PortfolioIcon /></IconButton>
            </Tooltip>
          </ListItem>
          </Link>
          <ListItem className={classes.icon}>
              <EmailDialog/>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
