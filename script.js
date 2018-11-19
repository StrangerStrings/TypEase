$( document ).ready(function() {


highestLevel = JSON.parse(localStorage.getItem('highestLevel')) || [3,1]
learnLevel = highestLevel[0]
learnSubLevel = highestLevel[1]



if (lvlToNum(highestLevel[0], highestLevel[1]) == lvlToNum(learnLevel, learnSubLevel)){
      $('.button-learn-right').addClass('locked-level')
}

bestGrade = JSON.parse(localStorage.getItem('bestGrade')) || ''
$('.highscoree').html(bestGrade);


$('.splash-screen > img').addClass('logo-bottom-right')

if (learnLevel == 1 && learnSubLevel == 1){
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




toLearnModeText();
learnMode = true;
$('.learn').addClass('current-mode')

if (learnLevel == 1 && learnSubLevel == 1) {
      $('.button-learn-left').addClass('locked-level')
}
if (lvlToNum(highestLevel[0], highestLevel[1]) > 300){
      $('.sprint').removeClass('locked-mode')
}



//this is the function that needs to be triggered for the last levels on learn
$('#illuminatetoggle').click(function (){
      $('.letter-stnd').toggleClass('letter-appear');
});







   











});
