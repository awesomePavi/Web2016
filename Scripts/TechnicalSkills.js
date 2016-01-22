//-------------------------------------------//
//-----------  Technical Skills  ------------//
//-------------------------------------------//
var posSkill = "B2";	
function removeColour(x){
	x.className = x.className.replace( /(?:^|\s)c2Bg(?!\S)/g , '' );
}
function addColour1(x){
	x.className = "c3Bg tableBorderc3"
}
function addColour2(x){
	x.className = "c7Bg tableBorderc7"
}
function removeAll(){
	removeColour(document.getElementById("B1"));
	removeColour(document.getElementById("B2"));
	removeColour(document.getElementById("B3"));
	removeColour(document.getElementById("B4"));
}
function Software(x){
	x.innerHTML = '<a class="fontLarge">There are many pieces of software that can be used to do a job; I have learned a few of these in each area</a><br><br><table><tr><td>Office Products:</td><td><li class="horizontalPoints"> Word<li class="horizontalPoints"> Excel<li class="horizontalPoints"> PowerPoint</td></tr><tr><td>Computer-aided Design:</td><td><li class="horizontalPoints"> AutoCad<li class="horizontalPoints">Blender</td></tr><tr><td>Designs:</td><td><li class="horizontalPoints"> Adobe Dreamweaver<li class="horizontalPoints"> Adobe After Effects<li class="horizontalPoints"> Adobe Photoshop</td></tr></table>';
	removeAll();
	addColour1(document.getElementById("B1"));
	addColour2(document.getElementById("B2"));
	addColour2(document.getElementById("B3"));
	addColour2(document.getElementById("B4"));	
	posSkill = "B1";
	
}
function Programming(x){
	x.innerHTML = "<a class='fontLarge'>I have Worked with a wide range of langauges, some to accomplish a specfic task, some for fun, and some becasue I was told it would be a challenge</a> <br><br><table><tr><td>Profecient:</td><td><li class='horizontalPoints'> Java</td></tr><tr><td>Knowledgeable:</td><td><li class='horizontalPoints'> C<li class='horizontalPoints'>C++<li class='horizontalPoints'>Python<li class='horizontalPoints'>Linux/Unix</td></tr><tr><td>With References:</td><td><li class='horizontalPoints'> HTML<li class='horizontalPoints'> Javascript<li class='horizontalPoints'> Flash<li class='horizontalPoints'> Mips Instruction Set<li class='horizontalPoints'> Linux/Unix<li class='horizontalPoints'> Haskell</td></tr></table>"
	removeAll();
	addColour1(document.getElementById("B2"));
	addColour2(document.getElementById("B1"));
	addColour2(document.getElementById("B3"));
	addColour2(document.getElementById("B4"));	
	posSkill = "B2";
}
function Engineering(x){
	x.innerHTML = '<a class="fontLarge">I have been in my bachelors of Engineering for 2 years now and have picked up a few useful things</a><br><br><table><tr><td>Hardware:</td><td><li class="horizontalPoints"> Basic Circuit Design and Construction </td></tr><tr><td>Software</td><td><li class="horizontalPoints"> MatLab<li class="horizontalPoints">Maple</td></tr></table>';
	removeAll();
	addColour1(document.getElementById("B3"));
	addColour2(document.getElementById("B1"));
	addColour2(document.getElementById("B2"));
	addColour2(document.getElementById("B4"));
	posSkill = "B3";
}
function Equipment(x){
	x.innerHTML = '<a class="fontLarge">After working with many different pieces of hardware, I have learned to pickup interfacing quickly to make effective software</a><br><br><table><tr><td>Proprietary:</td><td><li class="horizontalPoints"> Fitbit<li class="horizontalPoints"> Myo ArmBand<li class="horizontalPoints"> Galaxy Gear</td></tr><tr><td>non-proprietary:</td><td><li class="horizontalPoints"> Arduino <li class="horizontalPoints">LightBlue Bean</td></tr></table>';
	removeAll();
	addColour1(document.getElementById("B4"));
	addColour2(document.getElementById("B1"));
	addColour2(document.getElementById("B2"));
	addColour2(document.getElementById("B3"));
	posSkill = "B4";
}
function highlightSkills(){
	document.getElementById(posSkill).className = document.getElementById(posSkill).className.replace("c7Bg tableBorderc7","c3Bg tableBorderc3");
	document.getElementById("TechSkills").className = document.getElementById("TechSkills").className.replace("rectc75 c7Bg","rectc35 c3Bg");
}
function dehighlightSkills(){
	document.getElementById("B1").className = document.getElementById("B1").className.replace("c3Bg tableBorderc3","c7Bg tableBorderc7");
	document.getElementById("B2").className = document.getElementById("B2").className.replace("c3Bg tableBorderc3","c7Bg tableBorderc7");
	document.getElementById("B3").className = document.getElementById("B3").className.replace("c3Bg tableBorderc3","c7Bg tableBorderc7");
	document.getElementById("B4").className = document.getElementById("B4").className.replace("c3Bg tableBorderc3","c7Bg tableBorderc7");
	document.getElementById("TechSkills").className = document.getElementById("TechSkills").className.replace("rectc35 c3Bg","rectc75 c7Bg");
}