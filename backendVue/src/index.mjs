import app from './app.mjs'

app.listen(app.get('port'));

console.log('server on port', app.get('port'));