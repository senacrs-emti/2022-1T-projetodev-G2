
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

draw(ctx)
    ctx.strokeStyle= "red";
    ctx.strokeRect(this.x, this.y, this.whidth, this.height);
    ctx.fillStyle = "purple";
    ctx.fillRect(this.x, this.y, this.whidth, this.height);

drawGame()