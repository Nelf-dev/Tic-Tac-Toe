//Implementing when to add X or O
    // Say x starts first
    // Once X is applied to a square
    //change image to be O
    //Once O is applied to a square
    //change image to be X
    //Max turns is 9

$(document).ready(function() {
    console.log( "ready!" );
    console.log($('.grid'));

    const isWin = function (player){
        if($('#g0').children().attr('class') === player&& $('#g1').children().attr('class') === player && $('#g2').children().attr('class') === player){
            console.log(`YOU WIN ${player}`);
        }
        if($('#g3').children().attr('class') === player&& $('#g4').children().attr('class') === player && $('#g5').children().attr('class') === player){
            console.log(`YOU WIN ${player}`);
        }
        if($('#g6').children().attr('class') === player&& $('#g7').children().attr('class') === player && $('#g8').children().attr('class') === player){
            console.log(`YOU WIN ${player}`);
        }
        if($('#g0').children().attr('class') === player&& $('#g3').children().attr('class') === player && $('#g6').children().attr('class') === player){
            console.log(`YOU WIN ${player}`);
        }
        if($('#g1').children().attr('class') === player&& $('#g4').children().attr('class') === player && $('#g7').children().attr('class') === player){
            console.log(`YOU WIN ${player}`);
        }
        if($('#g2').children().attr('class') === player&& $('#g5').children().attr('class') === player && $('#g8').children().attr('class') === player){
            console.log(`YOU WIN ${player}`);
        }
        if($('#g0').children().attr('class') === player&& $('#g4').children().attr('class') === player && $('#g8').children().attr('class') === player){
            console.log(`YOU WIN ${player}`);
        }
        if($('#g2').children().attr('class') === player&& $('#g4').children().attr('class') === player && $('#g6').children().attr('class') === player){
            console.log(`YOU WIN ${player}`);
        }
    }

    //ALTERNATES FROM BOTH PICTURES WITH MODULO- EVEN OR ODD

    $('.grid').on('click', function(){ // When click element with class grid

        let numOfImg = $(this).children().length; //length of each individual grid
        let numOfImgInGrid = $('.grid').children().length + 1; //length of how many img in all grids
        console.log(numOfImgInGrid);
        if( numOfImg >= 1){ // If attempt to add more than one img in grid, alert user and no action
            console.log("One picture per slot!");
            return 0;
        }

        if(numOfImgInGrid % 2 === 1){ //If odd 
            $(this).prepend('<img class="X" src="https://placewaifu.com/image/150/150"/>');
            $('.turn').text('Player 2 turn');

        } if (numOfImgInGrid % 2 === 0){ //If Even
            $(this).prepend('<img class="O" src="https://www.placecage.com/gif/150/150"/>');
            $('.turn').text('Player 1 turn');
        }

        isWin("X");
        isWin("O");
    });




});