//-------------------------------------------//
//---------------  Education ----------------//
//-------------------------------------------//
function EduU(){
	document.getElementById("RH2").className="macColor headerExtraSmall";
	document.getElementById("MacStuff").className="macBg rect widFullCard c3Color";
	document.getElementById("uniLine").innerHTML = "<hr>";
	document.getElementById("uniSkills").innerHTML = "<tr>    <td>     <li></li>    </td>    <td>     Learning the software development life cycle    </td>   </tr>";
	document.getElementById("MacToFill").innerHTML = "<br><br>Relevant Projects:<br><hr><table>   <tr>    <td>     <li></li>    </td>    <td>     Worked effectively with colleagues in order to design and implement a basic computer based shopping interface. This required the task to split into modules which were delegated to individuals, requiring good communication in order to allow the modules to work in unison when put together.  </td></tr><tr><td></td><td><a class='fontSmall'></a></td></tr> <tr>    <td>     <li></li>    </td>    <td>     Worked effectively in a team of 3 in order to design, model and prototype a gear train designed to step down a high speed motor in order to drive a Disc-Reader. This allowed for strong problem solving skills as well as communication skill in order to get the gear train to fit the precise specifications.   </td>   </tr>  <tr><td></td><td><a class='fontSmall'></a></td></tr> <tr>    <td>     <li></li>    </td>    <td>     Managed time efficiently in creating a program that required a maze to be solved following a complex algorithm in a minimal amount of time. </td>   </tr></table>";
}
function EduUBye(){
	document.getElementById("RH2").className="c4Color headerExtraSmall";
	document.getElementById("MacStuff").className="rect widFullCard";
	rmInnerHtml('MacToFill');
	rmInnerHtml('uniLine');
	rmInnerHtml('uniSkills');
}
function EduH(){
	EduUBye();
	document.getElementById("RH2").className="nhsColor headerExtraSmall";
	document.getElementById("NHSLine").innerHTML = "<hr>";
	document.getElementById("NHSSkills").innerHTML = "";
	document.getElementById("NHSStuff").className="nhsBg rect widFullCard c3Color";
	document.getElementById("NHSToFill").innerHTML = 'Relevant Projects:<hr><table><tr>    <td>     <li></li>    </td>    <td>    <a href="Portfolio.html#Tetraverse" class="noDecoration c3Link">     Designed a program, in a team of 4 that required graphics, internal frameworks and multiple threads. Which required delegating in this project I had taken a leadership role. (Full Details in Portfolio)     </a> </td>   </tr><tr><td></td><td><a class="fontSmall"></a></td></tr><tr><td><li></li></td><td>Designed a simple airplane flight booking system; the system allowed users to choose from a selection of planes or design there own. A Full GUI was included the program kept track of flight locations, users and the admin could remove planes from the system. </td></tr></table>';

}
function EduHBye(){
	document.getElementById("RH2").className="c4Color headerExtraSmall";
	document.getElementById("NHSLine").innerHTML = "";
	document.getElementById("NHSSkills").innerHTML = "";
	document.getElementById("NHSStuff").className="rect widFullCard";
	document.getElementById("NHSToFill").innerHTML = "";
}
//-------------------------------------------//
//-------------  Work Experince -------------//
//-------------------------------------------//
function WELC(){
	closeOff();
	document.getElementById("LCStuff").className="LCBg rect widFullCard c1Color";
	document.getElementById("LCfill").innerHTML='<table>                        <tr>                          <td>                            <li></li>                          </td>                          <td>                            Created algorithm to prioritize customers in order to maximize profits within the \'sale period\'                          </td>                        </tr>                        <tr>                          <td></td>                          <td>                            <a class="fontSmall"></a>                          </td>                        </tr>                        <tr>                          <td>                            <li></li>                          </td>                          <td>                            Interacted with a high volume of customers daily demonstrating strong communication skills                          </td>                        </tr>                        <tr>                          <td></td>                          <td>                            <a class="fontSmall"></a>                          </td>                        </tr>                        <tr>                          <td>                            <li></li>                          </td>                          <td>                            Taught co-workers how to integrate given tablets into their sales pitch                          </td>                        </table>                        <br>';
	document.getElementById("RH6").className="LCColorLight headerExtraSmall";
}
function WELCBye(){
	document.getElementById("LCStuff").className="rect widFullCard";
	document.getElementById("LCfill").innerHTML="";
	document.getElementById("RH6").className="c4Color headerExtraSmall"
}
function WEMG(){
	closeOff();
	document.getElementById("MGStuff").className="MGBg rect widFullCard c1Color";
	document.getElementById("MGfill").innerHTML='<table>                            <tr>                              <td>                                <li></li>                              </td>                              <td>                                Designed and implemented a new organizational software to increase efficiency                              </td>                            </tr>                            <tr>                              <td></td>                              <td>                                <a class="fontSmall"></a>                              </td>                            </tr>                            <tr>                              <td>                                <li></li>                              </td>                              <td>Reorganized system for documenting billable hours</td>                            </tr>                            <tr>                              <td></td>                              <td>                                <a class="fontSmall"></a>                              </td>                            </tr>                            <tr>                              <td>                                <li></li>                              </td>                              <td>Analyzed income statements and assisted with trend prediction</td>                            </tr>                          </table>                          <br>';
	document.getElementById("RH6").className="MGColorLight headerExtraSmall";
}
function WEMGBye(){
	document.getElementById("MGStuff").className="rect widFullCard";
	document.getElementById("MGfill").innerHTML="";
	document.getElementById("RH6").className="c4Color headerExtraSmall"
}
function WEHG(){
	closeOff();
	document.getElementById("HGStuff").className="HGBg rect widFullCard c1Color";
	document.getElementById("HGfill").innerHTML='<table>                              <tr>                                <td>                                  <li></li>                                </td>                                <td>                                  Tracked incoming and outgoing vehicles to ensure owners would not drive off without paying                                 </td>                              </tr>                              <tr>                                <td></td>                                <td>                                  <a class="fontSmall"></a>                                </td>                              </tr>                              <tr>                                <td>                                  <li></li>                                </td>                                <td>                                  Upsold promotions to customers as well as the loyalty program, registering up to 50 new members a shift                                </td>                              </tr>                              <tr>                                <td></table>                                <br>';
	document.getElementById("RH6").className="HGColorLight headerExtraSmall";
}
function WEHGBye(){
	document.getElementById("HGStuff").className="rect widFullCard";
	document.getElementById("HGfill").innerHTML="";
	document.getElementById("RH6").className="c4Color headerExtraSmall"
}

