'use strict';

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const Smooch  = require('smooch-core');
// Config
const PORT = 8000;

// Server https://expressjs.com/en/guide/routing.html
const app = express();
const KEY_ID = 'app_59843cf58d5ba151002d322a';
const SECRET = '0vRvQceGX2Xw4bYo3rAc7v43';
const smooch = new smooch({
  keyId : KEY_ID,
  secret :  SECRET,
  scope: 'app'

});
const app = express();
app.use(bodyParser.json());

app.post('/message',function(req,res){
  console.log('webhook PAYLOAD:\n',JSON.stringify(req.body,null,4 ));
  const appUserId = req.body.appUser._id;
});
if(req.body.trigger==='message.appUser'){
  smooch.appUsers.sendMessage(appUserId,{
    type:'text',
    text:'live long,and prosper',
    role:'appMaker'
  }).then(response) => {
    console.log('API RESPONSE:\n',response);
    res.end();
  }.catch(err) => {
    console.log('API ERROR:\n',err);
    res.end();
  }
}
// Listen on port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
