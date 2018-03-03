var colors=generateColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor=pickColor();
var display=document.querySelector("#colorChoice");
var massageD=document.querySelector("#massage");
var h1Select=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyButton=document.querySelector("#easyBtn");
var hardButton=document.querySelector("#hardBtn");
var num=6;

// Reset Button

easyButton.addEventListener("click",function()
{
	h1Select.style.backgroundColor="steelblue";
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	num=3;
	colors=generateColors(num);
	pickedColor=pickColor();
	display.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)	
	{
      if(colors[i]){
      	squares[i].style.backgroundColor=colors[i];
      }
     else{
        squares[i].style.display="none";
     }
	}
})

hardButton.addEventListener("click",function()
{
    h1Select.style.backgroundColor="steelblue";
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	num=6;
	colors=generateColors(num);
	pickedColor=pickColor();
	display.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.display="block";
		squares[i].style.backgroundColor=colors[i];
	}
})

resetButton.addEventListener("click",function()//alert! need to add button to play again
{
 resetButton.textContent="NEW COLORS";	
 colors=generateColors(num)//making new colors again
 pickedColor=pickColor();//picking a new color
 display.textContent=pickedColor;
 for(var i=0;i<squares.length;i++)
 squares[i].style.backgroundColor=colors[i];
 h1Select.style.backgroundColor="steelblue";
 massageD.textContent=" "
 
})
display.textContent=pickedColor;//displaying the picked color at the H1

for(var i=0;i<squares.length;i++)
{   
	squares[i].style.backgroundColor=colors[i];//giving colors to the squares
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
        	massageD.textContent="Correct!"
        	for(var j=0;j<squares.length;j++)
        	squares[j].style.backgroundColor=pickedColor;
        	h1Select.style.backgroundColor=pickedColor;
        	resetButton.textContent="Play Again?";		
        }
        else{
            this.style.backgroundColor= "#232323";
            massageD.textContent="Wrong,Try again";
        } 
	});
}




//picking a color from the array of colors
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];
}

//generating a random array of colors
function generateColors(num)
{ 
	var arr=[];
    for(var i=0;i<num;i++)
    	arr.push(randomColor())

	return arr;

}

//creating the colors for the array
function randomColor()
{
  // pick red from 0 to 255
  var red=Math.floor(Math.random()*256);
  //pick green from 0 to 255
  var green=Math.floor(Math.random()*256);
  // pick blue from 0 to 255
  var blue=Math.floor(Math.random()*256);
  return "rgb("+red+", "+ green+", "+ blue+")"
}
