function toLearnModePlay(){
   $('.infoText').html('');
   chancesLeft = startingChances;
   redrawChances();
   newSentence();
   inPlay = true;
   if (timerBool){
      $('.timerbar').removeClass('hidden');
      timeleft = 1000;
      MainLoop.start();
   }
}

function toLearnModeText(){

   inPlay = false;
   MainLoop.stop();

   loadLevelData(learnLevels[learnLevel][learnSubLevel]);
   $('.infoText').html(learnInstructions);

   $('.sprintText').html('');
   $('span').html('');

   chanceRecharge = 0;
   drawRechargingChance();
   redrawChances();

   //maybe if timerbool then{}
   $('.timerbar').addClass('hidden');

}

function learnLevelUp(){
   learnSubLevel ++;
   if (learnSubLevel > learnLevels[learnLevel].length){
      learnLevel ++;
      learnSubLevel = 1;
   }
}


function loadLevelData (level){
   RemoveAllLetters();
   var letters = level.letters;
   for (i=0;  i < letters.vowels.length ;i++) {
      var letter = letters.vowels[i];
      OnVowelArray.push(letter);
      turnOnLetter(letter);
   }
   for (i=0;  i < letters.con2s.length ;i++) {
      var letter = letters.con2s[i];
      OnCon2Array.push(letter);
      turnOnLetter(letter);
   }
   for (i=0;  i < letters.con1s.length ;i++) {
      var letter = letters.con1s[i];
      OnCon1Array.push(letter);
      turnOnLetter(letter);
   }

   randomLetterBool     = level.randomLetterBool;
   startingChances      = level.startingChances;

   var lengths = level.lengths;
   sentencesLeft        = lengths.sentencesAmount;
   sentenceLength       = length.sentenceLength ;
   sentencesLengthRange = length.sentenceLengthRange ;
   wordLength           = length.wordLength ;
   wordLengthRange      = length.wordLengthRange ;


   timerBool         = level.timerBool;
   if ( timerBool == true){
      var timerInfo = level.timerInfo;
      timeSpeed           = timerInfo.timeSpeed ;
      letterReward        = timerInfo.letterReward ;
      wordReward          = timerInfo.wordReward ;
      SentenceReward      = timerInfo.SentenceReward ;
      letterPenalty       = timerInfo.letterPenalty ;
   }
   lastLevelBool = level.lastLevelBool;

   learnInstructions = level.instructions;
}











// SentenceLength       = 5;
// SentencesLengthRange = 1;
// WordLength           = 6;
// WordLengthRange      = 2;

// var noOfWords = Math.max(Math.floor((Math.random()*SentenceLengthRange*2)+0.5)+SentenceLength-SentenceLengthRange,1);
//
// var noOfLetters = Math.max(Math.floor((Math.random()*WordLengthRange*2)+0.5)+WordLength-WordLengthRange,1);
