javascript:
(function(){
  var set_picture;
  var set_pictures = getElementsIgnoringClassName(document.getElementById('setThumbs'), 'a', 'gm_small');

  var output = '';
  var count = set_pictures.length;
  for (var i=0;i<set_pictures.length;i++) {
		output = output + (set_pictures[i].href) + ', ';
  }
  prompt('Copy this output into Vimeo ('+(set_pictures.length)+' photos)', output);

function getElementsIgnoringClassName(oElm, strTagName, strClassName){
	var arrElements = (strTagName == '*' && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
	var arrReturnElements = new Array();
	strClassName = strClassName.replace(/\-/g, '\\-');
	var oRegExp = new RegExp('(^|\\s)' + strClassName + '(\\s|$)');
	var oElement;
	for(var i=0; i<arrElements.length; i++){
		oElement = arrElements[i];
		if(!oRegExp.test(oElement.className)){
			arrReturnElements.push(oElement);
		}
	}
	return arrReturnElements;
}
}





)
()