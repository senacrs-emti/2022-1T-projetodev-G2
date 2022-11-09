
//criar a variavel do jogo e pedir para o canvas trabalhar em 2d

const canvas = document.getElementById('jogo');
const ctx = canvas.getContext('2d');

var fundoimg = new Image()

function fundo(){
  fundoimg.src = "./img/Cenário.png";
  ctx.drawImage(fundoimg, 0, 0);  
}

//tela de desenho
function clearScream(){
  ctx.fillStyle = 'black' ;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  fundo();
}
//game loop
function drawGame() {
  clearScream();
  setTimeout(drawGame, 10000/ 60);
  ctx.drawImage(fundoimg, 0, 0)
};
drawGame();
