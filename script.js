console.log("Welcome to Tic Tac Toe.....");

let music = new Audio("gamewin.mp3");

//   let audioturn=new Audio("music2.mp3");
//   let gameover=new Audio("music3.mp3");

// The variable that defines current turn of a player , i.e either 'X' or 'O'.

let turn = "X";
let isgameover = false;

// Function that changes Turn condition after every successful turn.....

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}


// Function that checks whether the game goes to player 1, or player 2, or ends in a draw.

const checkWin = () => {

    let boxtext = document.getElementsByClassName('boxtext');

    let wins = [

        [0, 1, 2, 2.8, 5, 0],
        [3, 4, 5, 2.8, 14, 0],
        [6, 7, 8, 2.8, 23, 0],
        [0, 3, 6, -6, 14, 90],
        [1, 4, 7, 0, 12, 90],
        [2, 5, 8, 11, 14, 90],
        [0, 4, 8, 1.9, 14, 45],
        [2, 4, 6, 1.4, 13, 135],

    ];

    if (isgameover !== true) {


        wins.forEach(e => {

            if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML) && boxtext[e[0]].innerHTML !== '') {

                document.getElementsByClassName('info')[0].innerHTML = turn + " WON THE GAME !!!!";

                isgameover = true;

                //  music.play();

                document.getElementsByTagName('img')[0].style.display = 'block';

                document.getElementById('congrats').style.display = 'block';


                document.querySelector('.line').style.width='26vw';

                document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;


            }

        });

    }



}


let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext');


    element.addEventListener('click', () => {

        if (boxtext.innerHTML === "") {

            boxtext.innerHTML = turn;
            checkWin();
            turn = changeTurn();

            if (isgameover === false) {

                document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;

            }


        }

    });




});


// Now Add Event Listener to reset button , to reload the game again......

let reset = document.getElementById('reset');

reset.addEventListener('click', () => {

    let boxtexts = document.querySelectorAll('.boxtext');

    Array.from(boxtexts).forEach(element => {

        element.innerHTML = "";

    });

    turn = "X";
    isgameover = false;

    
    document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;

    document.getElementsByTagName('img')[0].style.display = 'none';

    document.getElementById('congrats').style.display = 'none';

    document.querySelector('.line').style.width = '0vw';

});