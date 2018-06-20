function StartSets() {
    RemoveAllLetters();
    OffSetOfSets = JSON.parse(JSON.stringify(SetOfSetsReference));
    SetsBool = true;
    console.log('startSets')
    AddRandomSet();
}

function CarryOnSets() {
    var rrrand = Math.random();
    if (rrrand < (-0.15 + ((3 - NumberOfSets) * (0.3 + (GameLevel * 0.01))))) {
        AddRandomSet();
    } else { SetsBool = false; }
}

function AddRandomSet() {
    NumberOfSets++;

    var raand = Math.floor(Math.random() * OffSetOfSets.length);
    var ChosenSet = OffSetOfSets[raand];
    OffSetOfSets.splice(raand, 1);
    tempArray = [];

    for (i = 0; i < ChosenSet[0].length; i++) {
        setletter = ChosenSet[0][i];
        var index = OffVowelArray.indexOf(setletter);
        OffVowelArray.splice(index, 1);
        OnVowelArray.push(setletter);
        turnOnLetter(setletter);
        tempArray.push(setletter);
    }
    for (i = 0; i < ChosenSet[1].length; i++) {
        setletter = ChosenSet[0][i];
        var index = OffCon2Array.indexOf(setletter);
        OffCon2Array.splice(index, 1);
        OnCon2Array.push(setletter);
        turnOnLetter(setletter);
        tempArray.push(setletter);
    }
    for (i = 0; i < ChosenSet[2].length; i++) {
        setletter = ChosenSet[0][i];
        var index = OffCon2Array.indexOf(setletter);
        OffCon2Array.splice(index, 1);
        OnCon2Array.push(setletter);
        turnOnLetter(setletter);
        tempArray.push(setletter);
    }
    OnSetofSets.push(tempArray);
}