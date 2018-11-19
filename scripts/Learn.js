function toLearnModePlay(){
   $('.infoText').html('');
   chancesLeft = startingChances;
   redrawChances();
   newSentence();
   inPlay = true;
   if (timerBool){
       $('.timerbar').removeClass('hidden');
       $('.letter-stnd').addClass('letter-appear');
      timeleft = 1000;
      MainLoop.start();

   }
    $('.try-again').addClass('hidden');
    $('.start-button').addClass('hidden')
}


function toLearnModeText(){

   inPlay = false;
   MainLoop.stop();

   loadLevelData(learnLevels[learnLevel][learnSubLevel]);
   $('.infoText').html(learnInstructions);

   $('.sprintText').html('');
   $('span').text('');

    $('.letter-stnd').removeClass('letter-appear');
$('.learnbox-left h4').text(learnLevel+'.'+learnSubLevel)

   chanceRecharge = 0;
   drawRechargingChance();
   redrawChances();

    $('.lettersContainer div div').css({ 'margin-left': 0, 'width': 0 })
    timedWordBools = [false, false, false, false, false, false, false, false, false]
    currentWordIsTimed = false;

   //maybe if timerbool then{}
   $('.timerbar').addClass('hidden');

    $('.start-button').removeClass('hidden')
    $('.learnbox-left').removeClass('hidden')
    $('.playbox-left').addClass('hidden')
}


function learnLevelUp(){

    if(learnLevel == 10 && learnSubLevel == 10){
        return
   }

   learnSubLevel ++;
   if (learnSubLevel > learnLevels[learnLevel].length-1){
      learnLevel ++;
      learnSubLevel = 1;
      console.log(learnLevel, learnSubLevel)
   }
   
   if(learnLevel==3 && learnSubLevel==1 && highestLevel[0]==2 && highestLevel[1]==13 ){
       $('.sprint').removeClass('locked-mode').addClass('just-unlocked')
       setTimeout(function(){
        $('.sprint').removeClass('just-unlocked')
       },300)
   }

    $('.button-learn-right').removeClass('locked-level').removeClass('last-level')
    $('.button-learn-left').removeClass('locked-level')

    if (lvlToNum(highestLevel[0], highestLevel[1]) < lvlToNum(learnLevel, learnSubLevel)) {
        highestLevel = [learnLevel, learnSubLevel]
        localStorage.setItem('highestLevel', JSON.stringify(highestLevel))
     }
    if (lvlToNum(highestLevel[0], highestLevel[1]) == lvlToNum(learnLevel, learnSubLevel)){
        $('.button-learn-right').addClass('locked-level')
   }
   if(learnLevel == 10 && learnSubLevel == 10){
        $('.button-learn-right').addClass('last-level')
   }

    

}

function learnLevelDown() {
    learnSubLevel--;
    $('.button-learn-right').removeClass('locked-level')
    if(learnLevel == 1 && learnSubLevel == 1){
        $('.button-learn-left').addClass('locked-level')
    }
    if (learnSubLevel == 0) {
        learnLevel--;
        learnSubLevel = learnLevels[learnLevel].length-1;
    }
}


function lvlToNum(a,b){
    return (a*100)+b
}





function loadLevelData (level){
   RemoveAllLetters();
   
   OnVowelArray = []; OnCon1Array= [] ; OnCon2Array = [];
   for (i=0; i < level.letters.length; i++){
       var l = level.letters[i]
       turnOnLetter(l)
        if (ReferenceVowelArray.indexOf(l != -1)){
            OnVowelArray.push(l)
        }else if (ReferenceCon1Array.indexOf(l != -1)){
            OnCon1Array.push(l)
        }else{
            OnCon2Array.push(l)
        }
   }

   randomLetterBool     = level.randomLetterBool;
   startingChances      = level.startingChances;

   var lengths = level.lengths;
   sentencesLeft        = lengths.sentencesAmount;
   sentenceLength       = lengths.sentenceLength ;
   sentencesLengthRange = lengths.sentenceLengthRange ;
   wordLength           = lengths.wordLength ;
   wordLengthRange      = lengths.wordLengthRange ;


   timerBool         = level.timerBool;
   if ( timerBool == true){
      var timerInfo = level.timerInfo;
      timeSpeed           = timerInfo.timeSpeed ;
      letterReward        = timerInfo.letterReward ;
      wordReward          = timerInfo.wordReward ;
      SentenceReward      = timerInfo.SentenceReward ;
      letterPenalty       = timerInfo.letterPenalty ;
   }

   learnInstructions = level.instructions;
}








