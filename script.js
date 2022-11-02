
//criar a variavel do jogo e pedir para o canvas trabalhar em 2d

const canvas = document.getElementById('jogo');
const ctx = canvas.getContext('2d');
const Jogador = new Jogador()
let velocidade = 4;

//game loop
function drawGame() {
  clearScream();
  setTimeout(drawGame, 1000 / velocidade);
};
//tela de desenho
function clearScream(){
  ctx.fillStyle = 'black' ;
  ctx.fillRect(0,0,canvas.width,canvas.height);
}
funcition Jogador{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.whidth = 50;
    this.height = 50;
    this.velocidade = 4;
}

draw(ctx){
    ctx.strokeStyle= "purple";
    ctx.strokeRect(this.x, this.y, this.whidth, this.height);
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.whidth, this.height);
}
}
}

drawGame()