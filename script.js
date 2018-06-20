$( document ).ready(function() {



   updateScore();

// $('img').fadeIn(5000)

$('.splash-screen > img').addClass('logo-bottom-right')

setTimeout(function(){
      $('.first-instructions-box').removeClass('hidden');
},3500)
setTimeout(function(){
      $('.first-instructions-box').addClass('new-color');
},3600)

$('.first-instructions-box div').click(function(){
      $('.first-instructions-box').remove();
      $('.splash-screen').addClass('splash-screen-gone')
})


$('.splash-screen').click(function(){
})

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

      $('.start-button').click(function () {
            if (learnMode) { toLearnModePlay(); }
            if (sprintMode) { toSprintModePlay();}
            
      });

   $(document).keydown(function (event) {
      var letterCode = event.which;
      $('.letter-'+letterCode).addClass('pressed');

      if (inPlay && ((letterCode>64 && letterCode<91) || letterCode== 32 || letterCode==13) ){
         checkLetter(letterCode);
      }
      else if (letterCode == 13){startGame();}
   });
   $(document).keyup(function(event) {
      var letterCode = event.which;
      $('.letter-'+letterCode).removeClass('pressed');
   });





   $('.btn1').click(function(){
         $('article').addClass('poop')
   })
   $('.btn2').click(function(){
         console.log(currentWordIsTimed)
   })
   $('.btn3').click(function(){
      AddAllLetters();
   })
   $('.btn4').click(function(){
      addLetters(8);
   })
   $('.btn5').click(function(){
         console.log(learnMode)
   })



});
