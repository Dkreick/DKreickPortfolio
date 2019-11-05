import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SourceCodeIcon from '@material-ui/icons/Code';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  card: {
    border: 'solid 1px black',
    boxShadow: '-5px 5px 5px 0px rgba(0,0,0,0.75)',
    margin: 20,
    maxWidth: 400,
    height: 480,
    position: 'relative',
  },
  header: {
    height: '50px',
  },
  content: {
    height: '80px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain',
    backgroundColor: '#D9DFE1',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  titleDescription: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  actions: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: '#27ade3',
  },
  button: {
    color: '#27ade3',
  },
  icon: {
    width: 'inherit',
  },
  chip: {
    backgroundColor: '#27ade3',
    color: 'white',
    fontWeight: 'bold',
  },
});

class GameCard extends React.Component {
  openUrl(url) {
    window.open(url, '_blank');
  }

  render(props) {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img
                src={this.props.data.icon}
                alt={this.props.data.name}
                className={classes.icon}
              />
            </Avatar>
          }
          title={this.props.data.name}
          subheader={this.props.data.subtitle}
          className={classes.header}
        />
        <CardMedia
          className={classes.media}
          image={this.props.data.snapshot}
          title={this.props.data.name}
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" className={classes.titleDescription}>
            What I've learned from this project:
          </Typography>
          <Typography component="p">{this.props.data.description}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Chip label={this.props.data.mainLanguage} className={classes.chip} />
          <IconButton
            onClick={() => this.openUrl(this.props.data.linkToSourceCode)}
          >
            <SourceCodeIcon className={classes.button} />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameCard);
