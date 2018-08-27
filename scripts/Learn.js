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

   learnSubLevel ++;
   if (learnSubLevel > learnLevels[learnLevel].length-1){
      learnLevel ++;
      learnSubLevel = 1;
   }
   console.log(learnLevel)
   console.log(learnSubLevel)
   console.log(highestLevel)
   
   if(learnLevel==3 && learnSubLevel==1 && highestLevel[0]==2 && highestLevel[1]==13 ){
       $('.sprint').removeClass('locked-mode').addClass('just-unlocked')
       setTimeout(function(){
        $('.sprint').removeClass('just-unlocked')
       },300)
   }

    $('.button-learn-right').removeClass('locked-level')
    $('.button-learn-left').removeClass('locked-level')

    if (lvlToNum(highestLevel[0], highestLevel[1]) < lvlToNum(learnLevel, learnSubLevel)) {
        highestLevel = [learnLevel, learnSubLevel]
     }
    if (lvlToNum(highestLevel[0], highestLevel[1]) == lvlToNum(learnLevel, learnSubLevel)){
        $('.button-learn-right').addClass('locked-level')
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
   //write function here that takes level.letters, 
   //  which is all three types mixed together,
   //and ends up with three new arrays (var's defined in func)
   //it will do this by..
   // so, it takes an array that has all three types, 
   //compares them to each array in turn, 
   //and pushes it to relavant array.
   //i can stop this bullshit below, turn on all the letters with the same loop and originall letters array
   //then after they've been sorted, just say onVowelArray = vowels etc.
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

   //    for (i=0;  i < letters.vowels.length ;i++) {
   //       var letter = letters.vowels[i];
   //       OnVowelArray.push(letter);
   //       turnOnLetter(letter);
   //    }
   //    for (i=0;  i < letters.con2s.length ;i++) {
   //       var letter = letters.con2s[i];
   //       OnCon2Array.push(letter);
   //       turnOnLetter(letter);
   //    }
   //    for (i=0;  i < letters.con1s.length ;i++) {
   //       var letter = letters.con1s[i];
   //       OnCon1Array.push(letter);
   //       turnOnLetter(letter);
   //    }




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











// SentenceLength       = 5;
// SentencesLengthRange = 1;
// WordLength           = 6;
// WordLengthRange      = 2;

// var noOfWords = Math.max(Math.floor((Math.random()*SentenceLengthRange*2)+0.5)+SentenceLength-SentenceLengthRange,1);
//
// var noOfLetters = Math.max(Math.floor((Math.random()*WordLengthRange*2)+0.5)+WordLength-WordLengthRange,1);
