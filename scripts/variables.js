var SetsBool = false;
var NumberOfSets = 0;
var vcProbability = 0.8;



var answerLetters = [];
var wordCounter = 0;
var letterCounter = 0;
var wrongAttempts = 0;




var score = 0 ;
var grade = '' ;
var bestGrade = '' ;
var timeleft =1000;
var minicounter = 0;
var GameLevel = 4;
var BeforeGameLevel = 0;



var timeSpeed           =  1
var letterReward        =  20
var wordReward          =  50
var SentenceReward      =  200;
var letterPenalty       =  50;
var letterPenaltyBig    =  200;



// var CurrentLetters;
var chancesLeft;
var inPlay = false;


//
var sentenceLength       = 4;
var sentenceLengthRange = 2;
var wordLength           = 5;
var wordLengthRange      = 4;

var availableLettersMeasure = 5;

//
var learnInstructions       ;
var randomLetterBool;
var timerBool  ;



var sentencesLeft   ;
var startingChances ;
var chanceRecharge = 0;
var chanceRechageTime = 3;
var chanceRechargeRate = (100 * 0.06) / chanceRechageTime;



var learnLevel = 1;
var learnSubLevel = 1;
var highestLevel = [3,1]
var learnMode = false;
var sprintMode = false;


var timedWordBools = [false, false, false, false, false, false, false, false, false,]
var currentWordIsTimed = false
var timedWordTotalSize = 0
var timedWordSize = 0
var timedWordWidth = 0

var allLettersArray = []


var OnVowelArray = ['a', 'e', 'i', 'o', 'u'];
var OnCon1Array = ['w', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h', 'k', 'l', 'c', 'b', 'n', 'm'];
var OnCon2Array = ['q', 'y', 'j', 'z', 'x', 'v']; 

var OffVowelArray = [];
var OffCon2Array  = [];
var OffCon1Array  = [];

var ReferenceVowelArray = ['a','e','i','o','u'];
var ReferenceCon1Array = ['w','r','t','p','s','d','f','g','h','k','l','c','b','n','m'];
var ReferenceCon2Array = ['q','y','j','z','x','v'];



//ArrayOfSets
OffSetOfSets =       [   [['e'],['q'],['w','r']],  [['u','i','o'],[],['p']],  [['a'],[],['s','d','f']],  [[],['j'],['k','l']],   [[],['y'],['g','h','t']],      [[],['z','x','v'],['c']],      [[],[],['b','n','m']]    ];
SetOfSetsReference = [   [['e'],['q'],['w','r']],  [['u','i','o'],[],['p']],  [['a'],[],['s','d','f']],  [[],['j'],['k','l']],   [[],['y'],['g','h','t']],      [[],['z','x','v'],['c']],      [[],[],['b','n','m']]    ];
OnSetofSets = [];
