
// map list
var map_list = ["crash cove", "mystery caves", "sewer speedway", "roo's tubes", "slide coliseum", "turbo track", "coco park", "tiger temple", "papu's pyramid", "dingo canyon", "polar pass", "tiny arena", "dragon mines", "blizzard bluff", "hot air skyway", "cortex castle", "n. gin labs", "oxide station", "inferno island", "jungle boogie", "clockwork wumpa", "android alley", "electron avenue", "deep sea driving", "thunder struck", "tiny temple", "meteor gorge", "barin ruins", "out of time", "assembly lane", "hyper spaceway", "retro stadium", "twilight tour", "prehistoric playground", "spyro circuit", "nina's nightmare", "koala carnival", "gingerbread joyride", "megamix mania"]
// creates a copy so elements can be deleted
var copy_list = [];

for (let i = 0; i < map_list.length; i++){
  copy_list[i] = map_list[i];
}

//---------------------------------------------------------------
// Code for no-repeat
//---------------------------------------------------------------


function getRandomAndDelete(){

// if theres more than 1 map in copy_list, display random map name and then delete it from the list.
if (copy_list.length >= 1) {
var index = Math.floor(Math.random()*copy_list.length);
var map = copy_list[index];
var length = copy_list.length;



document.getElementById("mapTextArea").style.display = "block";

document.getElementById("mapTextArea").innerHTML = map;
copy_list.splice(index,1);

document.getElementById("counterArea").innerHTML = length-1 + " MAPS LEFT";

// if theres only one map left, say so.
if (copy_list.length == 1) {
  document.getElementById("counterArea").innerHTML = "1 MAP LEFT";
}
}


// otherwise, get rid of map text area and show reset button
else {
  document.getElementById("mapTextArea").innerHTML = " ";
  document.getElementById("counterArea").innerHTML =  "NO MAPS LEFT";

  document.getElementById("rdmButton").style.visibility = "hidden";

  document.getElementById("resetButton").style.visibility = "visible";

  document.getElementById("resetButton").style.display = "block";

  document.getElementById("rdmButton").style.display = "none";



}
}

function reset(){

// gives all maps back to copy list
  copy_list = [];

  for (let i = 0; i < map_list.length; i++){
  copy_list[i] = map_list[i];
}

// resets html
   document.getElementById("rdmButton").style.visibility = "visible";

   document.getElementById("mapTextArea").innerHTML = " ";

   document.getElementById("counterArea").innerHTML = " ";



   document.getElementById("resetButton").style.visibility = "hidden";

   document.getElementById("resetButton").style.display = "none";

   document.getElementById("rdmButton").style.display = "block";

   document.getElementById("mapTextArea").style.display = "none";

}

//---------------------------------------------------------------
// Code for repeat
//---------------------------------------------------------------


function getRandomMap(){
  var index = Math.floor(Math.random()*map_list.length);
  var map = map_list[index];

  document.getElementById("mapTextArea").innerHTML = map;
  document.getElementById("mapTextArea").style.display = "block";
}

