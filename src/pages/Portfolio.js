import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GameCard from '../components/GameCard';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '70px',
    justifyContent: 'center'
  }
});

export function Portfolio(props) {

  const state = {
    api: [
      {
        name: 'Another Day To Be',
        subtitle: 'RPG Game made in Unity3D.',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/AnotherDayToBe/master/Documents/Developer%20notes/GDD%20Images/CombatPreview.jpg',
        description: 'AD2B is a turn based tactics and exploration game in a devastated world. Your character will face different choices while tries to survive in a map full of dangers.',
        linkToSourceCode: 'https://github.com/Dkreick/AnotherDayToBe',
        linkToGame: 'AnotherDayToBe',
        mainLanguague: 'Unity3D/C#'
      },
      {
        name: 'AD2B Wiki',
        subtitle: 'Wiki for Another Day To Be.',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/AnotherDayToBe/master/Documents/Developer%20notes/GDD%20Images/CombatPreview.jpg',
        description: 'Official Wikia for Another Day To be',
        linkToSourceCode: 'https://github.com/Dkreick/AnotherDayToBe-Web',
        linkToGame: 'AnotherDayToBeWikia',
        mainLanguague: 'React'
      },
      {
        name: 'Scan My Profile',
        subtitle: 'Info app made with Vuforia.',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/Scan-My-Profile/master/ReadmePhoto.png',
        description: 'Small app for scan my profile image and know more about me.',
        linkToSourceCode: 'https://github.com/Dkreick/Scan-My-Profile',
        linkToGame: 'ScanMyProfile',
        mainLanguague: 'Vuforia'
      },
      {
        name: 'Simple Simon',
        subtitle: 'Simple game memory game made in Unity3D',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/SimpleSimon/master/preview.png',
        description: 'Simple game memory game made in Unity3D.',
        linkToSourceCode: 'https://github.com/Dkreick/SimpleSimon',
        linkToGame: 'SimpleSimon',
        mainLanguague: 'Unity3D/C#'
      },
      {
        name: 'Dont Travel Alone',
        subtitle: 'Booking website for motorcycle rental',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/Phaser---Practice-Horse-and-diamonds/master/preview.png',
        description: 'A little page to book any motorcycle rental made in Angular 2.',
        linkToSourceCode: 'https://github.com/Dkreick/DontTravelAlone',
        linkToGame: 'https://dont-travel-alone.herokuapp.com/',
        mainLanguague: 'Angular 7'
      },
      {
        name: 'Phaser: Practice Horse and diamonds',
        subtitle: 'Short demo game made in an Udemy course.',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/Phaser---Practice-Horse-and-diamonds/master/preview.png',
        description: 'Catch all the bubbles before the time runs out!.',
        linkToSourceCode: 'https://github.com/Dkreick/Phaser---Practice-Horse-and-diamonds',
        linkToGame: 'HorseAndDiamonds',
        mainLanguage: 'JS/Phaser'
      },
      {
        name: 'Galactic Menace',
        subtitle: 'Small Match3 alike game made in Unity3D',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/Galactic-Menace/master/Snapshot.jpg',
        description: 'Small Match3 alike game made in Unity3D.',
        linkToSourceCode: 'https://github.com/Dkreick/Galactic-Menace',
        linkToGame: 'GalacticMenace',
        mainLanguage: 'Unity3D'
      }
    ]
  };
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>{state.api.map((api, index) => {
        return <Grid item xs={3}><GameCard data={state.api[index]} key={index} /></Grid>;
      })}</Grid>
    </div>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
