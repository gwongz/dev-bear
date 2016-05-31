import express from 'express'
const app = express()

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static('public'));

app.get('/'), (request, response) => {
    response.render('index');
}

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
