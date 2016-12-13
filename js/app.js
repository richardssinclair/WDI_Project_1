$(start);
var $play;
var $display;
var blanks;
// var guesses = [];
var totalGuesses = 0;
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
var letters

function start(){
  $play    = $('#play');
  $display = $('#display');
  $play.on('click', play);
  $('#guess').on('submit','form', guess);
  $('#reset').on('click', function(){
    location.reload();
  });

  function play(){
    lyrics            = musicLyrics[Math.floor(Math.random()* musicLyrics.length)];
    lyricsArray       = lyrics.split(' ');
    randomIndex       = Math.floor(Math.random()* lyricsArray.length);
    randomLyrics      = lyricsArray[randomIndex].toLowerCase();
    randomLyricsArray = randomLyrics.split('');
    blanks = '_'.repeat(randomLyrics.length).split('');
    console.log(randomLyrics)

    lyricsArray[randomIndex] = blanks.join(' ');
    lyricWithoutWord = lyricsArray.join(' ');
    $display.html(lyricWithoutWord);
    buildInput();
    $play.hide();
    $display.fadeIn();
  }
  function guess(){
    event.preventDefault();
    var guess = this.value.toLowerCase();
    console.log(guess);
    var $h1 = $('h1');
    var oldTitle = $h1.html();
    var $guessArea = $('#guess');

    $('form input[type=text]').val(' ');

    if (randomLyricsArray.indexOf(guess) >=0) {
      while (randomLyricsArray.indexOf(guess) >=0) {
        blanks[randomLyricsArray.indexOf(guess)] = guess;
        randomLyricsArray[randomLyricsArray.indexOf(guess)] = null;
      }

      lyricsArray[randomIndex] = blanks.join(' ');
      lyricWithoutWord         = lyricsArray.join(' ');
      $display.html(lyricWithoutWord);

      var correct = randomLyricsArray.filter(function(letter) {
        return !!letter;
      }).length;

      if(correct === 0) {
        setTimeout(location.reload.bind(location), 3800);
        $h1.html('Holla!').fadeOut(4000, function(){
          $(this).html('BuzzCock').show();
          $play.show();
          $display.hide();
          $guessArea.empty();
        });
        return;
      }
    } else {
      totalGuesses++;

      $h1.html('Oh man..... you are so off').fadeOut(3000, function() {
        $(this).html(oldTitle).show();
      
      });
    }
  }
  function buildInput() {
    var $guessArea = $('#guess');
    $guessArea.html('<form></form>');
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ`'.split('');
    for (var i = 0; i < letters.length; i++) {
      var button = "<input type='button' value=" + letters[i] + ">"
      $guessArea.find('form').append(button);
    }
    $('input').on('click', guess);
  }
}























//
// $(start);
// //get the lyrics into the p display
//
// function start(){
//   //$('#display') equivelent to get elemant by id,
//   var display = $('#display');
//   var lyrics = musicLyrics[Math.floor(Math.random()* musicLyrics.length)];
//   display.html(lyrics);
//
//   lyricsArray = lyrics.split(' ');
//   randomIndex       = Math.floor(Math.random()* lyricsArray.length);
//   randomLyrics      = lyricsArray[randomIndex].toLowerCase();
//   randomLyricsArray = randomLyrics.split('');
//   blanks = '_'.repeat(randomLyrics.length).split('');
//   lyricsArray[randomIndex] = blanks.join(' ');
//   display.html(lyricsArray.join(' '));
//
//   buildInput();
// }
//
//
// function buildInput() {
//   var guessArea = $('#guess');
//   guessArea.html('<form></form>');
//   letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
//   for (var i = 0; i < letters.length; i++) {
//     var button = "'<input type='button' value=" + letters[i] + ">'"
//     guessArea.find('form').append(button);
//
//   }
//      $('input').on('click', guess);
//
// }
// function guess(){
//   console.log(this)
// }
