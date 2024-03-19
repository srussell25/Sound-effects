
function preload(){
  myImage = loadImage ('libraries/AlienImage.webp');
 }

 function setup() {
  createCanvas(400, 400); 
 }

 function draw() {
  if (mouseIsPressed ===true){
    background( myImage);
  } else if (mouseIsPressed === false){
    background (150);
    text ('Press mouse for Mr. Alien (I am so sorry in Advance)', 60, height/2);
  }
 }
 
 let amSynth = new Tone.AMSynth().toDestination();
 amSynth.type = 'sine'
 amSynth.harmonicity.value = .9;
 
 let fmSynth = new Tone.FMSynth().toDestination();
 fmSynth.type = 'sine'
 fmSynth.harmonicity.value = .9;
 
 
 function mousePressed() { 
  amSynth.triggerAttack('c#6');
  fmSynth.triggerAttack('f#6');
 }

 function mouseReleased() { 
  amSynth.triggerRelease();
  fmSynth.triggerRelease();
 } 