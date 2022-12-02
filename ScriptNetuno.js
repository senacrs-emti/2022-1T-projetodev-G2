
//criar a variavel do jogo e pedir para o canvas trabalhar em 2d

var canvas = document.getElementById('jogo');
var ctx = canvas.getContext('2d');
var personagemimg = new Image();
var fundoimg = new Image()
var personagem = new Image();//Imagem que será carregada e desenhada na canvas


//gravidade = contanteGravitacional x massa do corpo / raio²
var ConstGravitacional = 6.67*(10**(-11))
var MassaN = 1.024*(10**26)
var RaioN = 2.4622*(10**7)
var gravidade = ConstGravitacional*MassaN/(RaioN**2)/10


var Telaincial = new Image();


function fundo(){
  fundoimg.src = "./img/netunoceu.png";
  ctx.drawImage(fundoimg, 0, 0);  
}
class Jogador{
  constructor(){
    this.posicao = {
      x:100,  
      y:500
    }
    this.velocidade = {
      x:0,
      y:0
    }
    this.width = 80
    this.height = 100
  }
  desenhar(){
    this.personagem()
  }
  personagem(){
    if(botoes.direita.pressed){
      personagemimg.src = "./img/frame1.png"
    }
    else if(botoes.esquerda.pressed){
      personagemimg.src = "./img/frame3.png"
    }
    else personagemimg.src = "./img/frame2.png"
    ctx.drawImage(personagemimg, this.posicao.x, this.posicao.y, this.width, this.height);
  }
  update(){
    this.desenhar()
    this.posicao.y += this.velocidade.y
    this.posicao.x += this.velocidade.x

    if (this.posicao.y + this.height + this.velocidade.y <= 630)
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