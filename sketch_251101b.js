function setup() {
  
  createCanvas(612, 792);
  // Six-digit hex RGB notation.
  background('#CBC3E3');

  describe('A canvas with a black background.');
  
   noStroke();
  
  
  fill('#543214'); // dark brown
  arc(306, 482, 380, 440, PI, TWO_PI, OPEN); // upper hair curve
  rect(136, 482, 340, 420); // long hair down the back

 fill(180); // neutral gray torso
  triangle(186, 792, 426, 792, 306, 492);
  
  fill('#F5CFA4'); // medium–light skin tone
  circle(306, 482, 320);

  fill('#543214');
  arc(306, 412, 380, 250, PI, TWO_PI, OPEN); // sits higher than before

  fill('#3B200E');
  triangle(300, 322, 312, 322, 306, 352); // small subtle part
 
  noStroke();
  fill(0);
  circle(266, 472, 10); // left eye
  circle(346, 472, 10); // right eye

  stroke('#3B200E');
  strokeWeight(4);
  line(250, 450, 282, 448); // left brow
  line(330, 448, 362, 450); // right brow

  stroke(0);
  strokeWeight(3);
  line(306, 480, 306, 500); // simple straight line nose

  stroke(0);
  strokeWeight(3);
  line(286, 522, 326, 522); // simple straight smile
  
  noStroke();
}

function draw() {

}
