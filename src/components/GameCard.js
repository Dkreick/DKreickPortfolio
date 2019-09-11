import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SourceCodeIcon from "@material-ui/icons/Code";
import InfoIcon from "@material-ui/icons/Info";
import DownLoadIcon from "@material-ui/icons/CloudDownload";

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  actions: {
    display: "inline-flex",
    itemSpacing: "20px"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#27ade3"
  },
  button: {
    color: "#27ade3"
  }
});

class GameCard extends React.Component {
  state = { expanded: false };

  render(props) {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img src={this.props.data.icon} alt={this.props.data.name} />
            </Avatar>
          }
          title={this.props.data.name}
          subheader={this.props.data.subtitle}
        />
        <CardMedia
          className={classes.media}
          image={this.props.data.snapshot}
          title={this.props.data.name}
        />
        <CardContent>
          <Typography component="p">{this.props.data.description}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Typography component="p">{this.props.data.mainLanguage}</Typography>
          <IconButton>
            <a href={this.props.data.linkToSourceCode}>
              <SourceCodeIcon className={classes.button} />
            </a>
          </IconButton>
          <IconButton>
            <a href={this.props.data.linkToSourceCode}>
              <InfoIcon className={classes.button} />
            </a>
          </IconButton>
          <IconButton>
            <a href={this.props.data.linkDownload}>
              <DownLoadIcon className={classes.button} />
            </a>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameCard);
