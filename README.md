# Flappy Bird Clone

Um clone do clássico jogo Flappy Bird, desenvolvido inteiramente com **JavaScript Vanilla (Puro)**, **HTML5 Canvas** e **CSS3**. Este projeto foi construído como Trabalho Final da disciplina de Desenvolvimento Web na UNAERP.

## 👨‍💻 Autor
* **Fábio Coral**

## 🎮 Funcionalidades
* **Física Customizada:** Sistema de gravidade e impulsão suave aplicado ao pássaro.
* **Geração Dinâmica:** Obstáculos (tubos) gerados de forma processual com alturas aleatórias.
* **Hitbox Otimizada:** Sistema de colisão com "margem de perdão" para uma jogabilidade mais justa e fluida, focando-se no centro do ecrã e do sprite.
* **Sistema de Recordes:** Utilização do `localStorage` do browser para guardar a maior pontuação do jogador.
* **Efeito Parallax:** Fundo de cenário com *scrolling* infinito e suave.
* **Redimensionamento Automático:** O jogo ajusta-se automaticamente ao tamanho da janela do browser.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação da página e utilização da API `<canvas>` para a renderização gráfica.
* **CSS3:** Estilização da interface de utilizador (Menus e Game Over) com posicionamento absoluto sobre o ecrã do jogo.
* **JavaScript (ES6):** Lógica do jogo dividida em Classes (Orientação a Objetos) para melhor modularidade e organização da engenharia de software.

## 📂 Arquitetura do Projeto
O projeto está estruturado de forma modular para facilitar a manutenção e leitura do código:
* `html/index.html`: Ficheiro principal que contém o Canvas e a Interface de Utilizador (UI).
* `style/style.css`: Estilos para formatar o menu sobreposto e adaptar a janela.
* `js/main.js`: O motor principal (*Game Loop*), controlo de estados (Menu, A Jogar, Game Over) e processamento de inputs.
* `js/bird.js`: Classe responsável pela entidade do pássaro (física, desenho e atualização de posição).
* `js/pipe.js`: Classe responsável pela gestão individual de cada tubo (tamanho fixo estendido, colisão e movimento contínuo).
* `images/`: Diretório que contém os recursos gráficos (*sprites* do pássaro, tubos e fundo).

## 🚀 Como Executar
Não é necessária qualquer instalação de dependências ou servidor local para correr o jogo.
1. Extraia a pasta do projeto.
2. Abra o ficheiro `html/index.html` em qualquer browser moderno (Google Chrome, Firefox, Edge, Safari).
3. O jogo irá iniciar imediatamente no ecrã.

## 🕹️ Controlos
* **ESPAÇO:** Iniciar o jogo / Fazer o pássaro saltar/ Reiniciar o jogo.
