$(start);

var $play;
var $display;
var blanks;
// var guesses = [];
var totalGuesses = 0
// var wrongGuesses = [];
var lyrics;
var lyricsArray;
var randomIndex;
var randomLyrics;
var randomLyricsArray;
var lyricWithoutWord;
// var count;
var musicLyrics;
// var NumberOfChances;

function start(){
  $play    = $('#play');
  $display = $('#display');
  $play.on('click', play);
  $('#guess').on('submit','form', guess);


  function play(){
    lyrics            = musicLyrics[Math.floor(Math.random()* musicLyrics.length)];
    lyricsArray       = lyrics.split(' ');
    randomIndex       = Math.floor(Math.random()* lyricsArray.length);
    randomLyrics      = lyricsArray[randomIndex].tolowerCase();
    randomLyricsArray = randomLyrics.split(' ');
    blanks = '_'.repeat(randomLyrics.length).split(' ');

    lyricsArray[randomIndex] = blanks.join(' ');
    lyricWithoutWord = lyricsArray.join(' ');
    $display.html(lyricWithoutWord);
    buildInput();
    $play.hide();
    $display.fadeIn();
  }
  function guess(){
    event.preventDefault();
    var guess = $('form input[type=text]').val();
    var $h1 = $('h1');
    var oldTitle = $h1.html();
    var $guessArea = $('#guess');

    $('form input[type=text]').val(' ');

    if (randomLyricsArray.indexOf(guess) >=0) {
      while (randomLyricsArray.indexOf(guess) >=0) {
        blanks[randomLyricsArray.indexOf(guess)] = guess;
        randomLyricsArray[randomLyricsArray.indexOf(guess)] = null;
      }

      lyricsArray[randomIndex] = blanks.join(" ");
      lyricWithoutWord         = lyricsArray.join(' ');
      $display.html(lyricWithoutWord);

      var correct = randomLyricsArray.filter(function(letter) {
        return !!letter
      }).length

      if(correct === 0) {
        $h1.html('Holla!').fadeOut(4000, function(){
          $(this).html('BuzzCock').show();
          $play.show();
          $display.hide();
          $guessArea.empty();
        });
        return
      }
    } else {
      totalGuesses++;

      $h1.html("Oh man..... you are so off").fadeOut(3000, function() {
        $(this).html(oldTitle).show();
      });
    }
  }
  function buildInput() {
    var $guessArea = $('#guess');
    $guessArea.html('<form></form>');
    $guessArea.find('form').append("<input type='text' maxlength='1'>");
    $guessArea.find('form').append("<input type='submit' value='guess'>");
    }
}






//you want your guess function to look at randomLyrics & blanks so it knows weather the letters you type in are corect = guesses, if not wrongGuesses.
// guesses =
// totalGuesses = wrongGuesses = 10
// math to make it work? g











    // game to start.
    //guess the song.
    ////when game starts you will have blank tiles and have to be filled with lettares A-Z, if letters are in the word keep going, if they are not then display hangman
    //if song is correctly guessed then proceed onto next song
    //if song is not guessed then hangman. 4 tries in total, head, body, legs, feet
    //(make the hangman look like music artists...maybe randomise the order?male head, fmale body ect..)
    //bonus, have a difficulty setting which keeps the amount of wrong answers from previous word.

    //function display   which incorporates functions - start, play, guess
