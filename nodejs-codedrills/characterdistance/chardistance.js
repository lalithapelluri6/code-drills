var str = "ilovetowritecode";
var char = "o";

function distanceOf(str,char) {
    var results = [];
    var ind = [];

    for(var i=0; i<str.length; i++){
        if(str[i] === char){
            ind.push(i);
        }
    }
     var arr =[];
    for(var i=0; i<str.length; i++) {
        var temp = [];
      for(var j=0; j<ind.length; j++){
          var x = i - ind[j];
          temp.push(Math.abs(x));
      }
    }
}
 for(var k=0; k<arr.length; i++) {
     //max distance
     var ind = str.length;
     for(var j=0; j<arr[i].length; j++){
         if(arr[i][j] < ind) {
         }
     }
     results.push(arr[j]);
 }
