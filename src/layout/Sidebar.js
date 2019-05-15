import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AvatarIcon from '@material-ui/icons/AccountCircle';
import GameIcon from '@material-ui/icons/VideogameAsset';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';

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
          <ListItem className={classes.icon}>
            <IconButton><AvatarIcon /></IconButton>
          </ListItem>
          <ListItem className={classes.icon}>
            <IconButton><GameIcon /></IconButton>
          </ListItem>
          <ListItem className={classes.icon}>
            <IconButton><EmailIcon /></IconButton>
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
