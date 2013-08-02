$(function(){

		// GET GIPHY JSON
			
	$.getJSON("http://api.giphy.com/v1/gifs/recent?api_key=dc6zaTOxFJmzC", function(data) {

		var d= data.data;
		var ran = Math.floor(Math.random() *d.length);
		var gif = d[ran].images.original.url;
		$('.rage_response').css({background: 'url(' + gif + ')'});
		       
	});

	$('.close_btn').on('click', function() {
	   $(".rage_wrap").removeClass("down");
	   $(".rage_wrap").addClass("up");
	  return false;
	});
	    
	$("#shit_form").submit(function(event) {
		$(".rage_wrap").removeClass("up");
		$(".rage_wrap").addClass("down");

	  	event.preventDefault();
		var $form = $( this );
		var term = $('#textPhrase').val();
		var phraseArr= term.match(/\w+|"[^"]+"/g);

		profanityWords = ["fuck", "cunt", "dick","cock", "shit", 'ass', 'bottom', 'kill', 'damn', 'shit', "crap", "bullshit", "fucking", "blank", "anus", "hate", "fuck", "stab", "punch", "bastard", "sucker", "sucking", "mother", "tits", "shank", "kill", "bury"];
		replaceWords = ["love", "cherries","adorable", "agreeable", "cupcake", "fluffy", "alluring", "punkins","amiable", "angelic", "appealing", "flowers", "butterflies", "rainbows", "hug", "hump", "love", "teddybears", "bubbles", "lollipops", "gumdrops", "attractive", "charming", "cuddly", "delightful", "desirable", "enchanting", "engaging", "fascinating", "genial", "sweet"];
		 

		var regex = new RegExp('\\b' + profanityWords.join('\\b|\\b') + '//b', "gi");

		for ( var i = 0; i < phraseArr.length; i++ ){
			for ( var p = 0; p < profanityWords.length; p++ ){
				if (phraseArr[i].match(profanityWords[p]) ){
					console.log(phraseArr[i])
					newWords(phraseArr[i]);
				}
			}			
		}

		//var newPhrase = term.replace(phraseArr[i], newWords(phraseArr[i]) )
		function newWords(str){
			term =term.replace(str,replaceWords[Math.floor(Math.random()*replaceWords.length)]);
			return term
		}
		$('#happy').html(term)

	});

})
