class Pipe{
    constructor(canvas){
        this.canvas = canvas;
        this.x = canvas.width;
        this.width = 95;
        this.gap = 200;

        this.passou = false;
        this.topHeight = Math.floor(Math.random() * (canvas.height - this.gap - 100)) + 50;

        this.velocidade = 3;
        this.imagem = new Image();
        this.imagem.src = "../images/pipe.png";

    }

    draw(ctx) {
        if (this.imagem.complete) {
            const alturaFixa = 800;

            ctx.save();
            ctx.translate(this.x + this.width / 2, this.topHeight);
            ctx.scale(1, -1);
            ctx.drawImage(this.imagem, -this.width / 2, 0, this.width, alturaFixa);
            ctx.restore();

            const bottomY = this.topHeight + this.gap;
            ctx.drawImage(this.imagem, this.x, bottomY, this.width, alturaFixa);

        } else {
            ctx.fillStyle = 'green';
            ctx.fillRect(this.x, 0, this.width, this.topHeight);
            ctx.fillRect(this.x, this.topHeight + this.gap, this.width, this.canvas.height);
        }
    }

    acertarPassaro(passaro){

        const margemX = 35;
        const margemY = 30;

        const hitX = passaro.x + margemX;
        const hitY = passaro.y + margemY;
        const hitWidth = passaro.width - (margemX * 2);
        const hitHeight = passaro.height - (margemY * 2);

        if(hitX + hitWidth > this.x && hitX < this.x + this.width){
            if(hitY < this.topHeight || hitY + hitHeight > this.topHeight + this.gap){
                return true;
            }
        }

        return false;
    }

    update() {
        this.x -= this.velocidade;
    }

    isOffScreen() {
        return this.x + this.width < 0;
    }

}