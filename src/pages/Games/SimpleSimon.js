import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '84px',
  }
});

export function SimpleSimon(props) {
  const { classes } = props;

  function createMarkup() { 
    return {__html: '<!DOCTYPE html><html lang="en-us"><head><meta charset="utf-8"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Unity WebGL Player | Simple Simon</title><script src="UnityLoader.js"></script><script>var gameInstance = UnityLoader.instantiate("gameContainer", "Web.json");</script></head><body><div id="gameContainer" style="width: 360px; height: 600px; margin: auto"></div></body></html>'};
  }

  return (
    <div className={classes.container} dangerouslySetInnerHTML={createMarkup()}>
        
    </div>
  );
}

SimpleSimon.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSimon);
