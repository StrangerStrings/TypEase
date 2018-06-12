

function sentenceFinished(){
   // if (SetsBool ==  true){CarryOnSets();}
   // if (SetsBool == false){decideIfChangeLetters();}
   if (sprintMode == true){
      howManyChangeLetters();
   }

   if (learnMode == true){
      sentencesLeft --;
      console.log(sentencesLeft);
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
   if (String.fromCharCode(letterCode).toLowerCase() == answerLetters[wordCounter][letterCounter]){
      score++;
      updateScore();
      addCorrectLetter();
      nextLetter();  //letter counter increases
      timeleft += letterReward;
      
      if(letterCounter==1 && timedWordBools[wordCounter]){
            currentWordIsTimed == true;
            console.log('timed start now')
      }

   } else {
      addIncorrectLetter()
      nextLetter();
      if (chancesLeft == 0){
         if (learnMode == true){
            toLearnModeText();
         }else {
            timeleft -= letterPenaltyBig; }
      }else {
         timeleft -= letterPenalty;
         chancesLeft --;
         redrawChances();
      }
   }


   if(letterCounter == answerLetters[wordCounter].length){
      removeCurrentWordClass();
      letterCounter = 0;
      wordCounter ++;
      timeleft += wordReward;
      if (currentWordIsTimed){
            // animation for little ball (abs div over 2nd last letter)
            // set size to zero, redraw, maybe just the redraw..
            // point bonus
            // relevant Bools == false
      }

      if(wordCounter == answerLetters.length){
         setTimeout(sentenceFinished,260);
         timeleft += SentenceReward;

      }else{
         addCurrentWordClass();
         addCurrentLetterClass();
      }
   }
}
