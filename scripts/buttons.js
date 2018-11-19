$( document ).ready(function() {

$('.first-instructions-box div').click(function(){
    $('.first-instructions-box').remove();
    $('.splash-screen').addClass('splash-screen-gone')
})





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
       $('.info-icon').toggleClass('expanded-info')
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
      availableLettersMeasure = 0
      var fff = []
      for ( var o=0; o<27 ;o++){
            fff.push(howManyChangeLetters())
      }
      fff.sort(function(a,b){
            return a-b
      })
      console.log(fff)
     })
     $('.btn2').click(function(){
      availableLettersMeasure = 2
      var fff = []
      for ( var o=0; o<27 ;o++){
          fff.push(howManyChangeLetters())
      }
      fff.sort(function(a,b){
        return a-b
      })
      console.log(fff)
     })
     $('.btn3').click(function(){
      availableLettersMeasure = 3
      var fff = []
      for ( var o=0; o<27 ;o++){
          fff.push(howManyChangeLetters())
      }
      fff.sort(function(a,b){
        return a-b
      })
      console.log(fff)
     })
     $('.btn4').click(function(){
      availableLettersMeasure = 4
      var fff = []
      for ( var o=0; o<27 ;o++){
          fff.push(howManyChangeLetters())
      }
      fff.sort(function(a,b){
        return a-b
      })
      console.log(fff)
     })
     $('.btn5').click(function(){
      availableLettersMeasure = 12
      var fff = []
      for ( var o=0; o<27 ;o++){
          fff.push(howManyChangeLetters())
      }
      fff.sort(function(a,b){
        return a-b
      })
      console.log(fff)
     })
  
  
  
    });