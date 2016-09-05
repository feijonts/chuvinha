function GotaDeChuva() {
    this.x = random(900);
    this.y = random(-50, -20);
    this.tam  = random(10, 30);
    this.vel = map(this.tam,10,30,3,10);
    this.gros = map(this.tam,10,30,1,3);
    this.mostra = function () {
        strokeWeight(this.gros);
        line(this.x,this.y,this.x,this.y+this.tam);
    }
    
    this.cair = function (){
        this.y = this.y += this.vel;
        if (this.y > height) {
            this.y=-50;
        }
    }
}

var gotas = [];
function setup() {
    createCanvas(900,650);
    for(i=0; i<500; i++){
    gotas.push(new GotaDeChuva());
        }
}



function draw (){
    background(137,80,100)
    stroke(255);
    for (i=0; i<gotas.length; i++){ 
        gotas[i].mostra();
        gotas[i].cair();
    }
}
    