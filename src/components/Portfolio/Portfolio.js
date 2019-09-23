import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GameCard from './GameCard';
import ArtCard from './ArtCard';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import apps from './../../assets/data/apps.json';
import art from './../../assets/data/art.json';
import Typography from '@material-ui/core/Typography';
import { Animated } from "react-animated-css";

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
  },
  title: {
    marginBottom: '30px'
  },
});

export function Portfolio(props) {
  const { classes } = props;
  return (
    <div className={classes.container} id="portfolio">
      <Animated animationIn="bounceInLeft">
        <Typography variant="h3" className={classes.title}>Projects</Typography>
      </Animated>
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
