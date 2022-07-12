
$(document).ready(function() {
    $('.end').hide(); // Hides Away end game screen
    const players = ["X","O"];
    const popAudio = new Audio("sounds/pop.wav"); //Sound Effects
    const endAudio = new Audio("sounds/end.wav");
    const winAudio = new Audio("sounds/win.wav");

    let scoresX = 0;
    let scoresO = 0;
    
    if(localStorage.getItem('KeyX')){ // Checks local storage for previous logged scores
        scoresX = parseInt(localStorage.getItem('KeyX'));
        $('.X').text(`${scoresX}`);
    }
    if(localStorage.getItem('KeyO')){
        scoresO = parseInt(localStorage.getItem('KeyO'));
        $('.O').text(`${scoresO}`);
    }


    winCombo = [
        ['#g0','#g1','#g2'],
        ['#g3','#g4','#g5'],
        ['#g6','#g7','#g8'], //Horizontal

        ['#g0','#g3','#g6'],
        ['#g1','#g4','#g7'],
        ['#g2','#g5','#g8'], //Vertical

        ['#g0','#g4','#g8'], //diagonal
        ['#g2','#g4','#g6']
    ];
    const isWin = function (player){ 
        for(let i = 0 ; i < player.length; i++){ // Cycles through both X and O into these conditionals
            for(let j = 0; j < winCombo.length; j++){
                    if($(`${winCombo[j][0]}`).children().attr('class') === player[i]&& $(`${winCombo[j][1]}`).children().attr('class') === player[i] && $(`${winCombo[j][2]}`).children().attr('class') === player[i]){
                        winAudio.play()
                        $('.endMsg').text(`${player[i]} wins!`);
                        $('.end').fadeIn(600);
                        return(player[i]);
                    }
            }
        }
    }
    const isDraw = function () {
                    if($('#g0').children().length !== 0 && $('#g1').children().length !== 0 && $('#g2').children().length !== 0 && $('#g3').children().length !== 0 && $('#g4').children().length !== 0 && $('#g5').children().length !== 0 && $('#g6').children().length !== 0 && $('#g7').children().length !== 0 && $('#g8').children().length !== 0){
                        $('.endMsg').text(`DRAW`)
                        $('.end').fadeIn(600);
                        return ('DRAW');
                    }
                }
        //ALTERNATES FROM BOTH PICTURES WITH MODULO- EVEN OR ODD
        $('.grid').on('click', function(){
            popAudio.play();
            let numOfImg = $(this).children().length; //length of each individual grid
            let numOfImgInGrid = $('.grid').children().length + 1; //length of how many img in all grids
            console.log(numOfImgInGrid);
            if( numOfImg >= 1){ // If attempt to add more than one img in grid, alert user and no action
                $(this).effect('shake'); //Notifies user that you are not allowed to add it in again
                console.log("One picture per slot!");
                return 0;
            }
            if(numOfImgInGrid % 2 === 1){ //If odd 
                $('<img class="X" src="img/cross.png"/>').hide().prependTo(this).fadeIn(200); //Adds picture of X
                $('.turn').text('Player O turn');
            } if (numOfImgInGrid % 2 === 0){ //If Even
                $('<img class="O" src="img/circle.png"/>').hide().prependTo(this).fadeIn(200); //Adds picture of O
                $('.turn').text('Player X turn');
            }
            if(isWin(players)){
                return 0;
            }
            isDraw() //Checks after every click if win combination not met
        });


        //Button Functions
        

        $('.restart').on('click', function(){ // SCORING
            if(isWin(players) === 'X'){
                scoresX += 1;
                $('.X').text(`${scoresX}`);
                localStorage.setItem('KeyX',scoresX); // When press restart adds to local storage
            } if (isWin(players) === 'O'){
                scoresO += 1;
                $('.O').text(`${scoresO}`);
                localStorage.setItem('KeyO',scoresO); // When press restart adds to local storage
            } if (isWin(players) === 'O'){
            } else {
                return 0;
            }
        });
    
        $('.restart').on('click', function(){ // Restart button
            endAudio.play();
            $('img').remove();
            $('.turn').text('Please Start X');
            $('.end').fadeOut(600);
        });

        $('.reset').on('click', function(){ // Reset function
            endAudio.play();
            $('img').remove();
            $('.turn').text('Please Start X');
            localStorage.clear(); // Clears all local storage
            scoresX = 0;
            scoresO = 0;
            $('.X').text(`${scoresX}`)
            $('.O').text(`${scoresO}`)
        });
    
    
    
    
});