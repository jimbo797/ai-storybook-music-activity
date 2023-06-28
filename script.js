
// DELETE LATER?
import { Piano } from '@tonejs/piano';
// const Piano = require('@tonejs/piano');

const piano = new Piano({ velocities: 5 });
piano.toDestination();
piano.load().then(() => {console.log('loaded!')});

function onPress(note){
  // piano.
  const audio = document.getElementById(note);
  audio.play();
}