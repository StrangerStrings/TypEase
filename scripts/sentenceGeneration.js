/* - - - - - - - - - - - - - - - - - -
sentenceGenerator - outputs array of words to 'answerLetters'.
wordGenerator     - forms an array of letters                      - randomly, thru sets or letterGenerator
letterGenerator   - chooses letters for words                      - mixes constonants and vowels for natural words

howManyWords    &   howManyLetters   -    maths functions for many. based on length and range (not working)
- - - - - - - - - - - - - - - - - -  */





function newSentence(){

   removeAllLetterClasses();

   wordCounter = 0;
   letterCounter = 0;

   sectenceGenerator();
   lettersOnScreen();

   addCurrentLetterClass();
   addCurrentWordClass();
}


function howManyWords() { return Math.max(Math.floor((Math.random() * sentenceLengthRange * 2) + 0.5) + sentenceLength - sentenceLengthRange, 1); }


/*
measures length of each v,c1 and c2 array,
decides how many words to have,
then cycles thru 'wordGenerator' for each new word.
(adds a space at end of each word apart from last)
then outputs to the array to 'answerLetters'
*/
function sectenceGenerator(){
   var arr = [];
   vowelLength = OnVowelArray.length;
   con1Length = OnCon1Array.length;
   con2Length = OnCon2Array.length;
    allLettersArray = OnVowelArray.concat(OnCon1Array,OnCon2Array)


//     var noOfWords = Math.floor(Math.random() * 6) + 2;
//    var noOfWords = 3;
   var noOfWords = howManyWords();

   for (i = 0; i < noOfWords; i++) {
      var word = wordGenerator();
      word.push(' ');
      arr[i] = word;
      if (timedWordBools[i]){
          //i'd like to make this dependant on more

      }
   }
   arr[noOfWords-1].pop();

    if (sprintMode && noOfWords > 2 && Math.random() > 0) {  //change to incoporate level in the number random must be greater than
        var whichWord = Math.floor(Math.random() * (noOfWords - 2)) + 1;
        if(arr[whichWord].length < 4){
            whichWord = Math.floor(Math.random() * (noOfWords - 2)) + 1;
            if (arr[whichWord].length < 4) {
                whichWord = Math.floor(Math.random() * (noOfWords - 2)) + 1;
            }
        }
        if(arr[whichWord].length > 4){
            timedWordBools[whichWord] = true
            timedWordTotalSize =
                (arr[whichWord].length * 15) + (Math.floor(Math.random() * 50));
            timedWordSize = parseInt(timedWordTotalSize);
        }
    }

   answerLetters = arr;
}








/*
decides method of letter generation.
if just one letter, trys to take a vowel (more natural language)
if setsBool==true, takes random letters from sets,
otherwise set variables m1,m2,m3,m4 based on vowels/constonants Generation
and loop thru 'letterGenerator' for correct 'noOfLetters'
vcProbability is reset at begining of each word (vowel-constonant probabilty)
*/
function wordGenerator(){
   vcProbability = 0.35;
   var ar = [];
    // var noOfLetters = Math.floor(Math.random() * 8) + 1;   //relate this 8 to the gameLevel
   var noOfLetters = howManyLetters()

    if(Math.random()>0.2 && noOfLetters>1){
        console.log('trying')
        var AWarr = actualWords[noOfLetters]
        for(var b=0; b<60 ;b++){
            var woord = AWarr[Math.floor(Math.random() * AWarr.length)]
            var allLettersAreAvailable = true;
            for(var a = 0; a < woord.length ;a++){
                if(allLettersArray.indexOf(woord[a]) == -1){
                    allLettersAreAvailable = false
                }
            }
            if (allLettersAreAvailable){
                // console.log('worked  '+i)
                return(JSON.parse(JSON.stringify(woord)))
            }
        }
    }
   // if (randomLetterBool == true){
   //    for (j = 0; j < noOfLetters; j++) {
   //       var rand = Math.floor(Math.random()*AllOnLetters.length);
   //       ar.push(AllOnLetters[rand]);}

   if (noOfLetters == 1 && vowelLength != 0){
      var rand = Math.floor(Math.random()*OnVowelArray.length);
      ar[0] = OnVowelArray[rand];
   }

   else if(SetsBool == true){
      var rand = Math.floor(Math.random()*OnSetofSets.length);
      SetForWord = OnSetofSets[rand];
      for (j = 0; j < noOfLetters; j++) {
         var randd = Math.floor(Math.random()*OnSetofSets[rand].length);
         ar.push(OnSetofSets[rand][randd]);
      }
   }

   else{
      var m1, m2 , m3, m4;

      if ((vowelLength*4.2)    < (con1Length+con2Length)) {m1 = 0.3; m2 = 0.5; m3 = 0.4;}
      else if ((vowelLength)   > (con1Length+con2Length)) {m1 = 0.8; m2 = 0.2; m3 = 0.6;}
      else if ((vowelLength*2) > (con1Length+con2Length)) {m1 = 0.6; m2 =0.35; m3 = 0.6;}
      else {m1 = 0.5; m2 = 0.5; m3 = 0.7;}
      m4 = (con1Length * 1.15) / (con1Length + con2Length);

      for (j = 0; j < noOfLetters; j++) {
         ar.push(letterGenerator(m1,m2,m3,m4));
      }
   }
   return ar;
}







/*
makes a 'decision' based on a random number and 'vcProbability',
which is changed by what has come before (v or c).
Checks the relevant array is not empty then takes a letter,
before add/sub the vcProbabilty to make it less likely for that to come up next time.
(doesn't need to check length of c1 or c2 as m1,2,3,4 maths sorts that)
*/
function letterGenerator(m1,m2,m3,m4) {

   var decision = vcProbability + Math.random() ;
   if (( (decision < m1 && vowelLength > 0) || (con1Length == 0 && con2Length == 0) )){
      vcProbability += m2;
      var rand = Math.floor(Math.random()*vowelLength);
      return OnVowelArray[rand];
   }else{
      vcProbability -= m3;
      var randd = Math.random();
      if (randd < m4){
         var rand = Math.floor(Math.random()*con1Length);
         return OnCon1Array[rand];
      }
      else{
         var rand = Math.floor(Math.random()*con2Length);
        //  console.log('con2');
         return OnCon2Array[rand];
      }
   }
}



//these are dodgy, don't really work


function howManyLetters() {return Math.max(Math.floor((Math.random()*wordLengthRange*2)+0.5)+wordLength-wordLengthRange,1);}









//
