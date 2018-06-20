var actualWordsBB = 'calling laugh cobble old cold tight it pi so we low high tattered matter gravity solar eclipse rubble rumble jungle gym shower bath water runner cause effect door window glass metal bricks scaffold trek star rye pages cubicle pottery club in who at him rim hurt trash pig cow dog cat kitten puppy bitten smelt thunder monsoon driver turn burn learn not knot knit fork was up lit snicker tiger mountain valley cliff snow ice womp yolk caving fickle try again please thank'

actualWordsBB = actualWordsBB.split(' ');

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





