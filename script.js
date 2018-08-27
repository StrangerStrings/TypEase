$( document ).ready(function() {


highestLevel = [3,1]
// learnLevel = highestLevel[0]
// learnSubLevel = highestLevel[1]
learnLevel = 1
learnSubLevel = 1

virginVisitor = false

//split this into a funciton and probably take a parameter about whether they've visited before, 
//and if they have then do a short version with just logo shrink then back-g fade.




$('.splash-screen > img').addClass('logo-bottom-right')

if (virginVisitor){
      setTimeout(function () {
            $('.first-instructions-box').removeClass('hidden');
      }, 3500)
      setTimeout(function () {
            $('.first-instructions-box').addClass('new-color');
      }, 3600)
}

else{
      setTimeout(function(){
            $('.splash-screen').addClass('fast-trans').addClass('splash-screen-gone')
      },3000)
}

$('.first-instructions-box div').click(function(){
      $('.first-instructions-box').remove();
      $('.splash-screen').addClass('splash-screen-gone')
      
})





//this is the function that needs to be triggered for the last levels on learn
   $('#illuminatetoggle').click(function (){
      $('.letter-stnd').toggleClass('letter-appear');
   });


      toLearnModeText();
      learnMode = true;
      $('.learn').addClass('current-mode')

      if (learnLevel == 1 && learnSubLevel == 1) {
            $('.button-learn-left').addClass('locked-level')
      }
      if (lvlToNum(highestLevel[0], highestLevel[1]) > 300){
            $('.sprint').removeClass('locked-mode')
      }
// learnMode = false;
// toSprintModeText();
// sprintMode = true;
// $('.learn').removeClass('current-mode')
// $('.sprint').addClass('current-mode')





   $('.learn').click(function(){
         if(sprintMode){
                  toSprintModeText()
                  sprintMode=false;
                  learnMode=true;
                  toLearnModeText();
                  $(this).addClass('current-mode')
                  $('.sprint').removeClass('current-mode')
         }
   })
   
      $('.sprint').click(function () {
            if (learnMode && lvlToNum(highestLevel[0], highestLevel[1])>300 ){
                  toLearnModeText()
                  learnMode = false;
                  sprintMode = true;
                  toSprintModeText();
                  $(this).addClass('current-mode')
                  $('.learn').removeClass('current-mode')
            }
   })
   




   $('.start-button').click(function () {
         startGame();
   });



      $('.button-learn-right').click(function(){
            if(lvlToNum(highestLevel[0],highestLevel[1]) > lvlToNum(learnLevel,learnSubLevel)){
                  learnLevelUp();
                  toLearnModeText();
            }
      })

      $('.button-learn-left').click(function () {
            if (learnLevel != 1 || learnSubLevel != 1){
                  learnLevelDown();
                  toLearnModeText();
            }
      })


      $('.info-icon').click(function(){
            $('.info-page').toggleClass('expanded-info')
      })






   //key pressed function, visually changes onscreen keys and --> triggers checkLetter
   $(document).keydown(function (event) {
      var letterCode = event.which;
      $('.letter-'+letterCode).addClass('pressed');

      if (inPlay && ((letterCode>64 && letterCode<91) || letterCode== 32 || letterCode==13) ){
         checkLetter(letterCode);
      }
      else if (letterCode == 13){startGame();}
   });

   //key unpressed, only visual
   $(document).keyup(function(event) {
      var letterCode = event.which;
      $('.letter-'+letterCode).removeClass('pressed');
   });





   $('.btn1').click(function(){
         MainLoop.stop();
   })
   $('.btn2').click(function(){
         $('.span' + wordCounter + (letterCounter - 1)).after('<div class="timedBonus"></div>')
         $('.timedBonus').animate({ top: '-1.9rem', width: '1rem', height: '1rem' }, 150).animate(
               { top: '-0.3rem', width: '0rem', height: '0rem' }, 350).animate(
                     { width: '0.4rem' }, 50, function () {
                           $('.timedBonus').remove();
                     });
   })
   $('.btn3').click(function(){
         console.log(highestLevel)
   })
   $('.btn4').click(function(){
         $('.sprint').addClass('locked-mode')
   })
   $('.btn5').click(function(){
         console.log(learnMode)
   })



});
