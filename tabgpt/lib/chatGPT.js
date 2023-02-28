const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

 let defaultPrompt ="i want you to be an analyst and look at this data set to help me understand how do i improve my business. data set is - ";  

   async function runChatGPT (promptText) {
    const completion = await openai.createCompletion({
      model: "text-davinci-003","temperature": 0.9,
      prompt: promptText,
      max_tokens: 500
    });

 console.log( completion.data.choices[0].text); 
 return completion.data.choices[0].text;

    }

let imagePrompt = "a creature looking like bunny and genie doing presentation of financial figues to the board members"

   async function runImage() {

   let response = await openai.createImage({
        prompt: imagePrompt,
        n: 1,
        size: "1024x1024",
      });
      image_url = response.data.data[0].url;
      console.log(image_url)
   }

   // runCompletion(); runImage ()