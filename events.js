const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}

const myEmitter = new Sales();




myEmitter.on("newSale", ()=>{
    console.log('There is a new sale')
})

myEmitter.on("newSale", ()=>{
    console.log('Customer name Ahad')
})

myEmitter.on("newSale", stock=>{
    console.log(`Customer bought ${stock} items`);
})

myEmitter.emit('newSale', 5);

/////////////////////////////

const server = http.createServer();


server.on('request',(req, res)=>{
    console.log('listening 1');
        console.log(req.url);
    res.end('Request accepted')
})


server.on('request',(req,res)=>{
    console.log(req.url);
    console.log('listening 2')
})


server.close('close',()=>{
    console.log('server closed')
})


server.listen(8000, '127.0.0.1', ()=>{
    console.log('Waiting for listening..')
})