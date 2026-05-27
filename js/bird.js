class Bird{
    constructor(canvas){
        this.canvas = canvas;
        this.x = 200;
        this.y = canvas.height / 2;
        this.width = 130;
        this.height = 110;

        this.velocidade = 0;
        this.gravidade = 0.25;
        this.forcaPulo = -6;

        this.imagem = new Image();
        this.imagem.src = "../images/passaro.png";
    }

    draw(ctx) {
        if (this.imagem.complete) {
            ctx.drawImage(this.imagem, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = 'yellow';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    update() {
        this.velocidade += this.gravidade;
        this.y += this.velocidade;

        if(this.y + this.height >= this.canvas.height){
            this.y = this.canvas.height - this.height;
            this.velocidade = 0;
        }

        if(this.y <= 0){
            this.y = 0;
            this.velocidade = 0;
        }

    }

    jump(){
        this.velocidade = this.forcaPulo;
    }

}