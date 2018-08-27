function StartSets() {
    RemoveAllLetters();
    OffSetOfSets = JSON.parse(JSON.stringify(SetOfSetsReference));
    SetsBool = true;
    console.log('startSets')
    AddRandomSet();
}

function CarryOnSets() {
    console.log('carryOnSets')
    var rrrand = Math.random();
    console.log('rand: ' + rrrand + ' < ' + (-0.15 + ((3 - NumberOfSets) * (0.3 + (GameLevel * 0.01)))))

    if (rrrand < (-0.15 + ((3 - NumberOfSets) * (0.3 + (GameLevel * 0.01))))) {
        AddRandomSet();
    } else { 
        SetsBool = false; 
        NumberOfSets = 0;
    }
}

function AddRandomSet() {
    NumberOfSets++;

    var raand = Math.floor(Math.random() * OffSetOfSets.length);
    var ChosenSet = OffSetOfSets[raand];
    console.log(ChosenSet)
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
        setletter = ChosenSet[1][i];
        var index = OffCon2Array.indexOf(setletter);
        OffCon2Array.splice(index, 1);
        OnCon2Array.push(setletter);
        turnOnLetter(setletter);
        tempArray.push(setletter);
    }
    for (i = 0; i < ChosenSet[2].length; i++) {
        setletter = ChosenSet[2][i];
        var index = OffCon1Array.indexOf(setletter);
        OffCon1Array.splice(index, 1);
        OnCon1Array.push(setletter);
        turnOnLetter(setletter);
        tempArray.push(setletter);
    }
    OnSetofSets.push(tempArray);
}