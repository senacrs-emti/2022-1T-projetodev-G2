
//criar a variavel do jogo e pedir para o canvas trabalhar em 2d

var canvas = document.getElementById('jogo');
var ctx = canvas.getContext('2d');

var fundoimg = new Image()
var personagem = new Image();//Imagem que será carregada e desenhada na canvas
var posicao = 0;//Indicador da posição atual do personagem
var NUM_POSICOES = 6;//Quantidade de imagens que compõem o movimento

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
  ctx.drawImage(fundoimg, 0, 0);
};
drawGame();
