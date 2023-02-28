//load the demo data array for offline case

import { demoRes } from "./demoData.js";

//format the GPT response from 1 para into 4 sentences in multiple para
const formatGPTRes =  function formatGPTRes(res) {
    let formatted = "<p>";
    let sentences = res.split(/\.\s/);
    //console.log("sentences extracted are - ", sentences);
    let noOfParagraph = Math.floor(sentences.length / 3);
  
    let i = 0; //formatting 4 sentences in 1 para
    while (i < sentences.length) {
      if ((i + 1) % 4 != 0) {
        formatted = formatted + sentences[i] + ".";
      }
      if ((i + 1) % 4 == 0) {
        formatted = formatted + sentences[i] + ".</p>" + "<p>";
      }
      ++i;
    }
    //if para length is not multiple of 4 neeed to close it
    if (sentences.length % 4 == 0) {
      formatted = formatted + ".</p>";
    }
  
    return formatted;
  }

  //key value store for caching the results
const kvStore = new Map();

  //demostore to load offline chatgpt responses for demo scenarios.
const initializeDemoStore =  function initializeDemoStore() {
   
    demoRes.forEach(function(res){
      setStore(res.key, res.val)
    })
  }
  
 const setStore =  function setStore(key, val) {
    kvStore.set(key, val);
  }
 
 const getStore = function getStore(key) {
   
    //console.log("key being retrieved", key.trim())
    return kvStore.get(key.trim());
  }

  export {formatGPTRes, initializeDemoStore, getStore,setStore, kvStore}
  