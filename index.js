// import your http
const http= require("http")

//create server with Http
 const server = http.createServer((req, res)=> {
    console.log ("server'is created")
 })

 //initiate port
 const Port = 4000;

 //listen to server
 server.listen(Port, ()=> console.log(`is running on port ${Port}`)) 