//-------------------------------------------//
//-----------  Relevant Experince -----------//
//-------------------------------------------//
function REHW(){
	closeOff();
	document.getElementById("HWimg").style.width = "40%";
	document.getElementById("HWdev").innerHTML='<br><a href="http://devpost.com/software/welcome-to-canada-u31nph" class="noDecoration center" ><table style="margin: 0px auto;"><td><img src="Icons/DevPost.png" width="60em"></img></td><td><a class="noDecoration c3Link">DevPost</a></td></table></a><br>';
	document.getElementById("RH5").className="HWColor headerExtraSmall";
	document.getElementById("HWStuff").className="HWBg rect widFullCard c3Color";
	document.getElementById("HWfill").innerHTML='Project:<br><table>   <tr>    <td class="HWColor">     <li></li>    </td>    <td>     <a href="Portfolio.html#AboutCanada" class="noDecoration c3Link">     Worked with a team of 4 to create an android application targeted toward immigrants that have just arrived in Canada in order to help make the transition simpler. (Full Details in Portfolio)     </a>    </td>   </tr>   </table>   <bR>Experience:<br><table>   <tr>    <td>     <li></li>    </td>    <td>     First time making a successful live online lookup system. This was used to translate common words into the users native language    </td>   </tr>  <tr><td></td><td><a class="fontSmall"></a></td></tr> <tr>    <td>     <li></li>    </td>    <td>     First full fledged functional android application, created from scratch start to finish    </td>   </tr></table><br><a class="fontSmall"></a>'
}
function REHWBye(){
	document.getElementById("HWdev").innerHTML='';
	document.getElementById("HWimg").style.width = "20%";
	document.getElementById("RH5").className="c4Color headerExtraSmall"
	document.getElementById("HWStuff").className="rect widFullCard";
	document.getElementById("HWfill").innerHTML='';
}
function RECTW(){
	closeOff();
	document.getElementById("CTWimg").style.width = "90%";
	document.getElementById("CTWfill").innerHTML='Contest:<br><table>   <tr>    <td class="CTWColor">     <li></li>    </td>    <td>     The contest consisted of 5 questions ranging from easy to hard, and you had to create an algorithm to solve the problem and get the correct output. I had placed in the top 50 earning me a position in the finals; which had come as a shock to me because I had done the preliminary round for fun in an attempt to kill time between classes. Sadly, I did not place in the top 3 the winners consisted of masters and PHD students who specialized in algorithm design.    </td>   </tr>   </table>   <bR>Experience:<br><table><tr>    <td>     <li></li>    </td>    <td>     The code to win contest humbled me and taught me that I have a long way to go, that not every problem can be solved in my head.    </td>   </tr> <tr><td></td><td><a class="fontSmall"></a></td></tr> <tr>    <td>     <li></li>    </td>    <td>     The finals were an experience that taught me the importance of time management. That when you are on a deadline sometimes it is better to use algorithms that are tried and true instead of creating from scratch.    </td>   </tr></table><bR>';
	document.getElementById("RH5").className="CTWColor headerExtraSmall"
	document.getElementById("CTWStuff").className="CTWBg rect widFullCard c3Color";
}
function RECTWBye(){
	document.getElementById("CTWimg").style.width = "80%";
	document.getElementById("CTWfill").innerHTML="";
	document.getElementById("RH5").className="c4Color headerExtraSmall"
	document.getElementById("CTWStuff").className="rect widFullCard";
}
function REHET(){
	closeOff();
	document.getElementById("HETimg").style.width = "70%";
	document.getElementById("HETfill").innerHTML='Project:<br><table>   <tr>    <td class="HETColor">     <li></li>    </td>    <td>     During this Hackathon I had the opportunity to listen to a few researchers speak. During a presentation on data inquiry and collection, a researcher began to speak of the problems with sending out multi-100 question questionnaires asking people what they ate. This appeled to me because I believed that instead of sending out a thick questionnaire to an household hoping for it to be sent back; why not make a non intrusive application with a prompt every so often asking users to enter what they ate instead of making them read through 100s of foods. So I set out and began my work. I thought it was something that I could do on my own, but after 24 hours and a lot of coffee I was only able to achieve half of what I wanted to accomplish. I may not have placed but had many inquires on my application    </td>   </tr>   </table>   <bR>Experience:<br><table><tr>    <td>     <li></li>    </td>    <td>     As my first Hackathon it was daunting going to Harvard. I though I could do it all by myself telling myself  it was just like a school project ,  I ll end up coding it all anyway . The most important lesson that I learned from this is that when you are on a deadline, nothing is more important then a good team and proper delegation.     </td>   </tr><tr><td></td><td><a class="fontSmall"></a></td></tr><tr>    <td>     <li></li>    </td>    <td>     This was the first time I had created an android application. In the end the applicaiton had less then half of the features I expected it to have; but for a first app it was ok.    </td>   </tr>  <tr><td></td><td><a class="fontSmall"></a></td></tr> <tr>    <td>     <li></li>    </td>    <td>     This even taught me that no matter what any idea can be improved. Many people asked me to be apart of their team but I declined for the product already existed in some form or another. What I learned was that even though a product may already exist less intrusive, less expensive and more effective systems can be made.    </td>   </tr></table><bR>';
	document.getElementById("RH5").className="HETColor headerExtraSmall"
	document.getElementById("HETStuff").className="HETBg rect widFullCard c3Color";
}
function REHETBye(){
	document.getElementById("HETimg").style.width = "40%";
	document.getElementById("HETfill").innerHTML="";
	document.getElementById("RH5").className="c4Color headerExtraSmall"
	document.getElementById("HETStuff").className="rect widFullCard";
}
//-------------------------------------------//
//--------------  non-specfic ---------------//
//-------------------------------------------//
function OpenInNewTab(x) {
  var win = window.open(x, '_blank');
  win.focus();
}
function closeOff(){
	EduHBye();
	REHWBye();
	RECTWBye();
	REHETBye();
	WEHGBye();
	WEMGBye();
	WELCBye();
	document.getElementById("RH2").className="c1Color headerExtraSmall";
	document.getElementById("RH5").className="c1Color headerExtraSmall";
	document.getElementById("RH6").className="c1Color headerExtraSmall";
}
function replaceEle(x,y,z){
	document.getElementById(x).className=document.getElementById(x).className.replace(y, z);
}
function rmInnerHtml(x){
	document.getElementById(x).innerHTML = "";
}
function highlight(x){
	x.className = x.className.replace("c7Bg borderResumec7", "c3Bg borderResumec3" );
}
function highlightHead(y){
	x = document.getElementById(y);
	x.className = x.className.replace("c1Color", "c4Color");
}
function dehighlightHead(y){
	x = document.getElementById(y);
	x.className = x.className.replace("c4Color", "c1Color");
}
function dehighlight(x){
	x.className = x.className.replace("c3Bg borderResumec3","c7Bg borderResumec7");
}
function highlightPoint(y){
	x = document.getElementById(y);
	x.className = x.className.replace("rectc75 c7Bg", "rectc35 c3Bg" );
}
function dehighlightPoint(y){
	x = document.getElementById(y);
	x.className = x.className.replace("rectc35 c3Bg","rectc75 c7Bg");
}
