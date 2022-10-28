import Player from "./Jogador.js";
//criar a variavel do jogo e pedir para o canvas trabalhar em 2d

const canvas = document.getElementById('jogo');
const ctx = canvas.getContext('2d');

const player = new Player(canvas.width/2.2, canvas.height/1.3)

//tela de desenho
function clearScream(){
  ctx.fillStyle = 'black' ;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//game loop
function drawGame() {
  clearScream();
  setTimeout(drawGame, 10000/ 60);
  player.draw(ctx);
};
drawGame();