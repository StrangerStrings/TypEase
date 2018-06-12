/* - - - - - - - - - - - - - - - -
RemoveAllLetters - Reset on and off arrays and give all letters 'off' attr
AddAllLetters    - Reset on and off arrays and give all letters blank attr
turnOnLetter     - the visual side (class) of turning letter on, as is useable
turnOffLetter    - the visual side of turning letter off, available
- - - - - - - - - - - - - - - -  */





function RemoveAllLetters(){
   OnVowelArray = [];
   OnCon2Array = [];
   OnCon1Array = [];
   OffVowelArray =  ['a','e','i','o','u'];
   OffCon2Array  =  ['q','y','j','z','x','v'];
   OffCon1Array  =  ['w','r','t','p','s','d','f','g','h','k','l','c','b','n','m'];
   $('.letter-stnd').attr('name','off');
   // $('.specialring').css({'border-color': '#92DACC'});
}



function AddAllLetters(){
   OffVowelArray = [];
   OffCon2Array = [];
   OffCon1Array = [];
   OnVowelArray =  ['a','e','i','o','u'];
   OnCon2Array  =  ['q','y','j','z','x','v'];
   OnCon1Array  =  ['w','r','t','p','s','d','f','g','h','k','l','c','b','n','m'];
   $('.letter-stnd').attr('name','');
   // $('.specialring').css({'border-color': '#7a71f4'});
}





function turnOffLetter (lettter){
   lettterr = lettter.toUpperCase();
   lettterrr = lettterr.charCodeAt(0);
   $('.letter-'+lettterrr).attr('name','off');

   $('.specialring'+lettterrr).css({'border-color': '#92DACC'});
}



function turnOnLetter (lettter){
   lettterr = lettter.toUpperCase();
   lettterrr = lettterr.charCodeAt(0);
   $('.letter-'+lettterrr).attr('name','');

   $('.specialring.ring'+lettterrr).css({'border-color': '#7a71f4'});
}
