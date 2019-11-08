const path = require('path');
const express = require('express');
const app = express();
const dist = 'dist/tudo-apetitoso';

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, dist)));

app.all('*', function(req, res) {
 res.status(200).sendFile(
   path.join(__dirname, dist, 'index.html')
 );
});

app.listen(app.get('port'), function() {
 console.log('Node executando na porta ', app.get('port'));
});