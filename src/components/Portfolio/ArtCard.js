import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 'inherit',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '200px',
    backgroundColor: theme.palette.background.paper
  },
  image: {
    marginLeft: '10px',
    maxWidth: '90%',
    maxHeight: '50%',
    objectFit: 'contain'
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
});

class ArtCard extends React.Component {
  render(props) {
    const {classes} = this.props;
    return (
      <GridListTile className={classes.root} key={this.props.data.name}>
        <img
          src={this.props.data.image}
          alt={this.props.data.name}
          className={classes.image}
        />
        <GridListTileBar
          title={this.props.data.name}
          classes={{
            root: classes.titleBar,
            title: classes.title
          }}
        />
      </GridListTile>
    );
  }
}

ArtCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArtCard);
