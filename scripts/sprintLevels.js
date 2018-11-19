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
                                                        if (score > 650) {  // n
                                                            if (score > 700) {  // o
                                                                if (score > 750) {  // p
                                                                    if (score > 800) {  // q
                                                                        if (score > 850) {  // r
                                                                            if (score > 900) {  // s
                                                                                if (score > 950) {  // t
                                                                                    if (score > 1000) {  // u
                                                                                        if (score > 1050) {  // v
                                                                                            if (score > 1100) {  // w
                                                                                                if (score > 1150) {  // x
                                                                                                    if (score > 1200) {  // y
                                                                                                        if (score > 1250) {  // z
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
    // console.log(g , '   ',sprintLevels[g])
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
}





var sprintLevels = {
    '':{
        timeSpeed: 1,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 10, letterPenaltyBig: 100,

        sentenceLength: 2, sentenceLengthRange: 0,
        wordLength: 4, wordLengthRange: 0,
        availableLettersMeasure: 1 ,

        startingChances: 4, chanceRechageTime: 3  
    },
    'a': {
        timeSpeed:1,
        
        letterReward: 20 , wordReward: 50 , SentenceReward: 200 ,
        letterPenalty: 10 , letterPenaltyBig: 100 ,

        sentenceLength: 3 , sentenceLengthRange: 0 , 
        wordLength: 4 , wordLengthRange: 1 ,
        availableLettersMeasure: 1 ,

        startingChances: 4 , chanceRechageTime: 3  
    },
    'b': {
        timeSpeed: 1,

        letterReward: 20, wordReward: 50, SentenceReward: 150,
        letterPenalty: 10, letterPenaltyBig: 100,

        sentenceLength: 4, sentenceLengthRange: 1,
        wordLength: 4, wordLengthRange: 1,
        availableLettersMeasure: 1 ,

        startingChances: 5, chanceRechageTime: 2
    },
    'c': {
        timeSpeed: 2,

        letterReward: 20, wordReward: 40, SentenceReward: 150,
        letterPenalty: 10, letterPenaltyBig: 100,

        sentenceLength: 6, sentenceLengthRange: 0,
        wordLength: 3, wordLengthRange: 1,
        availableLettersMeasure: 2 ,

        startingChances: 4, chanceRechageTime: 3
    },
    'd': {
        timeSpeed: 2,

        letterReward: 20, wordReward: 40, SentenceReward: 150,
        letterPenalty: 10, letterPenaltyBig: 100,

        sentenceLength: 3, sentenceLengthRange: 0,
        wordLength: 7, wordLengthRange: 2,
        availableLettersMeasure: 12 ,

        startingChances: 4, chanceRechageTime: 1
    },
    'e': {
        timeSpeed: 3,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 12, letterPenaltyBig: 120,

        sentenceLength: 5, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 2,
        availableLettersMeasure: 2 ,

        startingChances: 7, chanceRechageTime: 2
    },
    'f': {
        timeSpeed: 1,

        letterReward: 10, wordReward: 20, SentenceReward: 100,
        letterPenalty: 12, letterPenaltyBig: 120,

        sentenceLength: 6, sentenceLengthRange: 3,
        wordLength: 6, wordLengthRange: 3,
        availableLettersMeasure: 4 ,

        startingChances: 8, chanceRechageTime: 3
    },
    'g': {
        timeSpeed: 3,

        letterReward: 15, wordReward: 30, SentenceReward: 150,
        letterPenalty: 12, letterPenaltyBig: 120,

        sentenceLength: 4, sentenceLengthRange: 1,
        wordLength: 5, wordLengthRange: 1,
        availableLettersMeasure: 6 ,

        startingChances: 6, chanceRechageTime: 2
    },
    'h': {
        timeSpeed: 4,

        letterReward: 16, wordReward: 60, SentenceReward: 160,
        letterPenalty: 12, letterPenaltyBig: 120,

        sentenceLength: 4, sentenceLengthRange: 0,
        wordLength: 5, wordLengthRange: 0,
        availableLettersMeasure: 12 ,

        startingChances: 7, chanceRechageTime: 1
    },
    'i': {
        timeSpeed: 3,

        letterReward: 20, wordReward: 40, SentenceReward: 150,
        letterPenalty: 12, letterPenaltyBig: 120,

        sentenceLength: 5, sentenceLengthRange: 1,
        wordLength: 3, wordLengthRange: 1,
        availableLettersMeasure: 1 ,

        startingChances: 5, chanceRechageTime: 2
    },
    'j': {
        timeSpeed: 4,

        letterReward: 20, wordReward: 50, SentenceReward: 150,
        letterPenalty: 12, letterPenaltyBig: 120,

        sentenceLength: 4, sentenceLengthRange: 1,
        wordLength: 6, wordLengthRange: 1,
        availableLettersMeasure: 12 ,

        startingChances: 8, chanceRechageTime: 1
    },
    'k': {
        timeSpeed: 5,

        letterReward: 20, wordReward: 40, SentenceReward: 250,
        letterPenalty: 13, letterPenaltyBig: 130,

        sentenceLength: 6, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 12 ,

        startingChances: 7, chanceRechageTime: 2
    },
    'l': {
        timeSpeed: 4,

        letterReward: 18, wordReward: 50, SentenceReward: 150,
        letterPenalty: 13, letterPenaltyBig: 130,

        sentenceLength: 4, sentenceLengthRange: 0,
        wordLength: 7, wordLengthRange: 0,
        availableLettersMeasure: 12 ,

        startingChances: 6, chanceRechageTime: 2
    },
    'm': {
        timeSpeed: 4,

        letterReward: 18, wordReward: 50, SentenceReward: 150,
        letterPenalty: 13, letterPenaltyBig: 130,

        sentenceLength: 5, sentenceLengthRange: 0,
        wordLength: 6, wordLengthRange: 2,
        availableLettersMeasure: 9 ,

        startingChances: 7, chanceRechageTime: 2
    },
    'n': {
        timeSpeed: 3,

        letterReward: 10, wordReward: 40, SentenceReward: 180,
        letterPenalty: 13, letterPenaltyBig: 80,

        sentenceLength: 6, sentenceLengthRange: 0,
        wordLength: 5, wordLengthRange: 1,
        availableLettersMeasure: 8 ,

        startingChances: 9, chanceRechageTime: 1
    },
    'o': {
        timeSpeed: 4,

        letterReward: 15, wordReward: 40, SentenceReward: 200,
        letterPenalty: 14, letterPenaltyBig: 140,

        sentenceLength: 7, sentenceLengthRange: 0,
        wordLength: 4, wordLengthRange: 1,
        availableLettersMeasure: 12 ,

        startingChances: 9, chanceRechageTime: 2
    },
    'p': {
        timeSpeed: 4,

        letterReward: 15, wordReward: 40, SentenceReward: 200,
        letterPenalty: 14, letterPenaltyBig: 140,

        sentenceLength: 7, sentenceLengthRange: 0,
        wordLength: 5, wordLengthRange: 1,
        availableLettersMeasure: 12 ,

        startingChances: 8, chanceRechageTime: 2
    },
    'q': {
        timeSpeed: 6,

        letterReward: 20, wordReward: 60, SentenceReward: 180,
        letterPenalty: 14, letterPenaltyBig: 140,

        sentenceLength: 7, sentenceLengthRange: 0,
        wordLength: 5, wordLengthRange: 1,
        availableLettersMeasure: 0 ,

        startingChances: 7, chanceRechageTime: 2
    },
    'r': {
        timeSpeed: 4,

        letterReward: 15, wordReward: 40, SentenceReward: 200,
        letterPenalty: 14, letterPenaltyBig: 140,

        sentenceLength: 6, sentenceLengthRange: 2,
        wordLength: 6, wordLengthRange: 3,
        availableLettersMeasure: 8 ,

        startingChances: 7, chanceRechageTime: 2
    },
    's': {
        timeSpeed: 4,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 14, letterPenaltyBig: 140,

        sentenceLength: 6, sentenceLengthRange: 0,
        wordLength: 8, wordLengthRange: 0,
        availableLettersMeasure: 12 ,

        startingChances: 6, chanceRechageTime: 2
    },
    't': {
        timeSpeed: 6,

        letterReward: 30, wordReward: 60, SentenceReward: 200,
        letterPenalty: 15, letterPenaltyBig: 150,

        sentenceLength: 4, sentenceLengthRange: 3,
        wordLength: 4, wordLengthRange: 3,
        availableLettersMeasure: 1 ,

        startingChances: 8, chanceRechageTime: 1
    },
    'u': {
        timeSpeed: 5,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 15, letterPenaltyBig: 150,

        sentenceLength: 8, sentenceLengthRange: 0,
        wordLength: 3, wordLengthRange: 0,
        availableLettersMeasure: 12 ,

        startingChances: 6, chanceRechageTime: 2
    },
    'v': {
        timeSpeed: 3,

        letterReward: 10, wordReward: 30, SentenceReward: 100,
        letterPenalty: 15, letterPenaltyBig: 150,

        sentenceLength: 6, sentenceLengthRange: 1,
        wordLength: 5, wordLengthRange: 2,
        availableLettersMeasure: 12 ,

        startingChances: 7, chanceRechageTime: 2
    },
    'w': {
        timeSpeed: 4,

        letterReward: 15, wordReward: 40, SentenceReward: 150,
        letterPenalty: 15, letterPenaltyBig: 150,

        sentenceLength: 4, sentenceLengthRange: 1,
        wordLength: 5, wordLengthRange: 3,
        availableLettersMeasure: 12 ,

        startingChances: 8, chanceRechageTime: 2
    },
    'x': {
        timeSpeed: 6,

        letterReward: 20, wordReward: 50, SentenceReward: 200,
        letterPenalty: 15, letterPenaltyBig: 150,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 6, wordLengthRange: 2,
        availableLettersMeasure: 12 ,

        startingChances: 9, chanceRechageTime: 1
    },
    'y': {
        timeSpeed: 5,

        letterReward: 15, wordReward: 30, SentenceReward: 200,
        letterPenalty: 16, letterPenaltyBig: 160,

        sentenceLength: 8, sentenceLengthRange: 0,
        wordLength: 9, wordLengthRange: 0,
        availableLettersMeasure: 1 ,

        startingChances: 5, chanceRechageTime: 2
    },
    'z': {
        timeSpeed: 3,

        letterReward: 20, wordReward: 30, SentenceReward: 100,
        letterPenalty: 16, letterPenaltyBig: 160,

        sentenceLength: 4, sentenceLengthRange: 2,
        wordLength: 5, wordLengthRange: 4,
        availableLettersMeasure: 12 ,

        startingChances: 1, chanceRechageTime: 1
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