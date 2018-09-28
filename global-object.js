/***
 * @creater:wjiban
 * @create_time:18-9-11 15:43:11
 * @last_modify:wjiban
 * @modify_time:18-9-11 15:43:11
 * @line_count:8
 **/

console.log(__filename);
console.log(__dirname);

function printHello(){
    console.log( "Hello, World!");
 }
 // Now call above function after 2 seconds
 var t = setTimeout(printHello, 200);
 
 // Now clear the timer
 
 clearTimeout(t);  

 // Now call above function after 2 seconds   与setTimeout一样
//setInterval(printHello, 2000);
console.log("11:"+process.getgid());