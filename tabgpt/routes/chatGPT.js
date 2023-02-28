//  Dependencies
var express = require('express');
var router = express.Router();
const { Configuration, OpenAIApi } = require("openai");

//  Load environment variables
require('dotenv').config()

//  Init OpenAI object
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

/* call chatGPT and send response back. */
router.post('/', function(req, res, next) {
    
  //  Get the prompt from our API call
  let promptText = req.body.prompt;
  console.log("Data Received from chat post request--" + JSON.stringify(promptText))
  
  //  Execute API call to OpenAI
  openai.createCompletion({
      model: "text-davinci-003",
      temperature: 0.9,
      prompt: promptText,
      max_tokens: 500
    }).then ( (gptRes)=>{
      //  Succesful response from OpenAI
      console.log("res from the open ai api call--", gptRes.data)
      //  Return the first choice's text
      res.send(gptRes.data.choices[0].text);
    }, (err)=>{
      //  Error from OpenAI API
      console.log("Error calling chatGPT API service!! error is " +  err);
      //  Respond with the error message
      res.send("Error calling chatGPT API service!! error code is --" + err) 
    })
});


module.exports = router;
