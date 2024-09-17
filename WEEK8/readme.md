# AND NOW, SOUND...
## Things start to get interesting...

We can work with Sound
* Play sound from uploaded or embedded file or user's microphone within sketch
* Use microphone to capture speech as text
# Add sound & microphone support
## SOUND + P5js — how to get sound in / analyzed and visualized on the web [also see openprocessing.org for examples] https://p5js.org/reference/#/libraries/p5.sound

MICROPHONE INPUT: Use browser microphone to change size of text: Example
UPLOAD MUSIC Code here: User upload an .mp3 or other music file via upload button: Example
PRELOAD / PLAY MUSIC Code here: Preload a music file (eg. .mp3) and make text change size and position according to amplitude: Example
SPEECH TO TEXT Code here: Use browser microphone to pick up speech and display: Example

P5 js + SOUND
Official p5js Reference: https://archive.p5js.org/reference/#/libraries/p5.soundLinks to an external site. 

The sound functions all depend on having a running sketch with access to the p5.sound library.

SETUP & IMPORT YOUR p5.sound LIBRARY
There are specific steps needed to get the sound library into a fresh p5.js sketch:

1.

Screenshot 2024-09-17 at 15.51.38.png

 

2.

Screenshot 2024-09-17 at 15.55.41.png

 

3.

Screenshot 2024-09-17 at 13.35.15.png

 

 

Start a new sketch and 'save as' (eg. codewords_sound) so that you have the correct directory etc. & then under Sketch/Import Library... choose p5.sound
Check that the library has been auto-added to your sketch's library folder.
Add a call to the p5.sound.min.js library in your processing/index.html tab so that your index file looks a bit like this (make sure you actually use your sketch name ):
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- PLEASE NO CHANGES BELOW THIS LINE (UNTIL I SAY SO) -->
  <script language="javascript" type="text/javascript" src="libraries/p5.min.js"></script>
  <script language="javascript" type="text/javascript" src="libraries/p5.sound.min.js"></script>
  <script language="javascript" type="text/javascript" src="YOURSKETCHNAME.js"></script>
  <!-- OK, YOU CAN MAKE CHANGES BELOW THIS LINE AGAIN -->

  <style>
    body {
      padding: 0;
      margin: 0;
    }
  </style>
</head>

<body>
</body>
</html>
 

LOAD & PLAY A SOUND
The steps to load and play a sound on loop (or not) in your p5 sketch are:

1. Declare the variable~ you can pick almost any name eg. 'song' (or 'beat' or 'myMusicTrack' or 'mySong') don't use the word Audio or Play or amp or other function-type words. 

2. Add a sound file (can be .mp3 or .wav, !! no spaces in your filename) into your sketch folder by dragging an .mp3 onto your processing window, this will place a copy in your data folder.

3. Use preload function to assign the sound file to your sound variable:

function preload(){
  song= loadSound("data/bell.mp3");
}
4.  Suspend  & Resume Audio context : This is a necessary function that gets browsers to allow you to use audio. The pretext is that audio shouldn't go 'automatically' but rather only on user gesture. So we put it into a mouse click function. 
In setup() we place the 

getAudioContext().suspend();
Then in mousePressed() we activate the audio context (browser speak for turning audio on)

function mousePressed() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
   }
}
We can also just trigger the sound with this same mousePressed if we want it to start playing straight away, so the mousePreesed(){} would be this INSTEAD.

function mousePressed() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
    song.play();
    song.loop();
   }
}
EXAMPLE OF THE WHOLE SKETCH TOGETHER PLAYING A FILE 'bell.mp3'
var song;
function preload(){
  song= loadSound("data/bell.mp3");
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(255, 255, 0);
 getAudioContext().suspend();
}

function draw() {
  background(255, 255, 0);
  circle(mouseX, mouseY, 60);
}
function mousePressed() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
    song.play();
    song.loop();
   }
}
function keyTyped(){
  if (key === " "){
  song.stop();
  }
  else {
    song.play();
  }
}
STOPPING THE SOUND
There are many ways to stop the sound, one of the best is with keyTyped(){} that is a usefule function for many uses in interactive web coding. The snippet below will stop the sound if spacebar is pressed, will restart the sound if any other key is pressed.
```
function keyTyped(){
  if (key === " "){
  song.stop();
  }
  else {
    song.play();
  }
}
``` 

 


