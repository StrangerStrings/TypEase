

function sentenceFinished(){
   wordCounter = 0;
   letterCounter = 0;
   // if (SetsBool ==  true){CarryOnSets();}
   // if (SetsBool == false){beginoo();}
   // StartChangingLetters();

   sectenceGenerator();
   lettersOnScreen();

   removeLetterClasses();
   addCurrentWordClass();
   addCurrentLetter();
}


function wordFinished(){
   letterCounter = 0;
   removeCurrentWordClass();
   wordCounter ++;
   addCurrentWordClass();
   addCurrentLetter();
}




function checkLetter(letterCode){
   if (letterCode == 13){sentenceFinished();return;}
   if (String.fromCharCode(letterCode).toLowerCase() == answerLetters[wordCounter][letterCounter]){
      score++;
      updateScore();
      addCorrectLetter();
      nextLetter();
      wrongAttempts = 0;

      timeleft += 20;
   } else if(wrongAttempts==1){
      addIncorrectLetter()
      nextLetter();
      // $('article').animate({marginLeft: '15px'},40).animate({marginLeft: '-15px'},90).animate({marginLeft: '0px'},40);
      // $('article').animate({marginLeft: '10px'},20).animate({marginLeft: '-5px'},50).animate({marginLeft: '0px'},30);
      // $('article').animate({marginLeft: '30px'},30).animate({marginLeft: '-60px'},100).animate({marginLeft: '0px'},40);
      wrongAttempts = 0;
   }else {
      $('.span'+wordCounter+letterCounter).animate({bottom: '-4px'},40).animate({bottom: '0px'},40);
      // $('article').animate({marginLeft: '10px'},20).animate({marginLeft: '-5px'},50).animate({marginLeft: '0px'},30);
      wrongAttempts++;
      return;
   }

   if(letterCounter == answerLetters[wordCounter].length){

      if(wordCounter+1 == answerLetters.length){
         setTimeout(sentenceFinished,260);
         timeleft += 200;

      }else{
         wordFinished();
         timeleft += 50;
      }
   }
}


//below with bits about learn and chancesLeft

// function checkLetter(letterCode){
//    if (letterCode == 13){sentenceFinished();return;}
//    if (String.fromCharCode(letterCode).toLowerCase() == answerLetters[wordCounter][letterCounter]){
//       score++;
//       updateScore();
//       addCorrectLetter();
//       nextLetter();
//       wrongAttempts = 0;
//       timeleft += 20;
//
//    }else {
//       addIncorrectLetter()
//       nextLetter();
//       if (chancesLeft == 0){
//          if (LearnMode == true){
//             toLearnModeText();
//          }else {
//             timeleft -= letterPenaltyBig; }
//       }else {
//          timeleft -= letterPenalty;
//          chancesLeft--;
//          redrawChances();
//    }}
//
//    if(letterCounter == answerLetters[wordCounter].length){
//       removeCurrentWordClass();
//       letterCounter = 0;
//       wordCounter ++;
//       timeleft += 50;
//
//       if(wordCounter == answerLetters.length){
//          setTimeout(sentenceFinished,260);
//          setTimeout(removeLetterClasses,260);
//          setTimeout(addCurrentWordClass,261);
//          setTimeout(addCurrentLetterClass,263);
//          timeleft += 200;
//          if (LearnMode == true){
//             SentencesLeft --;
//             if (SentencesLeft == 0){
//                //sublevel++
//                GetLevelInfo();
//                toLearnModeText();
//             }
//          }
//          return;
//       }
//       addCurrentWordClass();
//       $('.span'+wordCounter+letterCounter).addClass('currentletter');
//
//       }
// }
