document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'fires',
            img: 'images/fries.png'
        },
        {
            name: 'fires',
            img: 'images/fries.png'
        },
        {
            name: 'chheseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'chheseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
    ]

    var chosencards = [];
    var chosencardId = [];
    var cardsWon = [];

    const grid = document.querySelector('.grid')
    const result = document.querySelector('#result')
    const move = document.querySelector('#moves')
    const highscore = document.querySelector('#high-score')
    var moves = 0;
    var high = 100000000;

    function createBoard() {
        moves = 0;
        cardsWon = [];
        result.textContent = cardsWon.length;
        move.textContent = moves;

        for (let i = 0; i < grid.childElementCount;) {
            grid.removeChild(grid.childNodes[0]);
        }
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    cardArray.sort(() => 0.5 - Math.random())



    function checkForMatch() {
        moves++;
        var cards = document.querySelectorAll('img')

        const cardOne = chosencardId[0];
        const cardTwo = chosencardId[1];

        console.log(cardOne)
        console.log(cardTwo)


        if (chosencards[0] === chosencards[1]) {

            cards[cardOne].setAttribute('src', 'images/white.png')
            cards[cardTwo].setAttribute('src', 'images/white.png')
            cardsWon.push(chosencards);
        }
        else {
            cards[cardOne].setAttribute('src', 'images/blank.png')
            cards[cardTwo].setAttribute('src', 'images/blank.png')
            cards[cardTwo].addEventListener('click', flipcard)
            cards[cardOne].addEventListener('click', flipcard)
            //window.alert("Sorry! Try Again.")
        }
        chosencards = []
        chosencardId = []
        result.textContent = cardsWon.length;
        move.textContent = moves;
        if (high === 100000000) {
            highscore.textContent = "This is your first match";
        }
        if (cardsWon.length === cardArray.length / 2) {
            if (moves < high)
                high = moves;
            window.alert("Hurrayy!! You got all the matches! Try again to complete in lesser moves.");
            highscore.textContent = high;
            createBoard();
        }
    }


    function flipcard() {
        var cardId = this.getAttribute('data-id')
        this.removeEventListener('click', flipcard)

        chosencards.push(cardArray[cardId].name)
        chosencardId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (chosencards.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }

    createBoard();
})