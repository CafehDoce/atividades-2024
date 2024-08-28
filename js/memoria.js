
document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.querySelector('game-container');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restart');
    
    const images = [
        'img1.png', 'img1.png',
        'img2.png', 'img2.png',
        'img3.png', 'img3.png',
        'img4.png', 'img4.png',
        'img5.png', 'img5.png',
        'img6.png', 'img6.png'
    ];

    //embaralhar cartas
    images.sort(() => 0.5 - Math.random());


});

/* const gameContainer = document.querySelector(".game-container")
const restart = document.querySelector("button")
let cartas;
let carta1 = "";
let carta2 = "";

const images = [
{nome: "nuvem", imagem: "/img/img1.png"},
{nome: "flor", imagem: "/img/img2.png"},
{nome: "donut", imagem: "/img/img3.png"},
{nome: "cereja", imagem: "/img/img4.png"},
{nome: "soda", imagem: "/img/img5.png"},
{nome: "disco", imagem: "/img/img6.png"},
];

let cardHTML = '';

images.forEach(img =>{
    cardHTML += `
    <div>
        <img src"img/${img}">
        <img src="img/js-badge.svg">
    <div>
    `
});

gameContainer.innerHTML = cardHTML;


    let primeiracarta, segundacarta;
    let lockBoard = false;
    let matches = 0;
    
    function createCard(image) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = image;

        const img = document.createElement('img');
        img.src = `images/${image}`;
        card.appendChild(img);

        card.addEventListener('click', flipCard);
        return card;
    }
    
    function flipCard() {
        if (lockBoard || this === primeiracarta) return;
        this.classList.add('flipped');
        
        if (!primeiracarta) {
            primeiracarta = this;
            return;
        }
        
        segundacarta = this;
        checkMatch();
    }
    
    function checkMatch() {
        const isMatch = primeiracarta.dataset.image === segundacarta.dataset.image;
        isMatch ? disableCards() : unflipCards();
    }
    
    function disableCards() {
        primeiracarta.removeEventListener('click', flipCard);
        segundacarta.removeEventListener('click', flipCard);
        resetBoard();
        matches++;
        if (matches === images.length / 2) {
            setTimeout(() => {
                message.textContent = 'Você ganhou!';
                restartButton.style.display = 'block';
            }, 500);
        }
    }
    
    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            primeiracarta.classList.remove('flipped');
            segundacarta.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }
    
    function resetBoard() {
        [primeiracarta, segundacarta, lockBoard] = [null, null, false];
    }
    
    function shuffleImages() {
        images.sort(() => Math.random() - 0.5);
    }
    
    function startGame() {
        shuffleImages();
        gameContainer.innerHTML = '';
        images.forEach(image => gameContainer.appendChild(createCard(image)));
        matches = 0;
        restartButton.style.display = 'none';
        message.textContent = '';
    }
    
    restartButton.addEventListener('click', startGame);
    
    startGame(); 
})*/
