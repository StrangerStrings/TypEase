function updateScore() {

    var beforeGrade = grade

    if (score > 0) {  // a
        if (score > 50) {  // b
            if (score > 100) {  // c
                if (score > 150) {  // d
                    if (score > 200) {  // e
                        if (score > 250) {  // f
                            if (score > 300) {  // g
                                if (score > 350) {  // h
                                    if (score > 400) {  // i
                                        if (score > 450) {  // j
                                            if (score > 500) {  // k
                                                if (score > 550) {  // l
                                                    if (score > 600) {  // m
                                                        if (score > 1000) {  // n
                                                            if (score > 280) {  // o
                                                                if (score > 300) {  // p
                                                                    if (score > 320) {  // q
                                                                        if (score > 340) {  // r
                                                                            if (score > 360) {  // s
                                                                                if (score > 380) {  // t
                                                                                    if (score > 400) {  // u
                                                                                        if (score > 420) {  // v
                                                                                            if (score > 440) {  // w
                                                                                                if (score > 460) {  // x
                                                                                                    if (score > 480) {  // y
                                                                                                        if (score > 500) {  // z
                                                                                                            grade = 'z'
                                                                                                        } else { grade = 'y' }
                                                                                                    } else { grade = 'x' }
                                                                                                } else { grade = 'w' }
                                                                                            } else { grade = 'v' }
                                                                                        } else { grade = 'u' }
                                                                                    } else { grade = 't' }
                                                                                } else { grade = 's' }
                                                                            } else { grade = 'r' }
                                                                        } else { grade = 'q' }
                                                                    } else { grade = 'p' }
                                                                } else { grade = 'o' }
                                                            } else { grade = 'm' }
                                                        } else { grade = 'n' }
                                                    } else { grade = 'l' }
                                                } else { grade = 'k' }
                                            } else { grade = 'j' }
                                        } else { grade = 'i' }
                                    } else { grade = 'h' }
                                } else { grade = 'g' }
                            } else { grade = 'f' }
                        } else { grade = 'e' }
                    } else { grade = 'd' }
                } else { grade = 'c' }
            } else { grade = 'b' }
        } else { grade = 'a' }
    } else { grade = '' }

    if (beforeGrade != grade) {
        loadGradeData(grade)
        $('.scoree').text(grade);
    }
}

function loadGradeData(g) {
    console.log(g + '   ' + sprintLevels[g])
    var data = sprintLevels[g]

    timeSpeed = data.timeSpeed
    letterReward = data.letterReward
    wordReward = data.wordReward
    SentenceReward = data.SentenceReward;
    letterPenalty = data.letterPenalty;
    letterPenaltyBig = data.letterPenaltyBig;
    sentenceLength = data.sentenceLength;
    sentenceLengthRange = data.sentenceLengthRange;
    wordLength = data.wordLength;
    wordLengthRange = data.wordLengthRange
    availableLettersMeasure = data.availableLettersMeasure
    startingChances = data.startingChances;
    chanceRechargeRate = (100 * 0.06) / data.chanceRechageTime

    console.log(data);
}





// variables to be in here

//  timeSpeed

//  letterReward
//  wordReward
//  SentenceReward

//  letterPenalty
//  letterPenaltyBig

//  sentenceLength
//  sentenceLengthRange
//  wordLength
//  wordLengthRange

//  startingChances
// availableLettersMeasure
//  chanceRechageTime

// it will be in an 

var sprintLevels = {
    '':{
        timeSpeed: 1,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 50, letterPenaltyBig: 200,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 2 ,

        startingChances: 4, chanceRechageTime: 3  
    },
    'a': {
        timeSpeed:1,
        
        letterReward: 20 , wordReward: 50 , SentenceReward: 200 ,
        letterPenalty: 50 , letterPenaltyBig: 200 ,

        sentenceLength: 4 , sentenceLengthRange: 2 , 
        wordLength: 5 , wordLengthRange: 4 ,
        availableLettersMeasure: 2 ,

        startingChances: 4 , chanceRechageTime: 3  
    },
    'b': {
        timeSpeed: 3,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 50, letterPenaltyBig: 200,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 2 ,

        startingChances: 9, chanceRechageTime: 1
    },
    'c': {
        timeSpeed: 4,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 50, letterPenaltyBig: 200,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 2 ,

        startingChances: 4, chanceRechageTime: 3
    },
    'd': {
        timeSpeed: 5,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 50, letterPenaltyBig: 200,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 2 ,

        startingChances: 9, chanceRechageTime: 1
    },
    'e': {
        timeSpeed: 6,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 50, letterPenaltyBig: 200,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 2 ,

        startingChances: 4, chanceRechageTime: 3
    },
    'f': {
        timeSpeed: 7,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 50, letterPenaltyBig: 200,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 2 ,

        startingChances: 4, chanceRechageTime: 3
    },
    'g': {
        timeSpeed: 8,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 50, letterPenaltyBig: 200,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 2 ,

        startingChances: 4, chanceRechageTime: 3
    },
    'h': {
        timeSpeed: 9,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 50, letterPenaltyBig: 200,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 2 ,

        startingChances: 9, chanceRechageTime: 1
    },
    'i': {
        timeSpeed: 3,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 50, letterPenaltyBig: 200,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 2 ,

        startingChances: 4, chanceRechageTime: 3
    },
    'j': {
        timeSpeed: 4,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 50, letterPenaltyBig: 200,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 2 ,

        startingChances: 9, chanceRechageTime: 1
    },
    'k': {
        timeSpeed: 5,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 50, letterPenaltyBig: 200,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 2 ,

        startingChances: 4, chanceRechageTime: 3
    }
}




//example values
// timeSpeed = 1

// letterReward = 20
// wordReward = 50
// SentenceReward = 200;

// letterPenalty = 50;
// letterPenaltyBig = 200;

// sentenceLength = 4;
// sentenceLengthRange = 2;
// wordLength = 5;
// wordLengthRange = 4;
// availableLettersMeasure: 2 ,

// startingChances;
// chanceRechageTime = 3;