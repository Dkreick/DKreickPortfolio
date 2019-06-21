import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BannerActions from './BannerActions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '84px',
  }
});


export function BannerImage(props) {

  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./../../assets/BannerImage.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            Damian Kreick
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I'm a sefl-confident programmer, enthusiast of good coding practises, who listens attentively and takes charge of high responsability tasks
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <BannerActions />
      </CardActions>
    </Card>
  );
}

BannerImage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BannerImage);