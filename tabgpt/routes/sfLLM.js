var express = require('express');
var router = express.Router();

const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
console.log('loggin process env', process.env.OPENAI_API_KEY)

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  });
  const openai = new OpenAIApi(configuration);

  //let defaultPrompt ="i want you to be an analyst and look at this data set to help me understand how do i improve my business. data set is - "; 
  
  let defaultPrompt ="i want you to be an analyst and look at this data set to help me understand areas which need improvement. Also suggest to me quick win strategies for those areas. data set is - "; 

  async function runChatGPT (promptText) {
   const completion = await openai.createCompletion({
     model: "text-davinci-003","temperature": 0.9,
     prompt: promptText,
     max_tokens: 500
   },(err)=>{console.log("Error calling openai service "+ err)});

console.log( "openai completion res" + completion.data.choices[0].text); 
return completion.data.choices[0].text;

   }

/* call chatGPT and send response back. */
router.post('/', function(req, res, next) {
    

    let promptText = req.body.prompt;
    console.log("Data Received from chat post request--" + JSON.stringify(promptText))
    

    openai.createCompletion({
        model: "text-davinci-003","temperature": 0.9,
        prompt: promptText,
        max_tokens: 500
      }).then ( (gptRes)=>{
        console.log("res from the open ai api call--", gptRes)
        res.send(gptRes.data.choices[0].text);
      }, (err)=>{console.log("Error calling chatGPT API service!! error is " +  err);
      res.send("Error calling chatGPT API service!! error code is --" + err) })




});


module.exports = router;
