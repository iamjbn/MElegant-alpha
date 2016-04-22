// author: fennecfox

// function to get current cursor location
function getCaret(el) {
  if (el.selectionStart) {
    return el.selectionStart;
  } else if (document.selection) {
    el.focus();

    var r = document.selection.createRange();
    if (r == null) {
      return 0;
    }

    var re = el.createTextRange(),
        rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);

    return rc.text.length;
  }
  return 0;
}
/*
//function to suggest malayalam words
function fillWords(box){
    alert("fillWords");
    var textarea = box;
    textarea.focus();
    var currentPos = getCaret(textarea);
    alert(currentPos);

    var tex="";
    var i=0;
    while(textarea.value.charAt(currentPos-i) != " " && currentPos-i > 0){
	    tex+=textarea.value.charAt(currentPos-i);
	    i++;
    }
    tex = textarea.value.substring(currentPos-i,currentPos);
    var malayalam = get_ml(tex);

    var textsuggest = document.getElementById('suggest-para');
    textsuggest.innerHTML = malayalam;

}*/

//function to insert converted malayalam text
function InsertText(from,to) {
    var currentPos = GPS;

    var tex="";
    var i=0;
    /*while(to.val().charAt(currentPos-i) != " " && currentPos-i > 0){
	    tex+=to.val().charAt(currentPos-i);
	    i++;
    }
    tex = to.val().substring(currentPos-i,currentPos);*/
    var malayalam = from.text();
    tex = to.val();
    //tex = tex.replaceAt(currentPos-i,currentPos," "+malayalam+" ");
    to.val(tex.substring(0, GPS) + malayalam + " " + tex.substring(GPS) );
}

/*
//function to replace old english word with new malayalam word
String.prototype.replaceAt=function(sindex, eindex, replace) {
    return this.substr(0, sindex) + replace + this.substr(eindex+replace.length);
}*/
