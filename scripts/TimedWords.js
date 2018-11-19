function assignTimedWord(noOfWords, arr) {
    var whichWord = Math.floor(Math.random() * (noOfWords - 2)) + 1;
    if (arr[whichWord].length < 4) {
        whichWord = Math.floor(Math.random() * (noOfWords - 2)) + 1;
        if (arr[whichWord].length < 4) {
            whichWord = Math.floor(Math.random() * (noOfWords - 2)) + 1;
        }
    }
    if (arr[whichWord].length > 4) {
        timedWordBools[whichWord] = true;
        timedWordTotalSize =
            (arr[whichWord].length * 13) + (Math.floor(Math.random() * 30));
        timedWordSize = parseInt(timedWordTotalSize);
    }
}

function timedWordSuccess() {
    currentWordIsTimed = false;
    timedWordBools[wordCounter] = false;
    $('.timedWordBar' + (wordCounter)).animate({ "width": 0, "margin-left": (timedWordWidth) }, 200);
    timeleft += 1.5 * SentenceReward;
    $('.span' + wordCounter + (letterCounter - 1)).finish();
    $('.span' + wordCounter + (letterCounter - 1)).after('<div class="timedBonus"></div>');
    $('.timedBonus').animate({ top: '-1.9rem', width: '1rem', height: '1rem' }, 150).animate({ top: '-0.3rem', width: '0rem', height: '0rem' }, 350).animate({ width: '0.4rem' }, 50, function () {
          $('.timedBonus').remove();
    });
}

function timedWordFail() {
    currentWordIsTimed = false;
    timedWordBools[wordCounter] = false;
    $('.timedWordBar' + (wordCounter)).animate({ "width": 0, "margin-left": (timedWordWidth) }, 150);
    console.log('nono');
}


function drawTimedWord() {
    var w = 0;
    for (var k = 0; k < 10; k++) {
          w += $('.span' + i + k).width();
    }
    timedWordWidth = w - 8;
    $('.timedWordBar' + i).width(timedWordWidth);
}