// author: fennecfox

var GPS=0;

$(document).delegate('.ta_in', 'keydown', function(e) { 
  var keyCode = e.keyCode || e.which; 

  if (keyCode == 9) { 
    e.preventDefault(); 
    var start = $(this).get(0).selectionStart;
    var end = $(this).get(0).selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    $(this).val($(this).val().substring(0, start)
                + "\t"
                + $(this).val().substring(end));

    // put caret at right position again
    $(this).get(0).selectionStart = 
    $(this).get(0).selectionEnd = start + 1;
  } 
});


$(document).keyup(function(e) {

  if (e.keyCode == 27) { 
      displaySuggestionBox(false,e.which);
      $(".ta_in").focus();
  }   // esc
});

$(document).ready(function(){
	
	var white_space = false;
    $( "#overlay-layer" ).hide();
	
	$(".ta_in").on('keydown',function(e){
		//if(e.which == 32 || e.which == 13 || e.which == 9){
        if (!(/[a-zA-Z0-9/|]/.test(String.fromCharCode(e.which)))){
			displaySuggestionBox(false,e.which);
		}else{
            GPS = getCaret(this);                           // gtore position of text to be inserted
			displaySuggestionBox(true,e.which);
		}

	});
    
    $("#mangleesh-input").on('keyup',function(e){
		if(e.which == 32 || e.which == 13 || e.which == 9){
			displaySuggestionBox(false,e.which);
            $(".ta_in").focus();                             // PIPE LOCATION FOR WRITE MODULE..
            InsertText($("#malayalam-suggestion"),$(".ta_in"));
		}else{
			suggestWOrds(this,$("#malayalam-suggestion"));//this);
		}

	});
});

function displaySuggestionBox(display,ch){
	if(display){
        animateBlurEffect(true);
		$( "#overlay-layer" ).show();
		$( "#mangleesh-input" ).val("").focus();
        $( "#mangleesh-input-reflection" ).text($( "#mangleesh-input" ).val());
	}else{
        animateBlurEffect(false);
	}
}


//function to suggest malayalam words
function suggestWOrds(source,target){
    target.text( get_ml(source.value) );
}

function animateBlurEffect(animate){
    if(animate){
        $( "#overlay-layer" ).animate({
            opacity: 0.95
            }, 500, function() {
            // Animation complete.
            });
       /* $('.ta_in')
            .css({
               'filter'         : 'blur(2px)',
               '-webkit-filter' : 'blur(2px)',
               '-moz-filter'    : 'blur(2px)',
               '-o-filter'      : 'blur(2px)',
               '-ms-filter'     : 'blur(2px)'
            }); */
    }else{
        $( "#overlay-layer" ).animate({
            opacity: 0
            }, 500, function() {
            // Animation complete.
		$( "#overlay-layer" ).hide();
            });
    }
}