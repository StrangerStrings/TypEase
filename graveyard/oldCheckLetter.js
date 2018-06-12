function checkLetter(letterCode){
   if (letterCode == 13){sentenceFinished();return;}
   if (String.fromCharCode(letterCode).toLowerCase() == answerLetters[wordCounter][letterCounter]){
      score++;
      updateScore();
      addCorrectLetter();
      nextLetter();
      wrongAttempts = 0;

      timeleft += letterReward;
   } else if(wrongAttempts==1){
      addIncorrectLetter()
      nextLetter();
      wrongAttempts = 0;
   }else {
      $('.span'+wordCounter+letterCounter).animate({bottom: '-4px'},40).animate({bottom: '0px'},40);
      wrongAttempts++;
      return;
   }

   if(letterCounter == answerLetters[wordCounter].length){
      removeCurrentWordClass();
      letterCounter = 0;
      wordCounter ++;
      timeleft += wordReward;

      if(wordCounter == answerLetters.length){
         setTimeout(sentenceFinished,260);
         timeleft += SentenceReward;

      }else{
         addCurrentWordClass();
         addCurrentLetterClass();
      }
   }
}
