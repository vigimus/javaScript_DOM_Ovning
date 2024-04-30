//Cacherar dem grejer vi vill använda så att vi slipper repitera oss varje gång

var button = document.getElementById("enter");
var deleteButton = document.getElementById("deleteButton");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


for (var i = 0; i < deleteButton.length; i++) {
	deleteButton[i].addEventListener("click", removeParent, false);
}

function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

function lineThrough(event){
	var a = event.target;

	if (count==0) {
		a.classList.add("done");
	}
	else {
		a.classList.toggle("done");
	}
	count++;
}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}


//Massa funktioner under
function inputLength() {
	return input.value.length;
}

function createListElement() {

    var btn = document.createElement("button");
    btn.innerHTML = "delete";
    btn.oneclick = removeParent;


	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";
    li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
    createListElement();
	}
}

function addListAdterKeypress(event) {
	
	if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
	}	
}

button.addEventListener("click", addListAfterClick);
//Om någon trycker "enter" kör den här funktionen
input.addEventListener("keypress", addListAdterKeypress); 

// 1. Om du klickar på listan så kan du stänga av på klassen .done

// 2. Lägger till en knapp bredvid varje objekt på listan för att ta bort dem

// 3. Så fort du lägger till ett nytt föremål får den radera knappen automatiskt bredvid sig