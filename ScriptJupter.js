
//criar a variavel do jogo e pedir para o canvas trabalhar em 2d

var canvas = document.getElementById('jogo');
var ctx = canvas.getContext('2d');

var fundoimg = new Image()
var personagem = new Image();//Imagem que será carregada e desenhada na canvas
var gravidade = 1.9;
var Telaincial = new Image();


function fundo(){
  fundoimg.src = "./img/jupiterceu.png";
  ctx.drawImage(fundoimg, 0, 0);  
}
class Jogador{
  constructor(){
    this.posicao = {
      x:100,  
      y:520
    }
    this.velocidade = {
      x:0,
      y:0
    }
    this.width = 30
    this.height = 30
  }
  desenhar(){
    ctx.fillRect(this.posicao.x, this.posicao.y, this.width, this.height)
    ctx.fillStyle = ('red')
  }
  update(){
    this.desenhar()
    this.posicao.y += this.velocidade.y
    this.posicao.x += this.velocidade.x

    if (this.posicao.y + this.height + this.velocidade.y <= 550)
    this.velocidade.y += gravidade
    else this.velocidade.y = 0
    }
}
const jogador = new Jogador
const botoes = {
  direita: {
    pressed: false
  },
  esquerda: {
    pressed: false
  }
}

//game loop
function animate(){
  requestAnimationFrame(animate)  
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  fundo();
  jogador.update()
  if(botoes.direita.pressed) {
    jogador.velocidade.x = 2
  } else if (botoes.esquerda.pressed){
    jogador.velocidade.x = -2
  }
  else jogador.velocidade.x = 0

  
}

animate()

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
      case 65:
        console.log ('esquerda')
        botoes.esquerda.pressed = true
        break
      
      case 83:
        console.log ('baixo')
        break
      
      case 68:
        console.log ('direita')
        botoes.direita.pressed = true
        break

      case 87:
        console.log ('cima')
        jogador.velocidade.y = -9
        break
    }
  })
  addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
      case 65:
        console.log ('esquerda')
        botoes.esquerda.pressed = false
        break
      
      case 83:
        console.log ('baixo')
        break
      
      case 68:
        console.log ('direita')
        botoes.direita.pressed = false
        break

        
      }
  })