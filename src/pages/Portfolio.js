import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GameCard from '../components/GameCard';
import ArtCard from '../components/ArtCard';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import apps from './../assets/data/apps.json';
import art from './../assets/data/art.json';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '70px',
    justifyContent: 'center'
  },
  gridList: {
    flexWrap: 'nowrap',
    height: '200px',
    transform: 'translateZ(0)'
  }
});

export function Portfolio(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Grid container spacing={8}>{apps.map((api, index) => {
        return <Grid item xs={3}><GameCard data={apps[index]} key={index} /></Grid>;
      })}</Grid>
      <GridList className={classes.gridList} cols={2.5}>
        {art.map((api, index) => {
          return <ArtCard data={art[index]} key={index} />;
        })}
      </GridList>
    </div>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
