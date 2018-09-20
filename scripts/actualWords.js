






var actualWordsBB = 'below besides dance dangerous dark daughter day dead decide decrease deep deer depend desk destroy develop die different difficult dinner direction dirty discover dish do dog door double down draw each ear early earn earth east easy education eight either electric elephant else empty end enemy enjoy enough enter equal entrance escape even evening event ever every everyone exact everybody example except excited exercise expect expensive explain extremely fact fail fall false family famous far farm father fast fat fault fear feed feel female fever few fight fill film find fine finger finish first fish fit five fix flag flat float floor flour flower fly ffood fool foot football force foreign forget forgive form four free freedom freeze fresh friend friendly from front fruit full fun funny furniture further future game garden gate general gentleman get gift give glad goat god gold good grave great green gray ground group grow gun hair half hall hammer hand happen happy hard hat hate have he head healthy hear heavy heart heaven height hello help hen her here hide hill his hit hobby hold hole holiday home hope horse hospital hot hotel house how hundred hungry hour hurry husband hurt I idea if important in increase inside introduce invent iron invite is island it jelly job join juice jump just keep kill kind king kitchen knee knife knock know ladder lamp land large last late lately lazy lead leaf leave lend length less lesson let letter library life light like lion lip list listen little lock lonely long lose lot lower luck machine main make male many map mark market marry may me meal mean measure meat medicine meet member mention method middle milk million minute miss mistake model modern moment money month moon more morning most mother mouth move much music must narrow nation nature near nearly neck need needle neighbour neither net new news newspaper next nice night nine noble noise none nor north not nothing notice now number obey object offer office often oil old on one only open opposite or orange order other our out outside over own page pair paper parent part partner party pass past path pay peace pen pencil people pepper per perfect period person petrol piano pick picture piece pink place plane plant plastic plate play please plenty pocket point poison police polite pool poor popular position possible potapour power present press pretty prevent price prince prison private prize probably problem produce promise proper protect provide public pull punish pupil push queen question quick quite radio rain raise reach read ready real really receive record red remember remind remove rent repair repeat reply report rest result return rice rich ride right ring rise road rock room round rubber rude rule ruler run rush sad safe sail salt same sand save say school science scissors search seat second seem sell send sentence serve seven several sex shade shadow shake shape share sharp she sheep sheet shelf shine ship shirt shoe shoot shop short should shoulder shout show sick side signal silence silly silver similar simple single since sing sink sister sit size skill skin sky sleep slip slow small smell smile smoke snow soap sock soft some someone something sometimes son soon sorry sound soup south space speak special speed spell spend spoon sport spread spring stamp stand star start station stay steal steam step still stomach stone stop store storm story strange street strong structure student study stupid subject substance such sudden sugar suitable summer sun sunny support sure surprise sweet swim sword table take talk tall taste taxi teach team tear telephone tell ten tennis terrible than that the their then there therefore these thick thin thing think third this though threat three tidy tie title today toe tomorrow tonight too tool tooth top total town tram travel tree trouble true trust twice turn type ugly uncle under unit until up useful usual usually vegetable very village voice visit wait wake walk want warm wash waste watch way weak wear weather wedding week weight welcome were well west wet wheel when where which while white who wide wife wild will wind window wine winter wire wise wish with without woman wonder word work world worry yard yell yesterday you young your zero dream dress drink drive drop dry duck dust duty.best big bird birth birthday black bleed block blood blow board boat teabag lighter kids go to hell jangle tangle mangle body boil biomass clipper flipper bonkers bamboo baboon candle cap car card care careful careless carry case catch central century certain chair chance change chase cheap cheese chicken child chocolate choice choose circle city class clever clean clear climb clock cloth clothes cloud close coffee cold collect colour comb common compare come complete computer condition continue control cook cool copper correct cost contain count country course cover crash cross cry cup cupboard cutbring brother brown build business bus busy but buy by book border borrow both bottle bottom bowl branch brave breakfast breathe bridge baby back ball bank basket bean bear bedroom behave begin behind autumn apple appear attack arrive above across active afraid agree air along always another answer set awe at for saw poo wee jo dim sum act add age ago am an any away can bad bag eat eye corn coin coat face facts fox its hers leg left lie off of my pan pin put rob six use test train tea win yet zoo calling laugh cobble tight pi pawn bob bib so we low high tattered matter gravity solar eclipse rubble rumble jungle gym shower bath water runner cause effect glass metal bricks scaffold trek rye pages cubicle pottery club him rim trash pig cow cat kitten puppy bitten smelt thunder monsoon driver burn knot knit fork was lit snicker valley cliff ice womp yolk caving fickle try again thank eagle armchair wickets Square Charming See Love call towards together heather going doing pushing giving live stink bracket grass weeds fire flame never name cuddly glued fallen angel quartz diamonds forever baseball golf touch striker bed damp rainy wooden wool xray duvet octopus hurricane typhoon sharpener October august renegade hero battle salad dressing skirt plaster Paris cathedral pope mountain shouting whisper dunk monkey banana bandana shot sheriff riff shredder header park blue frisbee sushi australia america joker cities falconry Lancelot magic spells potion ocean coral reef clown laughter soaking super powers action man lady wrestle key look whole grains bread butter fudge coconut bouncy children hugs fuzzy essential mix trickster corner mirror reflect image nose nostrils why what no yes lick brush paint rainbow goose healing mind tune groovy lost stuck confused tired goodbye Vaccine Roll Grind Teaching Learn Knowledge Wheels Stick Mud Rat Chimney Satchel Umpire Mason Pray Concrete Strut Hedge Cloudy Sunshine Wildlife Punter Coaster Engine tiger Forest Bloom Cousin Bin Rubbish Massage Cottage Lump Box Signs Rascal Jog Twig Chips Fishes Triangle Art Spiritual Magpie Hikers Italy Quiz Quiet Click Bone Extra Journey'



actualWordsBB = actualWordsBB.toLowerCase().split(' ');


//find duplicates
// for(var i=0; i<actualWordsBB.length ;i++){
//     var wword = actualWordsBB[i]
//     actualWordsBB.splice(i,1)
//     if(actualWordsBB.indexOf(wword) != -1){
//         console.log(wword,' is dupe at index ',i)
//     }
// }

// actualWordsBB = actualWordsBB.join(' ')


var actualWords = [[],[],[],[],[],[],[],[],[],[]]

for(var i=0; i<actualWordsBB.length ;i++){
    var leng = actualWordsBB[i].length
    actualWords[leng].push(actualWordsBB[i])
}

for (var i = 0; i < actualWords.length; i++) {
    for (var j = 0; j < actualWords[i].length; j++){
        actualWords[i][j] = actualWords[i][j].split('')
    }
}





