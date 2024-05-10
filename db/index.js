const express = require('express');
const app = express();

app.listen(8081, function() {
  console.log('listening on 8081')
});

// 누군가 /cat 으로 방문하면 고양이 라고 하자
app.get('/cat', function(req, response) {
  response.send('고양이!!!')
})
// 누군가 /dog 으로 방문하면 dog 라고 하자
app.get('/dog', function(req, response) {
  response.send('dog!!!')
})
// 누군가 / 으로 방문하면 dog 라고 하자
app.get('/', function(req, response) {
  response.sendFile(__dirname + '/index.html')
})