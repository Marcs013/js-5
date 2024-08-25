let cor;
let circulox;
let circuloY;


function setup() {

createCanvas(400, 400);
background(color (100, 4, 500));
cor = color(random(0, 255), random(0, 255), random(0, 255));
circulox = [0, 0, 0];
circuloy = [random(height), random(height), random (height)];
}

function draw() {

fill(cor)

for(let contador in circuloX) {

circle(circulox [contador], circuloy [contador], 50);
circuloX[contador] += random(0, 3);
circuloy [contador] += random(-3, 3);

if(circulox [contador] >= width){
    circuloX[contador] = 0;
    circuloy [contador] = random(height);h
  }

}
    if (mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random (0, 255));
     }
 }