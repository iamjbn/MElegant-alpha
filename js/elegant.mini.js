function getCaret(t){if(t.selectionStart)return t.selectionStart;if(document.selection){t.focus();var e=document.selection.createRange();if(null==e)return 0;var a=t.createTextRange(),n=a.duplicate();return a.moveToBookmark(e.getBookmark()),n.setEndPoint("EndToStart",a),n.text.length}return 0}function fillWords(t){alert("fillWords");var e=t;e.focus();var a=getCaret(e);alert(a);for(var n="",i=0;" "!=e.value.charAt(a-i)&&a-i>0;)n+=e.value.charAt(a-i),i++;n=e.value.substring(a-i,a);var r=get_ml(n),o=document.getElementById("suggest-para");o.innerHTML=r}function InsertText(t,e){for(var a=GPS,n="",i=0;" "!=e.val().charAt(a-i)&&a-i>0;)n+=e.val().charAt(a-i),i++;n=e.val().substring(a-i,a);var r=t.text();n=e.val(),n=n.replaceAt(a-i,a," "+r+" "),e.val(n)}function displaySuggestionBox(t,e){t?(animateBlurEffect(!0),$("#overlay-layer").show(),$("#mangleesh-input").val(String.fromCharCode(e)).focus(),$("#mangleesh-input-reflection").text($("#mangleesh-input").val())):animateBlurEffect(!1)}function suggestWOrds(t,e){e.text(get_ml(t.value))}function animateBlurEffect(t){t?$("#overlay-layer").animate({opacity:.95},500,function(){}):$("#overlay-layer").animate({opacity:0},500,function(){$("#overlay-layer").hide()})}String.prototype.replaceAt=function(t,e,a){return this.substr(0,t)+a+this.substr(e+a.length)};var GPS=0;$(document).delegate(".ta_in","keydown",function(t){var e=t.keyCode||t.which;if(9==e){t.preventDefault();var a=$(this).get(0).selectionStart,n=$(this).get(0).selectionEnd;$(this).val($(this).val().substring(0,a)+"	"+$(this).val().substring(n)),$(this).get(0).selectionStart=$(this).get(0).selectionEnd=a+1}}),$(document).keyup(function(t){27==t.keyCode&&(displaySuggestionBox(!1,t.which),$(".ta_in").focus())}),$(document).ready(function(){$("#overlay-layer").hide(),$(".ta_in").on("keypress",function(t){32==t.which||13==t.which?displaySuggestionBox(!1,t.which):(GPS=getCaret(this),displaySuggestionBox(!0,t.which))}),$("#mangleesh-input").on("keyup",function(t){32==t.which||13==t.which?(displaySuggestionBox(!1,t.which),$(".ta_in").focus(),InsertText($("#malayalam-suggestion"),$(".ta_in"))):suggestWOrds(this,$("#malayalam-suggestion"))})});