const http=require('http');
const port=7777;


var server=http.createServer();
server.listen(port,function(err){
    if(err)
        console.log("Error");
    
    console.log("server is running on the port no:",port);    
});