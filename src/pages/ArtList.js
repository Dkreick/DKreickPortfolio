import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ArtCard from '../components/ArtCard';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '84px',
  }
});

export function GameList(props) {

  const state = {
    api: [
      {
        name: 'SomeName',
        imageLink: 'SomeLink',
      }
    ]
  };
  const { classes } = props;

  return (
    <div className={classes.container}>
    {state.api.map((api, index) => {
    return <ArtCard data={state.api[index]} key={index}/>;
  })}
    </div>
  );
}

GameList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameList);
