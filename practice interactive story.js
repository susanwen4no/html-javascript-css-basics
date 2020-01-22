function removeElement(elementId) {
 	var element = document.getElementById(elementId);    			
	element.remove();

	//element.parentNode.removeChild(element);
	//older browsers do not support .remove() so have to use the commented out ver
	}
		
function addElement(typeIn, textIn, existingId, classIn, setId){
	var newElement = document.createElement(typeIn);
	var txt = document.createTextNode(textIn);
	newElement.appendChild(txt);
	newElement.className = classIn;
	newElement.setAttribute("id", setId);

	var existingElement = document.getElementById(existingId);
	existingElement.appendChild(newElement);
	}

function addStorySegment(textIn, setId){
	addElement("p", textIn, "story", "story", setId);}

function addChoice(textIn, setId){
	addElement("button", textIn, "choices", "choices", setId);}