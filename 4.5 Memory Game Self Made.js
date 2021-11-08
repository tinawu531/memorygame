document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
    {   
        name:'Amy',
        img: 'amy.png'
    },
    
    {   
        name:'Bender',
        img:'bender.png'
    },

    {   name:'Fry',
        img:'fry.png'
    },

    {
        name:'Hermes',
        img:'hermes.png'
    },

    {
        name:'Leela',
        img:'leela.png'
    },

    {   
        name:'Amy',
        img: 'amy.png'
    },
    
    {   
        name:'Bender',
        img:'bender.png'
    },

    {   name:'Fry',
        img:'fry.png'
    },

    {
        name:'Hermes',
        img:'hermes.png'
    },

    {
        name:'Leela',
        img:'leela.png'
    },

    ]

    //gameboard
    cardArray.sort(() => 0.5 - Math.random());
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector ('#result')
    var nameCardsChosen = [];
    var cardsChosenId = [];
    const cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute ('src', 'planetExpress.png');
            card.setAttribute('data-index', i);
            card.addEventListener('click', flipcard);
            grid.append(card);
        }
    };

    //flip your card
        function flipcard(){
            const cardId = event.target.getAttribute('data-index');
            nameCardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            event.target.setAttribute('src', cardArray[cardId].img);
            console.log(`Cards chosen array: ${(nameCardsChosen)}`);
            console.log(`Cards chosen ID array: ${(cardsChosenId)}`);
            if (nameCardsChosen.length === 2){
                setTimeout(checkForMatch, 100);
            }; 
        };

    // check for match
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        //when clicking on the same card:
        if (cardsChosenId[0] === cardsChosenId[1]){
            alert('Choose a Different Card!')
            cards[optionOneId].setAttribute('src','planetExpress.png');
        }
        //when two cards match:
        else if (nameCardsChosen[0] === nameCardsChosen[1]){
            alert('You Found a Match')
            // cards[optionOneId].setAttribute('src','planetExpress.png');
            // cards[optionTwoId].setAttribute('src','planetExpress.png');
            cardsWon.push(nameCardsChosen);
        } 
        //two different cards:
        else {
            setTimeout(
                (function () {
                cards[optionOneId].setAttribute('src','planetExpress.png');
                cards[optionTwoId].setAttribute('src','planetExpress.png');
            }), 1000);
            
        };
        nameCardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            alert('Congrats! You are Done!')
        }
        console.log(cardsWon);

    };




    createBoard();

   

});