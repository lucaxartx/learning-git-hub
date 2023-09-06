const http = require('http')

const server = http.createServer((req,res)=>{// req= incomming request 
    // res = we send back a response 

    // we can do this directly and we get an output in our browser 
    // res.write('welcome to our homepage ')
    // res.end()// end the request 
    
    // this will enable users issue different request 

if (req.url == '/'){
    res.end('welcome to our homepage ');
    return;
}

if(req.url == '/about'){
    res.end('here is our short history ');
    return;
}

//default response to non existing pages 
res.end(
`    <h1>oopps!</h1>
    <p>page not found </p>
    <a href='/'>back home </a>
`
)
// alternatively we can easily use if else statements then no need for 'return'
})
server.listen(5000)



