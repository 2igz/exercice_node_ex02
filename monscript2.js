//MODULE HTTP
var http = require('http');

//MODULE PERSONNEL IMPORTE
var dt = require('./myfirstmodule');

//MODULE URL
var url = require('url');

//MODULE FS
var fs = require('fs');

//MISE EN PLACE DU SERVEUR
http.createServer(function (req, res) {

//FORMAT TEXT/BALISE HTML DANS LA PAGE
  res.writeHead(200, {'Content-Type': 'text/html'});


  //JUSTE UN PEUT DE COULEUR! 
  res.write("<body text='white' align='center' style='background-color:#235835'></body>");

  // URL PARSE METHODE : req.url (récupérer un mot dans l'url !)
  var q = url.parse(req.url, true).query;

  // URL PARSER LES MOTS: NAME + LASNAME
  var txt = q.name + " " + q.lastname;



  
  // RENVOI NAME ET LASTNAME DE L URL
  res.write("<h1> " + txt +"</h1>");

  //RENVOI TOUS LES CHAMPS DE L URL 
  res.write("<h1> " + req.url +"</h1>");

  //AJOUTER LA DATE ET L HEURE
  res.write(dt.myDateTime());


   //ENREGISTRER DANS UN NOUVEAU FICHIER
 fs.appendFile('log_date.log', dt.myDateTime() + req.url + txt ,function (err) {
  if (err) throw err;
  console.log('Saved!');
});

  
  res.end();
 
  ///TAPER DANS L URL : localhost://3000/?name=mike&lastname=Caligan
  // LE NAME ET LE LASTNAME SERONS RECUPERE ET AFFICHER DANS LA PAGE

}).listen(3000);
