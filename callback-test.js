var fs = require("fs");

if(1){
    //非回调调用测试
    var data = fs.readFileSync("input.txt");
    
    console.log(data.toString());

}else{
    //回调函数调用测试
    fs.readFile("input.txt", function(err,data){
        if(err) return console.error(err);
        console.log(data.toString());
    })
}
console.log("Program Ended");


