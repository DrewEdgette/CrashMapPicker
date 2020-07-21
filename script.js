var map_list = [];

function resetMaps() {
  map_list = [];
  var scriptUrl = "maps.txt";
$.ajax({
  url: scriptUrl,
  type: 'get',
  dataType: 'html',
  async: false,
  success: function(fileData) 
  {
  var line = "";
  for (var i=0;i<fileData.length;i++) {
    line += fileData[i];
    if (fileData[i] == "\n") {
      map_list.push(line);
      line = "";
    }
  }
  }
});
}


//--------------------------------------------------------------
// Code for no-repeat
//--------------------------------------------------------------


function getRandomAndDelete() {

// if theres more than 1 map in map_list, display random map name and then delete it from the list.
if (map_list.length >= 1) {
var index = Math.floor(Math.random()*map_list.length);
var map = map_list[index];
var length = map_list.length;



document.getElementById("mapTextArea").style.display = "block";

document.getElementById("mapTextArea").innerHTML = map;
map_list.splice(index,1);

document.getElementById("counterArea").innerHTML = length-1 + " MAPS LEFT";

// if theres only one map left, say so.
if (map_list.length == 1) {
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



function reset() {

// gives all maps back to map list
  resetMaps();

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


function getRandomMap() {
  var index = Math.floor(Math.random()*map_list.length);
  var map = map_list[index];

  document.getElementById("mapTextArea").innerHTML = map;
  document.getElementById("mapTextArea").style.display = "block";
}

// resets the map list when the page is loaded up
resetMaps();
