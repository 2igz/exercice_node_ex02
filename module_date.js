//MODULE HTTP
var http = require('http');

// CHERCHER LE MODULE PERSONNALISER/ APPEL DE LA FUNCTION DATE
var dt = require('./myfirstmodule');

//MISE EN PLACE DU SERVER
http.createServer(function (req, res) {
    //FORMAT TEXT / BALISE HTML DANS LA PAGE
    res.writeHead(200, {'Content-Type': 'text/html'});
    
     //JUSTE UN PEUT DE COULEUR! 
     res.write("<body text='white' align='center' style='background-color:#235835'></body>");



    res.write("Date en temps reel :" + dt.myDateTime());

    //RENVOI HELLO WORLD DANS LA PAGE
    res.end('JavaScript vous offre l"heure!');

    //ECOUTE SUR LE PORT 3000
}).listen(3000);