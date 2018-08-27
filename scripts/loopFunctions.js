/* - - - functions and setup of the main game loop - - -
MainLoop..  - attaches other two functions to the -tick-, and timeStep
updateGame  - main mechanics of what happens as time passes whilst playing
draw        - atm just changes the width of the time bar, may do more
- - - - - - - - - - - - - - - - - - - - - - - - - - -  */



MainLoop.setUpdate(updategame).setDraw(draw).setSimulationTimestep(60);





function updategame(){
console.log(timeleft)
    // console.log('word timed =  '+currentWordIsTimed)

   timeleft -= timeSpeed;


   if (timeleft >1000){
       console.log('woo')
      score++;
      timeleft = 1000;
   }


// recharging chances stuff
if(sprintMode){
    if (chancesLeft < startingChances){
       chanceRecharge += chanceRechargeRate;
       if (chanceRecharge >= 100){
          chancesLeft += 1;
          redrawChances();
          chanceRecharge = 0;
        }
    }
    else if(chancesLeft > startingChances){
        chanceRecharge = 0
    }
    drawRechargingChance();
}

   if(currentWordIsTimed){
       timedWordSize --;   
       var w = (timedWordSize / timedWordTotalSize) * timedWordWidth
       $('.timedWordBar' + wordCounter).css({"width":w,"margin-left":timedWordWidth-w});
   }

   if (timeleft <=0){
      if (learnMode){
        $('.try-again').removeClass('hidden');
         toLearnModeText();
      }else if(sprintMode){
         if (grade > bestGrade){
            bestGrade = grade;
            $('.highscoree').html(bestGrade);
         }
         toSprintModeText();
      }
   }

}




function draw(){
   $('.timerbar').css("width", timeleft*(15/1000)+"rem");
}
