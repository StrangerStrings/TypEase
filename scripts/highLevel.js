

function sentenceFinished(){
   if(sprintMode){
      if (SetsBool ==  true){CarryOnSets();}
      if (SetsBool == false){decideIfChangeLetters();}

      $('.lettersContainer div div').css({'margin-left':0, 'width':0})
   }



   if (learnMode ){
      sentencesLeft --;
      if (sentencesLeft == 0){
         learnLevelUp();
         toLearnModeText();
         return;
      }
   }

   newSentence();
}



function startGame(){
   if     (sprintMode){toSprintModePlay();}
   else if (learnMode) {toLearnModePlay();}
}





function checkLetter(letterCode){
   if (letterCode == 13){sentenceFinished();return;}

   if (letterCounter == 0 && timedWordBools[wordCounter]) {
         currentWordIsTimed = true;
   }

   //correct answer
   if (String.fromCharCode(letterCode).toLowerCase() == answerLetters[wordCounter][letterCounter]){
      score++;
      timeleft += letterReward;

      addCorrectLetter();
      nextLetter();


   //incorrect answer
   } else {
      if (currentWordIsTimed) {
            timedWordFail();
      }
      addIncorrectLetter()
      nextLetter();
      if (chancesLeft == 0){
         if (learnMode == true) {
            removeAllLetterClasses();
            $('.try-again').removeClass('hidden');
            toLearnModeText();
         }else {
            timeleft -= letterPenaltyBig; }
      }else {
         timeleft -= letterPenalty;
         chancesLeft --;
         redrawChances();
      }


   }

   //timedWord success
   if (currentWordIsTimed && letterCounter == (answerLetters[wordCounter].length-1)) {
         timedWordSuccess();
   }

   //end of word
   if(letterCounter == answerLetters[wordCounter].length){
      removeCurrentWordClass();
      letterCounter = 0;
      wordCounter ++;
      timeleft += wordReward;

      //end of sentence
      if(wordCounter == answerLetters.length){
         setTimeout(sentenceFinished,260);
         timeleft += SentenceReward;

      }else{
         addCurrentWordClass();
         addCurrentLetterClass();
      }
   }
   
      if (sprintMode) { updateScore();}
   
}




