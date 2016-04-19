function word()
	{
		var text= "";
		var consonant = "bcdfghjklmnpqrstvwxyz";
		var vowel = "aeiou";

	    for(var i=0; i <= 2; i++){
	        text += consonant.charAt(Math.floor(Math.random() * 21));
	        text += vowel.charAt(Math.floor(Math.random() * 5));
			}
	    return text;  
	}

document.write(word());