
var argOne = process.argv[5];

function uptonumber(num) {
     var result = [];

    for(var i=num; i>0; i--){
        result.push(i);
    }
return result;
}
console.log(uptonumber(6));
//Run your script through the command line using process.argv to pass whatever number you choose.
uptonumber(argOne);
