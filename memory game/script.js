document.addEventListener('DOMContentLoaded', () => {

    //card optiond
    const cardArray = [
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'img/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'img/hotdog.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png'
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    let cardChosen = [];
    let cardChosenId = [];
    let cardWon = [];
    //create your board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    //check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('You have clicked the same image!')

        } else if (cardChosen[0] === cardChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardWon.push(cardChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'img/blank.png');
            cards[optionTwoId].setAttribute('src', 'img/blank.png');
            alert('sorry try again')
        }
        cardChosen = [];
        cardChosenId = [];
        resultDisplay.textContent = cardWon.length;
        if (cardWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratilations! You found tham All'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
})