export default class Jogador{
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