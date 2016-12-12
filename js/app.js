$(start);

var $play;
var $display;
var blanks;
var guesses [];
var totalGuesses = 0
var wrongGuesses []

function(start){
  $play = $('#play');
  $display = $('#display');
  $play.on('click', play);
  $('guess').on('submit' 'form' guess)

  function(play){
    make lyrics appear with the variable of blanks on random?
    randomise the lyrics-- tic tac toe
  }




}
// game to start.
//guess the song.

////when game starts you will have blank tiles and have to be filled with lettares A-Z, if letters are in the word keep going, if they are not then display hangman
//
//if song is correctly guessed then proceed onto next song
//if song is not guessed then hangman. 4 tries in total, head, body, legs, feet
//(make the hangman look like music artists...maybe randomise the order?male head, fmale body ect..)

//bonus, have a difficulty setting which keeps the amount of wrong answers from previous word.
//
