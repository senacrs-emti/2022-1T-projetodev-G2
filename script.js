
//criar a variavel do jogo e pedir para o canvas trabalhar em 2d

var canvas = document.getElementById('jogo');
var ctx = canvas.getContext('2d');
var personagemimg = new Image();
var fundoimg = new Image()
var personagem = new Image();//Imagem que será carregada e desenhada na canvas

//gravidade = contanteGravitacional x massa do corpo / raio²
var ConstGravitacional = 6.67*(10**(-11));
var MassaT = 6*(10**24)
var raio = 6.4*(10**6)
var gravidade = ConstGravitacional*MassaT/(raio**2)/10


var Telaincial = new Image();
var boneco= new Image();



function fundo(){
  fundoimg.src = "./img/Cenário.png";
  ctx.drawImage(fundoimg, 0, 0);  
}


class Jogador {
  constructor(){
    this.posicao = {
      x:100,  
      y:420
    }
    this.velocidade = {
      x:0,
      y:0
    }
    this.width = 60
    this.height = 80
  }
  desenhar(){
    this.personagem()

  }

  personagem(){
    if(botoes.direita.pressed){
      personagemimg.src = "./img/frame1.png"
    }
    else personagemimg.src = "./img/frame2.png"
    ctx.drawImage(personagemimg, this.posicao.x, this.posicao.y, this.width, this.height);
  }
  update(){
    this.desenhar()
    this.posicao.y += this.velocidade.y
    this.posicao.x += this.velocidade.x

    if (this.posicao.y + this.height + this.velocidade.y <= 570)
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