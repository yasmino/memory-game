// Array for all image and 2 from each one
let imgsArray = [{
        img: "imgs/giraffe.jpg",
        name: "giraffe",
    },
    {
        img: "imgs/giraffe.jpg",
        name: "giraffe",
    },
    {
        img: "imgs/elephant.jpg",
        name: "elephant",
    },
    {
        img: "imgs/elephant.jpg",
        name: "elephant",
    },
    {
        img: "imgs/penguin.jpg",
        name: "penguin",
    },
    {
        img: "imgs/penguin.jpg",
        name: "penguin",
    },
    {
        img: "imgs/chicken.jpg",
        name: "chicken",
    },
    {
        img: "imgs/chicken.jpg",
        name: "chicken",
    },
];

// function to sort imgs in random way
function randomCards() {
    imgsArray.sort(() => Math.random() - 0.5);
}

const gamePanel = document.querySelector("#gamePanel");
const reset = document.querySelector("#reset");
let activeImgsId = [];
let activeImgsNames = [];
let playerScore = 0;

// Function to create the game Cards
function createCards(gamePanel, array) {
    array.forEach((arr, index) => {
        const img = document.createElement("img");
        img.setAttribute("src", "imgs/backcard.jpg");
        img.setAttribute("data-id", index);
        addFlipListner(img);
        gamePanel.append(img);
    });
};

function addFlipListner(img) {
    img.addEventListener('click', function(e) {
        let selectedImg = this.dataset.id;
        activeImgsId.push(selectedImg);
        activeImgsNames.push(imgsArray[selectedImg].name);
        this.setAttribute("name", imgsArray[selectedImg].name);
        this.classList.add("active");
        this.setAttribute("src", imgsArray[selectedImg].img);
        if (activeImgsId.length === 2) {
            identicalCards();
        }
    })
};

const playone = document.querySelector('#player1');
// Function to check identical images
function identicalCards() {
    const imgs = document.querySelectorAll("img");
    let firstCard = activeImgsNames[0];
    let secondCard = activeImgsNames[1];
    let firstCardId = activeImgsId[0];
    let secondCardId = activeImgsId[1];
    console.log(activeImgsNames)

    const equalImgs = document.querySelectorAll('.active');
    const modal = document.querySelector('.modal');
    if (firstCard === secondCard) {
        playerScore += 1;
        playone.innerHTML = playerScore;
        setTimeout(() => {
            equalImgs.forEach(active => {
                active.style.opacity = '0.8';
            })
        }, 500);
        setTimeout(() => {
            if (playerScore == imgsArray.length / 2) {
                modal.style.display = 'block';
            }
        }, 1000);


    } else {
        setTimeout(() => {
            imgs[firstCardId].setAttribute("src", "imgs/backcard.jpg");
            imgs[secondCardId].setAttribute("src", "imgs/backcard.jpg");
            imgs[firstCardId].classList.remove("active");
            imgs[secondCardId].classList.remove("active");
        }, 500);
    }
    activeImgsId = [];
    activeImgsNames = [];
}

// GO to next level / More Cards
const levelResult = document.querySelector('p#result');
levelResult.innerHTML = 'LEVEL 1 Completed';

const modal = document.querySelector('.modal');
nextLevel.addEventListener('click', function(e) {

    modal.style.display = 'none';
    imgsArray = [{
            img: "imgs/giraffe.jpg",
            name: "giraffe",
        },
        {
            img: "imgs/giraffe.jpg",
            name: "giraffe",
        },
        {
            img: "imgs/elephant.jpg",
            name: "elephant",
        },
        {
            img: "imgs/elephant.jpg",
            name: "elephant",
        },
        {
            img: "imgs/penguin.jpg",
            name: "penguin",
        },
        {
            img: "imgs/penguin.jpg",
            name: "penguin",
        },
        {
            img: "imgs/chicken.jpg",
            name: "chicken",
        },
        {
            img: "imgs/chicken.jpg",
            name: "chicken",
        },
        {
            img: "imgs/lion.jpg",
            name: "lion",
        },
        {
            img: "imgs/lion.jpg",
            name: "lion",
        },
        {
            img: "imgs/dog.jpg",
            name: "dog",
        },
        {
            img: "imgs/dog.jpg",
            name: "dog",
        },
        {
            img: "imgs/koala.jpg",
            name: "koala",
        },
        {
            img: "imgs/koala.jpg",
            name: "koala",
        },

    ];
    gamePanel.innerHTML = '';
    modal.style.display = 'none';
    playerScore = 0;
    playone.innerHTML = playerScore;
    levelResult.innerHTML = 'WINNER WINNER CHICKEN DINNER';
    nextLevel.style.display = 'none';
    restart.style.display = 'block';
    startGame();
});

restart.addEventListener('click', function(e) {
    gamePanel.innerHTML = '';
    modal.style.display = 'none';
    playerScore = 0;
    playone.innerHTML = playerScore;
    startGame();
});

// Reset
reset.addEventListener('click', function(e) {
    gamePanel.innerHTML = '';
    playerScore = 0;
    playone.innerHTML = playerScore;
    startGame();
});

function startGame() {
    randomCards();
    createCards(gamePanel, imgsArray);
}

startGame();