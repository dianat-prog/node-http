const pageData=require('./data.js')
const http=require('node:http');

const server=http.createServer((req,res)=>{
     res.end(`<!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${pageData.title}</title>
            </head>
            <body>
                <header>
                    <h1>${pageData.title}</h1>
                    <div class="topnav">
                        <a class="active" href="#${pageData.menu[0]}">${pageData.menu[0]}</a>
                        <a href="#${pageData.menu[1]}">${pageData.menu[1]}</a>
                        <a href="#${pageData.menu[2]}">${pageData.menu[2]}</a>
                    </div>
                    
                    <h2>${pageData.subtitle}</h2>
                </header>
                <main>
                    <p>${pageData.description}</p>
                </main>
            </body>
         </html>
`)

});

server.listen('3000',()=>{
    console.log(`Server listening on port http://localhost:${server.address().port}`)
})

