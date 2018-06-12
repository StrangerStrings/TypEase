$( document ).ready(function() {
   $('.appletter, .appring').hide();
   $('.appletter, .appring').css("display","inline-block");
   $('.appletter, .appring').hide();

   function updateScore(){
   $('.score').html(score);}

   MainLoop.setUpdate(updategame).setDraw(draw).setSimulationTimestep(60);

   var answerLetters = [];

   var OnVowelArray = ['a','e','i','o','u'];
   var OnCon1Array = ['w','r','t','p','s','d','f','g','h','k','l','c','b','n','m'];
   var OnCon2Array = ['q','y','j','z','x','v'];

   var OffVowelArray = [];                            //total:  5
   var OffCon2Array  = [];                            //total:  6
   var OffCon1Array  = [];

   var ReferenceVowelArray = ['a','e','i','o','u'];
   var ReferenceCon1Array = ['w','r','t','p','s','d','f','g','h','k','l','c','b','n','m'];
   var ReferenceCon2Array = ['q','y','j','z','x','v'];

   //toDo: split variables into sections with comment at the top of each
   var SetsBool = false;
   var vcProbability = 0.8;
   var wordCounter = 0;
   var letterCounter = -1;
   var wrongAttempts = 0;
   var score = 0 ;
   var highscore = 0 ;
   var timeleft;
   var GLcounter = 0;
   var GameLevel = 0;
   var CurrentLetters;
   var BeforeGameLevel = 0;
   var chancesLeft;
   var inPlay = true;

   function updategame(){
      timeleft -= 3;
      GLcounter ++;
      if (GLcounter > 130){
         GLcounter = 0;
         GameLevel++;
      }
      if (timeleft >1000){
         score++;
         timeleft = 1000;
         $('.timerbar').animate({backgroundColor: '#7a71f4'},200).animate({backgroundColor: '#F1786D'},200);
      }
      if (timeleft <=0){
         MainLoop.stop();
         if (score > highscore){
            highscore = score;
            $('.highscore').html(highscore);
         }
         score = 0;
         updateScore();
      }
   }

   function draw(){
      $('.timerbar').css("width", timeleft*(240/1000))
   }


   function sectenceGenerator(){
      var arr = [];
      var noOfWords = Math.floor(Math.random()*6)+2;
      var AllOnLetters = OnVowelArray.concat(OnCon1Array, OnCon2Array);
      for (i = 0; i < noOfWords; i++) {
         var word = wordGenerator();
         word.push(' ');
         arr[i] = word;
      }
      arr[noOfWords-1].pop();
      answerLetters = arr;}

   function wordGenerator(){
      var ar = [];
      var noOfLetters = Math.floor(Math.random()*8)+1;

      if (randomLetterBool == true){
         for (j = 0; j < noOfLetters; j++) {
            var rand = Math.floor(Math.random()*AllOnLetters.length);
            ar.push(AllOnLetters[rand]);}

      }else if (noOfLetters == 1){
         var rand = Math.floor(Math.random()*OnVowelArray.length);
         ar[0] = OnVowelArray[rand];

      }else if(SetsBool == true){
         var rand = Math.floor(Math.random()*OnSetofSets.length);
         SetForWord = OnSetofSets[rand];
         for (j = 0; j < noOfLetters; j++) {
            var randd = Math.floor(Math.random()*OnSetofSets[rand].length);
            ar.push(OnSetofSets[rand][randd]);}

      }else{
         for (j = 0; j < noOfLetters; j++) {
            ar.push(letterGenerator(vcProbability));
         }
      }
      return ar;}

   function letterGenerator(vcp) {

      var decision = Math.floor(vcp + Math.random()) ;          //random number plus vcp
      if (decision <= 0 && OnVowelArray.length > 0){
         console.log('vowelLength:' + OnVowelArray.length);        //
         vcProbability += 0.5;
         var rand = Math.floor(Math.random()*OnVowelArray.length);
         return OnVowelArray[rand];
      }else{
         vcProbability -= 0.7;
         var randd = Math.random();
         if ( (OnCon1Array.length > 0) && (randd < 0.83 || OnCon2Array.length == 0) ){
            console.log('con1Length:' + OnCon1Array.length);
            var rand = Math.floor(Math.random()*OnCon1Array.length);
            return OnCon1Array[rand];
         }
         else{
            if (OnCon2Array.length > 0) {
            console.log('con2Length:' + OnCon2Array.length);
            var rand = Math.floor(Math.random()*OnCon2Array.length);
            return OnCon2Array[rand];
            }else{
               var rand = Math.floor(Math.random()*OnVowelArray.length);
               return OnVowelArray[rand];
         }
      }}}



   function lettersOnScreen(){
      console.log(answerLetters);
      $('span').html('');
      for (i = 0; i < answerLetters.length; i++){
       for(j = 0; j < answerLetters[i].length; j++){
           $('.span'+i+j).html(answerLetters[i][j].toLowerCase());
   }}}

   function nextLetter(){
      $('.span'+wordCounter+letterCounter).removeClass('currentletter');
      letterCounter ++;
      $('.span'+wordCounter+letterCounter).addClass('currentletter');
   }

   function removeCurrentWordClass(){
      for (i = 0; i < answerLetters[wordCounter].length; i++){
      $('.span'+wordCounter+i).removeClass('currentWord');}
   }
   function addCurrentWordClass(){
      for (i = 0; i < answerLetters[wordCounter].length; i++){
      $('.span'+wordCounter+i).addClass('currentWord');}
   }
   function addCorrectLetter(){
      $('.span'+wordCounter+letterCounter).addClass('correctletter');
      $('.span'+wordCounter+letterCounter).animate({bottom: '17px'},150).animate({bottom: '0px'},220);
   }
   function addIncorrectLetter(){
      $('.span'+wordCounter+letterCounter).addClass('incorrectletter');
      $('.span'+wordCounter+letterCounter).animate({bottom: '-12px'},80).animate({bottom: '0px'},120);
   }
   function addCurrentLetterClass(){
      $('.span'+wordCounter+letterCounter).addClass('currentletter');
   }
   function removeLetterClasses(){
      $('span').removeClass('correctletter incorrectletter currentletter');
   }

   function sentenceFinished(){
      wordCounter = 0;
      StartChangingLetters();
      sectenceGenerator();
      lettersOnScreen();
      letterCounter = -1;
      nextLetter();}





   function beginoo(){
      if (GameLevel > BeforeGameLevel){
         BeforeGameLevel = GameLevel;
         vaar = Math.random();
         if (vaar < 0.2){console.log('donothing()');}
         else if (vaar < 0.9){StartChangingLetters();}
         else {console.log('StartSets()');}
      }
   }

   function StartChangingLetters(){
      multiplier = Math.min(3+GameLevel/2,5);
      addition = Math.min(6,Math.max(1,GameLevel/2));
      ActualLetters = Math.floor(Math.random()*(Math.min(3+GameLevel/2,5))+(Math.min(6,Math.max(1,GameLevel/2))));
      if (ActualLetters > (5.9 + (GameLevel/70) ) ){ActualLetters = 13};
      ActualLetters *= 2;
      console.log(ActualLetters);
      ChangeLetters();
   }


   function ChangeLetters(){
      CurrentLetters = OnVowelArray.length + OnCon2Array.length + OnCon1Array.length;
      difference = ActualLetters - CurrentLetters;
      varr1 = Math.random() + Math.abs(difference/10);
      console.log(varr1);
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


   function addLetters(letters){

      if (letters < 0){
         vowelLength = Math.max(1,OnVowelArray.length);
         con2Length = Math.max(1,OnCon2Array.length);
         con1Length = Math.max(1,OnCon1Array.length);
         addOrRemove = -1;
         console.log('removing');
         letters *= -1
      }else{
         vowelLength = Math.max(1,OffVowelArray.length);
         con2Length = Math.max(1,OffCon2Array.length);
         con1Length = Math.max(1,OffCon1Array.length);
         addOrRemove = 1;
         console.log('adding');
      }


      var1 = Math.random();
      var2 = var1 * letters;
      var3 = var2 * (vowelLength * vowelLength * 6 * 15)/(con2Length * con1Length * 5 * 5);
      var4 = var3 * 15/26;
      var5 = Math.floor(var4+0.5);
      if(var5 > letters){var5 = letters;}
      if(var5 > vowelLength){var5 = vowelLength;}
      if(var5 < 0){var5 = 0;}
      console.log('numberOfVowels: '+ addOrRemove*var5);

      car1 = Math.random();
      car2 = car1 * letters;
      car3 = car2 * (con2Length * con2Length * 5 * 15)/(vowelLength * con1Length * 6 * 6);
      car4 = car3 * 9/26;
      car5 = Math.floor(car4+0.5);
      if(car5 < 0){car5 = 0;}
      if(car5 > con2Length){car5 = con2Length;}
      if(car5 > (letters - var5)){car5 = (letters - var5);}
      console.log('numberOfCon2s: '+ addOrRemove*car5);

      bar1 = letters - car5 - var5;
      if(bar1 > con1Length){bar1 = con1Length;}
      console.log('numberOfCon1s: '+ addOrRemove*bar1);

      AddVowels(var5 * addOrRemove);
      AddCon2s(car5 * addOrRemove);
      AddCon1s(bar1 * addOrRemove);
   }

   function AddVowels(amount){
      if (amount < 0){
         for (i = 0; i < -amount; i++) {
            vr1 = OnVowelArray.splice(Math.floor(Math.random()*OnVowelArray.length), 1).toString();
            turnOffLetter(vr1);
            OffVowelArray.push(vr1);}}
      else{
         for (i = 0; i < amount; i++) {
            vr1 = OffVowelArray.splice(Math.floor(Math.random()*OffVowelArray.length), 1).toString();
            turnOnLetter(vr1);
            OnVowelArray.push(vr1);
   }}}

   function AddCon2s(amount){
      if (amount < 0){
         for (i = 0; i < -amount; i++) {
            vr1 = OnCon2Array.splice(Math.floor(Math.random()*OnCon2Array.length), 1).toString();
            turnOffLetter(vr1);
            OffCon2Array.push(vr1);}}
      else{
         for (i = 0; i < amount; i++) {
            vr1 = OffCon2Array.splice(Math.floor(Math.random()*OffCon2Array.length), 1).toString();
            turnOnLetter(vr1);
            OnCon2Array.push(vr1);
   }}}

   function AddCon1s(amount){
      if (amount < 0){
         for (i = 0; i < -amount; i++) {
            vr1 = OnCon1Array.splice(Math.floor(Math.random()*OnCon1Array.length), 1).toString();
            turnOffLetter(vr1);
            OffCon1Array.push(vr1);}}
      else{
         for (i = 0; i < amount; i++) {
            vr1 = OffCon1Array.splice(Math.floor(Math.random()*OffCon1Array.length), 1).toString();
            turnOnLetter(vr1);
            OnCon1Array.push(vr1);
   }}}

   function RemoveAllLetters(){
      OnVowelArray = [];
      OnCon2Array = [];
      OnCon1Array = [];
      OffVowelArray =  ['a','e','i','o','u'];
      OffCon2Array  =  ['q','y','j','z','x','v'];
      OffCon1Array  =  ['w','r','t','p','s','d','f','g','h','k','l','c','b','n','m'];
      $('.illletter').removeClass('illuminatestyleup').removeClass('illuminateoffstyleup').addClass('illuminateoffstyleup');
      // $('.specialring').css({'border-color': '#92DACC'});
   }
   function AddAllLetters(){
      OffVowelArray = [];
      OffCon2Array = [];
      OffCon1Array = [];
      OnVowelArray =  ['a','e','i','o','u'];
      OnCon2Array  =  ['q','y','j','z','x','v'];
      OnCon1Array  =  ['w','r','t','p','s','d','f','g','h','k','l','c','b','n','m'];
      $('.illletter').removeClass('illuminatestyleup').removeClass('illuminateoffstyleup').addClass('illuminatestyleup');
      // $('.specialring').css({'border-color': '#7a71f4'});
   }

   function turnOffLetter (lettter){
      lettterr = lettter.toUpperCase();
      lettterrr = lettterr.charCodeAt(0);
      $('.letter'+lettterrr).attr('name','off');
      $('.illletter.letter'+lettterrr).removeClass('illuminatestyleup').addClass('illuminateoffstyleup');

      $('.specialring').css({'border-color': '#92DACC'});
   }

   function turnOnLetter (lettter){
      lettterr = lettter.toUpperCase();
      lettterrr = lettterr.charCodeAt(0);
      $('.letter'+lettterrr).attr('name','');
      $('.illletter.letter'+lettterrr).removeClass('illuminateoffstyleup').addClass('illuminatestyleup');

      $('.specialring.ring'+lettterrr).css({'border-color': '#7a71f4'});
   }







   function SwitchToLearn(){

   }

   function beginLearn(){

   }



   sectenceGenerator();
   lettersOnScreen();
   nextLetter();

   for (i = 0; i < answerLetters[wordCounter].length; i++){
      $('.span'+wordCounter+i).addClass('currentWord');}

   updateScore();

   console.log(OnCon1Array);
   console.log(OnCon2Array);
   console.log(OnVowelArray);


   function checkLetter(letterCode){
      if (letterCode == 13){sentenceFinished();return;}
      if (String.fromCharCode(letterCode).toLowerCase() == answerLetters[wordCounter][letterCounter]){
         score++;
         updateScore();
         addCorrectLetter();
         nextLetter();
         wrongAttempts = 0;
         timeleft += 20;

      }else {
         addIncorrectLetter()
         nextLetter();
         if (chancesLeft == 0){
            if (LearnMode == true){
               toLearnModeText();
            }else {
               timeleft -= letterPenaltyBig; }
         }else {
            timeleft -= letterPenalty;
            chancesLeft--;
            redrawChances();
      }}

      if(letterCounter == answerLetters[wordCounter].length){
         removeCurrentWordClass();
         letterCounter = 0;
         wordCounter ++;
         timeleft += 50;

         if(wordCounter == answerLetters.length){
            setTimeout(sentenceFinished,260);
            setTimeout(removeLetterClasses,260);
            setTimeout(addCurrentWordClass,261);
            setTimeout(addCurrentLetterClass,263);
            timeleft += 200;
            if (LearnMode == true){
               SentencesLeft --;
               if (SentencesLeft == 0){
                  //sublevel++
                  GetLevelInfo();
                  toLearnModeText();
               }
            }
            return;
         }
         addCurrentWordClass();
         $('.span'+wordCounter+letterCounter).addClass('currentletter');

         }
   }


   $(document).keydown(function (event) {
      var letterCode = event.which;
      if ($('.illletter.letter'+letterCode).attr('name') == 'off'){
         $('.illletter.letter'+letterCode).addClass('illuminateoffstyledown').removeClass('illuminateoffstyleup');


         // $('.illletter.letter'+letterCode).addClass('illuminateoffstyledown').removeClass('illuminateoffstyleup');
         // $('.illletter.letter'+letterCode).css({'background-color': '#92DACC'});
         // $('.illletter.letter'+letterCode).animate({'background-color':'#92DACC'},3000);
         $('.appletter.letter'+letterCode).addClass('appearoffstyledown').removeClass('appearoffstyleup');
      }
      else{
         $('.illletter.letter'+letterCode).css({'background-color': '#92DACC'});
         // $('.illletter.letter'+letterCode).addClass('illuminatestyledown').removeClass('illuminatestyleup');
         $('.appletter.letter'+letterCode).css({backgroundColor: '#92DACC', borderColor: '#92DACC', color: '#624D74'});
      }
      if (inPlay == true){
         checkLetter(letterCode);}
      else if (LearnMode == true && letterCode == 13){
         beginLearn();
      }
   });
   $(document).keydown(function (event) {
      var letterCode = event.which;
      if ($('.illletter.letter'+letterCode).attr('name') == 'off'){
         $('.illletter.letter'+letterCode).addClass('illuminateoffstyledown').removeClass('illuminateoffstyleup');
         $('.appletter.letter'+letterCode).addClass('appearoffstyledown').removeClass('appearoffstyleup');
      }
      else{
         $('.illletter.letter'+letterCode).css({'background-color': '#92DACC'});
         $('.appletter.letter'+letterCode).css({backgroundColor: '#92DACC', borderColor: '#92DACC', color: '#624D74'});
      }
   });


   $(document).keyup(function(event) {
      if ($('.illletter.letter'+event.which).attr('name') == 'off'){
         $('.illletter.letter'+event.which).addClass('illuminateoffstyleup').removeClass('illuminateoffstyledown');
         // $('.illletter.letter'+event.which).addClass('illuminateoffstyleup').removeClass('illuminateoffstyledown');
         // $('.illletter.letter'+event.which).animate({'background-color':'#FFF9ca'},3000);
         $('.appletter.letter'+event.which).addClass('appearoffstyleup').removeClass('appearoffstyledown');
      }
      else{
         $('.illletter.letter'+event.which).animate({backgroundColor: '#FFF9ca'},350);
         $('.appletter.letter'+event.which).animate({backgroundColor: '#FFF9ca', borderColor: '#FFF9ca', color: '#FFF9ca'},600);
         $('.appletter.letter'+event.which).addClass('appearstyleup').removeClass('appearstyledown');
         // $('.appletter.letter'+event.which).addClass('appearstyleup').removeClass('appearstyledown');
      }
   });
   $(document).keyup(function(event) {
      if ($('.illletter.letter'+event.which).attr('name') == 'off'){
         $('.illletter.letter'+event.which).addClass('illuminateoffstyleup').removeClass('illuminateoffstyledown');
         $('.appletter.letter'+event.which).addClass('appearoffstyleup').removeClass('appearoffstyledown');
      }
      else{
         $('.illletter.letter'+event.which).animate({backgroundColor: '#FFF9ca'},350);
         $('.appletter.letter'+event.which).animate({backgroundColor: '#FFF9ca', borderColor: '#FFF9ca', color: '#FFF9ca'},600);
         $('.appletter.letter'+event.which).addClass('appearstyleup').removeClass('appearstyledown');
      }
   });


   $('.startstop').click(function(){
      score = 0;
      updateScore();
      MainLoop.start();
      timeleft = 1000;
   });

   $('.timerbar').click(function(){
      // StartChangingLetters();
      sentenceFinished();
   });


   $('#illuminatetoggle').click(function (){
      $('.appletter').toggle();
      $('.illletter').toggle();
      $('#illuminatetoggle-inside').toggleClass('floatright');
   });


   $('input').click(function (){
      var letterSet = $(this).attr('name');
      $(this).siblings().toggleClass('togglebutton-checked');
      if($(this).prop("checked") == true){
         removeLetters(letterSet);
         $('.'+letterSet+'letter').attr('name','off');
         $('.illletter.'+letterSet+'letter').removeClass('illuminatestyleup').addClass('illuminateoffstyleup');
         $('.appletter.'+letterSet+'letter').removeClass('appearstyleup').addClass('appearoffstyleup');
      }
      else{
         addLetters(letterSet);
         $('.'+letterSet+'letter').attr('name','');
         $('.illletter.'+letterSet+'letter').removeClass('illuminateoffstyleup').addClass('illuminatestyleup');
         $('.appletter.'+letterSet+'letter').removeClass('appearoffstyleup').addClass('appearstyleup');
      }
   });

   $('.togglebutton').hover(function(){
      var letterSet = $(this).siblings().attr('name');
      $('.'+letterSet+'letter').addClass('letterhover');
   },function(){
      var letterSet = $(this).siblings().attr('name');
      $('.'+letterSet+'letter').removeClass('letterhover');
   });




});
