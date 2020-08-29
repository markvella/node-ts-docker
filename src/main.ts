const express = require('express');
const app = express();
app.get('/', function(req: any, res:any ){
  res.send('hello orld');
});

app.listen(3000);
console.log("loading app on port 3000");