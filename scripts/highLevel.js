

function sentenceFinished(){
   if(sprintMode){
      if (SetsBool ==  true){CarryOnSets();}
      if (SetsBool == false && sprintMode){decideIfChangeLetters();}

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
            currentWordIsTimed = false
            timedWordBools[wordCounter] = false;
            $('.timedWordBar' + (wordCounter)).animate(
                  { "width": 0, "margin-left": (timedWordWidth) }, 150)
            console.log('nono')
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
         currentWordIsTimed = false;
         timedWordBools[wordCounter] = false;
         $('.timedWordBar' + (wordCounter)).animate(
               { "width": 0, "margin-left": (timedWordWidth) },200)

            timeleft += SentenceReward
         $('.span' + wordCounter + (letterCounter - 1)).finish();
        $('.span' + wordCounter + (letterCounter - 1)).after('<div class="timedBonus"></div>')
         $('.timedBonus').animate({ top: '-1.9rem', width: '1rem', height: '1rem' }, 150).animate(
               { top: '-0.3rem', width: '0rem', height: '0rem'}, 350).animate(
                     { width: '0.4rem'},50,function(){
                        $('.timedBonus').remove();
               });
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
