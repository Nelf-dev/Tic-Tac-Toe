//Implementing when to add X or O
    // Say x starts first
    // Once X is applied to a square
    //change image to be O
    //Once O is applied to a square
    //change image to be X
    //Max turns is 9

$(document).ready(function() {
    console.log( "ready!" );
    $('.end').hide();
    const players = ["X","O"];
    let scoresX = 0;
    let scoresO = 0;



const isWin = function (player){
    for(let i = 0 ; i < player.length; i++){
        if($('#g0').children().attr('class') === player[i]&& $('#g1').children().attr('class') === player[i] && $('#g2').children().attr('class') === player[i]){
            $('.endMsg').text(`${player[i]} wins!`);
            $('.end').fadeIn(1000);
            return(player[i]);
        }
        if($('#g3').children().attr('class') === player[i]&& $('#g4').children().attr('class') === player[i] && $('#g5').children().attr('class') === player[i]){
            $('.endMsg').text(`${player[i]} wins!`)
            $('.end').fadeIn(1000);
            return(player[i]);
        }
        if($('#g6').children().attr('class') === player[i]&& $('#g7').children().attr('class') === player[i] && $('#g8').children().attr('class') === player[i]){
            $('.endMsg').text(`${player[i]} wins!`)
            $('.end').fadeIn(1000);
            return(player[i]);
        }
        if($('#g0').children().attr('class') === player[i]&& $('#g3').children().attr('class') === player[i] && $('#g6').children().attr('class') === player[i]){
            $('.endMsg').text(`${player[i]} wins!`)
            $('.end').fadeIn(1000);
            return(player[i]);
        }
        if($('#g1').children().attr('class') === player[i]&& $('#g4').children().attr('class') === player[i] && $('#g7').children().attr('class') === player[i]){
            $('.endMsg').text(`${player[i]} wins!`)
            $('.end').fadeIn(1000);
            return(player[i]);
        }
        if($('#g2').children().attr('class') === player[i]&& $('#g5').children().attr('class') === player[i] && $('#g8').children().attr('class') === player[i]){
            $('.endMsg').text(`${player[i]} wins!`)
            $('.end').fadeIn(1000);
            return(player[i]);
        }
        if($('#g0').children().attr('class') === player[i]&& $('#g4').children().attr('class') === player[i] && $('#g8').children().attr('class') === player[i]){
            $('.endMsg').text(`${player[i]} wins!`)
            $('.end').fadeIn(1000);
            return(player[i]);
        }
        if($('#g2').children().attr('class') === player[i]&& $('#g4').children().attr('class') === player[i] && $('#g6').children().attr('class') === player[i]){
            $('.endMsg').text(`${player[i]} wins!`);
            $('.end').fadeIn(1000);
            return(player[i]);
        }
        if($('#g0').children().length !== 0 && $('#g1').children().length !== 0 && $('#g2').children().length !== 0 && $('#g3').children().length !== 0 && $('#g4').children().length !== 0 && $('#g5').children().length !== 0 && $('#g6').children().length !== 0 && $('#g7').children().length !== 0 && $('#g8').children().length !== 0) {
            $('.endMsg').text(`DRAW`)
            $('.end').fadeIn(600);
            return ('DRAW');
        }
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
            $(this).prepend('<img class="X" src="img/cross.png"/>');
            $('.turn').text('Player 2 turn');
        } if (numOfImgInGrid % 2 === 0){ //If Even
            $(this).prepend('<img class="O" src="img/circle.png"/>');
            $('.turn').text('Player 1 turn');
        }
        console.log(isWin(players));
    });

    $('button').on('click', function(){ // SCORING
        if(isWin(players) === 'X'){
            scoresX += 1;
            $('.X').text(`${scoresX}`).css('color','red');
        } if (isWin(players) === 'O'){
            scoresO += 1;
            $('.O').text(`${scoresO}`).css('color','red');
        } else {
            return 0;
        }
    });

    $('button').on('click', function(){ // Reset function
        $('img').remove();
        $('.turn').text('Please Start player 1');
        $('.end').fadeOut(600);
    });




});