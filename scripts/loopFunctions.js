/* - - - functions and setup of the main game loop - - -
MainLoop..  - attaches other two functions to the -tick-, and timeStep
updateGame  - main mechanics of what happens as time passes whilst playing
draw        - atm just changes the width of the time bar, may do more
- - - - - - - - - - - - - - - - - - - - - - - - - - -  */



MainLoop.setUpdate(updategame).setDraw(draw).setSimulationTimestep(60);





function updategame(){

   timeleft -= timeSpeed;

   minicounter ++;
   if (minicounter > 130){
      minicounter = 0;
      GameLevel++;
   }

   if (timeleft >1000){
      score++;
      timeleft = 1000;
      $('.timerbar').animate({backgroundColor: '#7a71f4'},200).animate({backgroundColor: '#F1786D'},200);
   }


   if (chancesLeft < startingChances){
      chanceRecharge += chanceRechargeRate;
      if (chanceRecharge >= 100){
         chancesLeft += 1;
         redrawChances();
         chanceRecharge = 0;
      }
      drawRechargingChance();
   }

   if(currentWordIsTimed){
       // something about size decreasing of the timer bar
       // redraw this on the relevant one (may need the twBools for index)
       // check if it's zero and if it is then turn the bools off.
   }

   if (timeleft <=0){
      if (learnMode){
         toLearnModeText();
      }else if(sprintMode){
         if (score > highscore){
            highscore = score;
            $('.highscore').html(highscore);
         }
         toSprintModeText();
      }
   }

}




function draw(){
   $('.timerbar').css("width", timeleft*(15/1000)+"rem");
}
