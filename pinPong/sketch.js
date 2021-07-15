let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;

let velocidadeBolinhaX = 3;
let velocidadeBolinhaY = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha , diametro);
  xBolinha += velocidadeBolinhaX;
  yBolinha += velocidadeBolinhaY;
  
  if (xBolinha > width || xBolinha < 0) {
    velocidadeBolinhaX *= -1;
  }
  if (yBolinha > height || yBolinha < 0){
    velocidadeBolinhaY *= -1
  } 
}
