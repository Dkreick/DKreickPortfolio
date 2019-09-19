import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GameCard from '../components/GameCard';
import Grid from '@material-ui/core/Grid';
import apps from './../assets/data/apps.json';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '70px',
    justifyContent: 'center'
  }
});

export function Portfolio(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Grid container spacing={8}>{apps.map((api, index) => {
        return <Grid item xs={3}><GameCard data={apps[index]} key={index} /></Grid>;
      })}</Grid>
    </div>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
