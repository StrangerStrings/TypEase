function toSprintModePlay(){

   inPlay = true;
   $('.sprintText').html('');
   newSentence();

//    timeleft = 2000;
   MainLoop.start();

   $('.start-button').addClass('hidden')
   console.log('fart' + timeSpeed)
}

function toSprintModeText(){

   inPlay = false;
   MainLoop.stop();
   AddAllLetters();

   score = 0;
   updateScore();

   chanceRecharge = 0;
   drawRechargingChance();
   chancesLeft = 5;
   redrawChances();

      $('.letter-stnd').removeClass('letter-appear');
   $('span').text('');
   $('.infoText').html('');
   $('.sprintText').html('Ready?');


$('.lettersContainer div div').css({ 'margin-left': 0 , 'width':0})    
      timedWordBools = [false, false, false, false, false, false, false, false, false]
      currentWordIsTimed = false;

   timeleft = 1000;
   draw();
   $('.timerbar').removeClass('hidden');
//    $('.sprint').addClass('current-mode')
      $('.start-button').removeClass('hidden')
      $('.learnbox-left').addClass('hidden')
   $('.playbox-left').removeClass('hidden')
   


}



//point for correct letter, extra two for word, extra 4 for sentence, extra 4 for timedW








function decideIfChangeLetters(){
      vaar = Math.random();
      if (vaar < 0.2){console.log('donothing()');}
      else if (vaar < 0.9){howManyChangeLetters(); console.log('h');}
      else {StartSets();}
}



  function howManyChangeLetters() {
    multiplier = Math.min(3 + availableLettersMeasure / 2, 5);
    addition = Math.min(6, Math.max(1, availableLettersMeasure / 2));
    ActualLetters = Math.floor(Math.random() * multiplier + addition);
    if (ActualLetters > (5.9 + (availableLettersMeasure / 70))) { ActualLetters = 13 };
    ActualLetters *= 2;
    changeLetters()
  }


function changeLetters(){
   CurrentLetters = OnVowelArray.length + OnCon2Array.length + OnCon1Array.length;
   difference = ActualLetters - CurrentLetters;
   
   varr1 = Math.random() + Math.abs(difference/10);
   if (ActualLetters == 26){
      console.log('addAll');
      AddAllLetters();
   }else if (varr1 < 1.1){
      console.log('strightthere');
      addLetters(difference);
   }else if ( varr1 < 1.3){
      console.log('addremove');
      inbetweenNumber = Math.min(Math.floor((Math.random()*difference)+1),CurrentLetters);
      addLetters(-inbetweenNumber);
      addLetters(inbetweenNumber + difference);
   }else{
      console.log('reset');
      RemoveAllLetters();
      addLetters(ActualLetters);
   }
}

//addOrRemoveLetters
function addLetters(letters){

   if (letters < 0){
      vowelLength = OnVowelArray.length;
      vowelLengthcalc = Math.max(1,OnVowelArray.length);
      con2Length = OnCon2Array.length;
      con2Lengthcalc = Math.max(1,OnCon2Array.length);
      con1Length = OnCon1Array.length;
      con1Lengthcalc = Math.max(1,OnCon1Array.length);
      addOrRemove = -1;
      // console.log('removing');
      letters *= -1
   }else{
      vowelLength = OffVowelArray.length;
      vowelLengthcalc = Math.max(1,OffVowelArray.length);
      con2Length = OffCon2Array.length;
      con2Lengthcalc = Math.max(1,OffCon2Array.length);
      con1Length = OffCon1Array.length;
      con1Lengthcalc = Math.max(1,OffCon1Array.length);
      addOrRemove = 1;
      // console.log('adding');
   }


   var1 = Math.random();
   var2 = var1 * letters;
   var3 = var2 * (vowelLengthcalc * vowelLengthcalc * 6 * 15)/(con2Lengthcalc * con1Lengthcalc * 5 * 5);
   var4 = var3 * 15/26;
   var5 = Math.floor(var4+0.5);
   if(var5 > letters){var5 = letters;}
   if(var5 > vowelLength){var5 = vowelLength;}
   if(var5 < 0){var5 = 0;}
//    console.log('numberOfVowels: '+ addOrRemove*var5);

   car1 = Math.random();
   car2 = car1 * letters;
   car3 = car2 * (con2Lengthcalc * con2Lengthcalc * 5 * 15)/(vowelLengthcalc * con1Lengthcalc * 6 * 6);
   car4 = car3 * 9/26;
   car5 = Math.floor(car4+0.5);
   if(car5 < 0){car5 = 0;}
   if(car5 > con2Length){car5 = con2Length;}
   if(car5 > (letters - var5)){car5 = (letters - var5);}
//    console.log('numberOfCon2s: '+ addOrRemove*car5);

   bar1 = letters - car5 - var5;
   if(bar1 > con1Length){bar1 = con1Length;}
//    console.log('numberOfCon1s: '+ addOrRemove*bar1);

   AddVowels(var5 * addOrRemove);
   AddCon2s(car5 * addOrRemove);
   AddCon1s(bar1 * addOrRemove);
}

function AddVowels(amount){
   if (amount < 0){
      for (i = 0; i < -amount; i++) {
         vr1 = OnVowelArray.splice(Math.floor(Math.random()*OnVowelArray.length), 1).toString();
      //    console.log(vr1);
         turnOffLetter(vr1);
         OffVowelArray.push(vr1);}}
   else{
      for (i = 0; i < amount; i++) {
         vr1 = OffVowelArray.splice(Math.floor(Math.random()*OffVowelArray.length), 1).toString();
      //    console.log(vr1);
         turnOnLetter(vr1);
         OnVowelArray.push(vr1);
}}}

function AddCon2s(amount){
   if (amount < 0){
      for (i = 0; i < -amount; i++) {
         vr1 = OnCon2Array.splice(Math.floor(Math.random()*OnCon2Array.length), 1).toString();
         turnOffLetter(vr1);
      //    console.log(vr1);
         OffCon2Array.push(vr1);}}
   else{
      for (i = 0; i < amount; i++) {
         vr1 = OffCon2Array.splice(Math.floor(Math.random()*OffCon2Array.length), 1).toString();
         turnOnLetter(vr1);
      //    console.log(vr1);
         OnCon2Array.push(vr1);
}}}

function AddCon1s(amount){
   if (amount < 0){
      for (i = 0; i < -amount; i++) {
         vr1 = OnCon1Array.splice(Math.floor(Math.random()*OnCon1Array.length), 1).toString();
         turnOffLetter(vr1);
      //    console.log(vr1);
         OffCon1Array.push(vr1);}}
   else{
      for (i = 0; i < amount; i++) {
         vr1 = OffCon1Array.splice(Math.floor(Math.random()*OffCon1Array.length), 1).toString();
         turnOnLetter(vr1);
      //    console.log(vr1);
         OnCon1Array.push(vr1);
}}}













