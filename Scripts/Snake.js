//	KEY			CODE
// ENTER		  15
// ARROW_UP		  38
// ARROW_DOWN	  40
// ARROW_LEFT	  37
// ARROW_RIGHT	  39
// W 			  87
// S 			  83
// A 			  65
// D 			  68
//Varaibles used
const size =10;
var width = Math.round(window.innerWidth*.8/size)*size;
var height = Math.round(window.innerWidth*.4/size)*size;
var gameSpace, x,y,length,dir, gameRun, candx, candy,score,gameArea, Area404, Game404,curDir;
var running=false;
var GameRunning=false;

function setSize(){
	if (window.innerWidth<window.innerHeight){
	 	width = Math.round(window.innerWidth*.8/size)*size;
         	height = Math.round(window.innerWidth*.4/size)*size;
	}else{
		width = Math.round(window.innerHeight*.8/size)*size;
		height = Math.round(window.innerHeight*.4/size)*size;	
	}
}

//To reset VAlues between Games
function setVals(){
	x=[Math.round(width/(2*size))*size,Math.round(width/(2*size))*size,Math.round(width/(2*size))*size,Math.round(width/(2*size))*size];
	y=[Math.round(height/(2*size))*size,Math.round(height/(2*size))*size,Math.round(height/(2*size))*size,Math.round(height/(2*size))*size];
	length=1;
	dir=0;
	candx=Math.round(Math.random()*width/size)*size;
	candy=Math.round(Math.random()*height/size)*size;
	score=0;
	curDir=0;
}

//remove the gamearea html to display raw 404 screen
function removeGame(){
	gameArea = document.getElementById("GAMEAREA");
	Game404 =document.getElementById("GameOver");
	document.getElementById("rmGame").removeChild(Game404);
	document.getElementById("rmGame").removeChild(gameArea);
	Area404 = document.getElementById("404-info");
}

//set up game area
function setUpCanvas(){
	tmp=document.getElementById("Game");
	tmp.style="border: 5px solid gray";
	tmp.width = width;
	tmp.height = height;
	gameSpace= tmp.getContext("2d");
	gameSpace.fillStyle = "#FF0000"
	gameSpace.font="2em Arial";
}

//display desired message on game area
function pressToPlay(message){
	gameSpace.clearRect(0,0,width,height);
	gameSpace.fillStyle = "#FF0000"
	gameSpace.font="2em Arial";
	gameSpace.fillText(message,(width-gameSpace.measureText(message).width)/2,height/2);

}

//Interacts with key inputs from the webpage
function interface(event) {
    var keyIn = event.which;
    // the press any key
    if (!running){
    	running=true;
    	setVals();
    	document.getElementById("rmGame").appendChild(gameArea);
    	document.getElementById("rm404").removeChild(Area404);
    	pressToPlay("Press Enter to Begin");
    //the screen after and all game inputs
	}else{
   if (keyIn==13 && !GameRunning){
   		GameRunning=true;
   		//game clcok
   		gameRun=setInterval(function(){GameLoop();DrawGame();},1000/20);
   }
   else if (keyIn==40) //Arrow down
   		dir=keyIn;
   else if(keyIn==38) //Arrow up
   		dir=keyIn;
   	else if(keyIn==37) //Arrow left
   		dir=keyIn;
   	else if(keyIn==39) //Arrow right
   		dir=keyIn;
   	else if(keyIn==87) //Arrow right
   		dir=keyIn;
   }
}

//the candy / food relocation 
function resetCand(){
	//updaet score and replace candy
	scoreUpdate();
	candx=Math.round(Math.random()*width/size)*size;
		candy=Math.round(Math.random()*height/size)*size;
	//ensure candy is not under snakes body
	while(isSnake(candx,candy)){
		candx=Math.round(Math.random()*width/size)*size;
		candy=Math.round(Math.random()*height/size)*size;
	}
}

//update score
function scoreUpdate(){
	score+=10;
	document.getElementById("score").innerHTML="Score: "+String(score);
}

//cehck if a cooridante is under the snake body
function isSnake(xT,yT){
	for(i=1;i<length;i++)
		if (xT==x[i] && yT==y[i])
			return true;
	return false;
}

//main game loop
function GameLoop(){
	//if food is eaten
	if(x[0]==candx && y[0]==candy){
		resetCand();
		length++;
	}
	//move snake body to the enxt spot
	for (i=length-1;i>0;i--){
		x[i]=x[i-1];
		y[i]=y[i-1];
	}

	//parse user input, if they are trying to go in a 180 do not allow it
 	if (dir==40 && !(curDir==38)) //Arrow down
   		curDir=dir;
   else if(dir==38 && !(curDir==40)) //Arrow up
   		curDir=dir;
   	else if(dir==37 && !(curDir==39))  //Arrow left
   		curDir=dir;
   	else if(dir==39 && !(curDir==37)) //Arrow right
   		curDir=dir;

   	//move the snake in it's current direction
	if (curDir==40) //Arrow down
   		y[0]+=size;
   else if(curDir==38)//Arrow up
   		y[0]-=size;
   	else if(curDir==37) //Arrow left
   		x[0]-=size;
   	else if(curDir==39)//Arrow right
   		x[0]+=size;

   	//the edge overflow, to loop the snake
   	if(x[0]<0)
   		x[0]=width-size;
   	else if (x[0]>width-1)
   		x[0]=10;
   	else if (y[0]<0)
   		y[0]=height-size;
   	else if (y[0]>height-1)
   		y[0]=0;

   	//if the snake is eating itself end the game
   	if (isSnake(x[0],y[0])){
   		GameOver();
   	}
}

//if the game is over
function GameOver(){
	//setattributes to gemeis over
	GameRunning=false;
	running=false;
	//remove game area and replace with post game 404area
	document.getElementById("rmGame").removeChild(gameArea);
	Area404=Game404;
    document.getElementById("rm404").appendChild(Area404);
    document.getElementById("scoreLose").innerHTML="Press a key and you can try to beat a score of "+String(score);
	//stop game clock
	gameRun.clearInterval();
}

//draw the graphics
function DrawGame(){
	//erase game area
	gameSpace.clearRect(0,0,width,height);
	//draw head
	gameSpace.fillStyle = "#0000FF"
	gameSpace.fillRect(x[0],y[0],size,size);
	//draw body
	gameSpace.fillStyle = "#FF0000"
	for (i=1;i<length;i++){
		gameSpace.fillRect(x[i],y[i],size,size);
	}	
	//draw candy
	gameSpace.fillStyle = "#00FF00"
	gameSpace.beginPath();
	gameSpace.arc(candx+(size/2),candy+(size/2), size/2, 0, Math.PI*2, true); 
	gameSpace.closePath();
	gameSpace.fill();

}
