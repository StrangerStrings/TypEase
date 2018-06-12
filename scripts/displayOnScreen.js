/* - - - - - - - - - - - - - - - -

- - - - - - - - - - - - - - - -  */

function redrawChances(){
   hideChances();
   for( i=1 ; i<=chancesLeft ; i++){
      $('.chance'+i).show();}
}
function hideChances(){
   for( i=1 ; i<=5 ; i++){
      $('.chance'+i).hide();}
}
function drawRechargingChance(){
      $('.chanceblocker').css({'height': 0.6 * (100-chanceRecharge) / 100 +'rem'});
      // $('.chanceblocker').css({'height': 0.5 * chanceRecharge +'rem'});
      // $('.chanceblocker').css({'height': 0.5  +'rem'});
}





function updateScore(){
   $('.score').html(score);
}


function lettersOnScreen(){
//    console.log(answerLetters);
   // $('span').text('');
   for (i = 0; i < answerLetters.length; i++){
    for(j = 0; j < answerLetters[i].length; j++){
        // $('.span'+i+j).text(answerLetters[i][j].toLowerCase());
        console.log('poo')
      }
      if (timedWordBools[i]){
            // add together the lengths of all the letters
            // something like : for(j){ wordWidth += span+i+j .width }

            // then set the width of the div that's attached to each span+i+0 to this.
            // It's already 'showing', it's just it's width is zero.
            // absolutely mess with css
      }
    }
}




function nextLetter(){
   $('.span'+wordCounter+letterCounter).removeClass('currentletter');
   letterCounter ++;
   $('.span'+wordCounter+letterCounter).addClass('currentletter');
}



function removeCurrentWordClass(){
   for (i = 0; i < answerLetters[wordCounter].length; i++){
   $('.span'+wordCounter+i).removeClass('currentWord');}
}
function removeAllLetterClasses(){
   $('span').removeClass('correctletter incorrectletter currentletter');
}




function addCurrentLetterClass(){
   $('.span'+wordCounter+letterCounter).addClass('currentletter');
}
function addCurrentWordClass(){
   for (i = 0; i < answerLetters[wordCounter].length; i++){
   $('.span'+wordCounter+i).addClass('currentWord');}
}



function addCorrectLetter(){
   $('.span'+wordCounter+letterCounter).addClass('correctletter');
   $('.span'+wordCounter+letterCounter).animate({bottom: '17px'},150).animate({bottom: '0px'},220);
}
function addIncorrectLetter(){
   $('.span'+wordCounter+letterCounter).addClass('incorrectletter');
   $('.span'+wordCounter+letterCounter).animate({bottom: '-12px'},80).animate({bottom: '0px'},120);
}
