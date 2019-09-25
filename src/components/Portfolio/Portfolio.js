import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GameCard from './GameCard';
import ArtCard from './ArtCard';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import apps from './../../assets/data/apps.json';
import art from './../../assets/data/art.json';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '70px',
    justifyContent: 'center'
  },
  gridList: {
    flexWrap: 'nowrap',
    height: '250px',
    overflowY: 'hidden',
    paddingTop: '60px'
  },
  title: {
    marginBottom: '30px'
  },
  scroll: {
    width: '25%'
  }
});

export function Portfolio(props) {
  const {classes} = props;

  return (
    <div className={classes.container} id="portfolio">
      <ScrollAnimation
        animateIn="bounceInLeft"
        animateOnce={true}
        duration={1.5}
      >
        <Typography variant="h3" className={classes.title}>
          Projects
        </Typography>
      </ScrollAnimation>
      <Grid container spacing={8}>
        {apps.map((api, index) => {
          return (
            <ScrollAnimation
              animateIn="fadeIn"
              duration={index + 1}
              animateOnce={true}
              className={classes.scroll}
            >
              <Grid item>
                <GameCard data={apps[index]} key={index} />
              </Grid>
            </ScrollAnimation>
          );
        })}
      </Grid>
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