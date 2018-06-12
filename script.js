$( document ).ready(function() {



   updateScore();




   $('#illuminatetoggle').click(function (){
      $('.letter-stnd').toggleClass('letter-appear');
      $('#illuminatetoggle-inside').toggleClass('floatright');
   });



   $('.nextButton').click(function(){
      $('.controlbox p, .nextButton, .startstop').addClass('hidden');
      sprintMode = false; learnMode = false;
      switch ($(this).attr('name')){
         case "toSprint":
            sprintMode = true;
            toSprintModeText();
            $('.spr').removeClass('hidden');
            break;
         case "toLearn":
            learnMode = true;
            learnSubLevel = 1;
            toLearnModeText();
            $('.lrn').removeClass('hidden');
            break;
      }
   })



   $('.startstop.spr').click(function(){
      toSprintModePlay();
   });

   $('.startstop.lrn').click(function(){
      toLearnModePlay();
   });



   $(document).keydown(function (event) {
      var letterCode = event.which;
      $('.letter-'+letterCode).addClass('pressed');

      if (inPlay && ((letterCode>64 && letterCode<91) || letterCode== 32 ) ){
         checkLetter(letterCode);
      }
      else if (letterCode == 13){startGame();}
   });
   $(document).keyup(function(event) {
      var letterCode = event.which;
      $('.letter-'+letterCode).removeClass('pressed');
   });





   $('.btn1').click(function(){
      RemoveAllLetters();
   })
   $('.btn2').click(function(){
      $('.timerbar').addClass('hidden');
   })
   $('.btn3').click(function(){
      AddAllLetters();
   })
   $('.btn4').click(function(){
      addLetters(8);
   })
   $('.btn5').click(function(){
      addLetters(-5);
   })



});
