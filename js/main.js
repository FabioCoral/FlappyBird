const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const uiLayer = document.getElementById('ui-layer');
const uiTitle = document.getElementById('ui-title');
const uiInstrucoes = document.getElementById('ui-instrucoes');
const uiAutores = document.getElementById('ui-autores');

let estado = 'menu';
let bird = new Bird(canvas);
let pipes = [];
let frames = 0;
let score = 0;
let highScore = localStorage.getItem('flappyHighScore') || 0;

let bgX = 0;
const velocidadeFundo = 0.3;

const bgImage = new Image();
bgImage.src = '../images/fundo.png';

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        if (estado === 'menu') {
            iniciarJogo();
        } else if (estado === 'jogando') {
            bird.jump();
        } else if (estado === 'gameover') {
            reiniciarJogo();
        }
    }
});

function iniciarJogo() {
    estado = 'jogando';
    uiLayer.classList.add('escondido');
}

function reiniciarJogo() {
    bird = new Bird(canvas);
    pipes = [];
    frames = 0;
    score = 0;
    estado = 'jogando';
    uiLayer.classList.add('escondido');
}

function mostrarGameOver() {
    estado = 'gameover';

    if (score > highScore) {
        highScore = score;
        localStorage.setItem('flappyHighScore', highScore);
    }

    uiTitle.innerText = "GAME OVER";
    uiTitle.style.color = "red";
    uiAutores.classList.add('escondido');
    uiInstrucoes.innerHTML = `
        Pontuação: ${score} <br>
        Maior Pontuação: <strong>${highScore}</strong> <br><br> 
        Pressione <strong>ESPAÇO</strong> para reiniciar
    `;

    uiLayer.classList.remove('escondido');
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (bgImage.complete) {
        if (estado !== 'gameover') {
            bgX -= velocidadeFundo;

            if (bgX <= -canvas.width) {
                bgX = 0;
            }
        }


        ctx.drawImage(bgImage, bgX, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, bgX + canvas.width, 0, canvas.width, canvas.height);
    }

    if (estado === 'jogando' || estado === 'gameover') {
        bird.update();
        bird.draw(ctx);

        if (estado === 'jogando' && (bird.y + bird.height >= canvas.height - 10 || bird.y <= 0)) {
            mostrarGameOver();
        }

        if (frames % 200 === 0 && estado === 'jogando') {
            pipes.push(new Pipe(canvas));
        }

        for (let i = 0; i < pipes.length; i++) {
            if (estado === 'jogando') {
                pipes[i].update();
            }
            pipes[i].draw(ctx);

            if (pipes[i].acertarPassaro(bird) && estado === 'jogando') {
                mostrarGameOver();
            }

            if (pipes[i].x + pipes[i].width < bird.x && !pipes[i].passou && estado === 'jogando') {
                score++;
                pipes[i].passou = true;
            }

            if (pipes[i].isOffScreen()) {
                pipes.splice(i, 1);
                i--;
            }
        }

        if (estado === 'jogando') {
            ctx.fillStyle = 'white';
            ctx.font = 'bold 50px Arial';
            ctx.lineWidth = 2;
            ctx.textAlign = 'center';
            ctx.fillText(score, canvas.width / 2, 100);
            ctx.strokeText(score, canvas.width / 2, 100);
        }
    }

    console.log(pipes.length);

    frames++;
    requestAnimationFrame(gameLoop);
}

gameLoop();