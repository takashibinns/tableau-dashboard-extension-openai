import {
  formatGPTRes,
  getStore,
  setStore,
  initializeDemoStore,
  kvStore,
} from "./lib/helper.js";
//load the demo data for offline case
//import { productRes, shippingRes, manRes, healthRes } from "./lib/demoData.js";

$(document).ready(function () {
  //use this demostore to avoid connecting to internet APIs
  initializeDemoStore();

  //wait for extensions api to initialize
  tableau.extensions.initializeAsync().then(
    function () {
      // Initialization succeeded! Get the dashboard
      const dashboard = tableau.extensions.dashboardContent.dashboard;

      //load the worksheet code to pass initial summary data prompt
      getWorksheets();
      //load the ask subsequent button handler
      askButtonClicked();
    },
    function (err) {
      // something went wrong in initialization
      $("#resultBox").html("Error while Initializing: " + err.toString());
    }
  );

  //when the worksheet is selected trigger the extension api get summary data to fetch and pass data to chatgpt
  $("select.worksheetSelector").change(function () {
    const selectedSheetName = $(this).children("option:selected").val();
    console.log("selected sheet name", selectedSheetName);

    $("#chatGPTBox").text(
      "ChatGPT is processing your request. ChatGPT comes to those who wait :)"
    );
    $("#chatHeader").text("Chat GPT's Advise for: " + selectedSheetName);

    //read the summary data of selected sheet
    getSummaryData(selectedSheetName).then(function () {
      // console.log(dataTable.toString());
    });
  });
});

var formattedTable = []; //this variable is used to store the crosstab extracted form the worksheet summary data

async function getSummaryData(selectedSheetName) {
  const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;

  const selectedSheet = worksheets.find(function (sheet) {
    return sheet.name === selectedSheetName;
  });

  const dataTableReader = await selectedSheet.getSummaryDataAsync();

  //create the column header for table

  let row = "";
  dataTableReader.columns.forEach(function (column) {
    row = row + column._fieldName + ",";
  });
  formattedTable.push(row);

  //create the data rows of table
  let formattedRow = "";
  dataTableReader.data.forEach(function (row) {
    row.forEach(function (val) {
      // console.log("_nativeValue type is ", typeof val._nativeValue);
      if (typeof val._nativeValue === "number") {
        if (val._nativeValue > 1) {
          formattedRow =
            formattedRow + parseFloat(val._nativeValue).toFixed(0) + ",";
        } else {
          formattedRow =
            formattedRow + parseFloat(val._nativeValue).toFixed(2) + ",";
        }
      } else formattedRow = formattedRow + val._nativeValue + ",";
    });

    formattedTable.push(formattedRow);
    formattedRow = "";
  });

  console.log(
    "formatted table of selected sheet -",
    selectedSheetName,
    " looks like ",
    formattedTable
  );

  chatGPTAdviseCall(selectedSheetName);
}

// to call the chat gpt api with the selected sheet for the advise
function chatGPTAdviseCall(selectedSheetName) {
  //let defaultPrompt ="i want you to be an analyst and look at this data set to help me understand how do i improve my business. data set is - ";

  let defaultPrompt =
    "i want you to be an analyst and look at this data set to help me understand areas which need improvement. Also suggest to me quick win strategies for those areas. data set is - ";

  let promptText = defaultPrompt + formattedTable;

  //const storeVal = getStore(promptText);
  const storeVal = getStore(selectedSheetName);

  console.log("cache val retrieved--", storeVal);
  //check the cache
  if (storeVal === undefined) {
    //call the chatGPT server side api in express
    callGPTApi(promptText).then(function (gptRes) {
      //store val in cache
      console.log("sheet being stored in cache", selectedSheetName);
      setStore(selectedSheetName, gptRes);
    });
  } else {
    $("#chatGPTBox").html(formatGPTRes(storeVal));
  }
}

//when the ask gpt button is clicked for subequent quetsions
function askButtonClicked() {
  $("#askButton").click(function () {
    //disable the button
    $("#askButton").prop("disabled", true);

    $("#chatGPTBox").text(
      "ChatGPT is processing your request. ChatGPT comes to those who wait :)"
    );

    let finalPrompt =
      $("#promptInput").val() + ". the data set is - " + formattedTable;

    callGPTApi(finalPrompt).then(function () {
      console.log("enabling the button after api call success");
      //enable the button
      $("#askButton").prop("disabled", false);
    });
  });
}

//function to call gpt API and display the response in html div
function callGPTApi(promptText) {
  //call local api in dev and the render in prod
  const post_url = "http://localhost:8080/chatGPT";
  //const post_url ="https://tabgpt-advisor-production.up.railway.app/chatgpt";

  return new Promise(function (resolve, reject) {
    $.post(post_url, { prompt: promptText }, function (gptRes) {
      if (gptRes) {
        console.log("chatGPT call success with prompt", promptText);

        //format the gpt response by sentences and display in the div chatgptbox
        $("#chatGPTBox").html(formatGPTRes(gptRes));
        console.log("gpt raw response is ", gptRes);

        //return asynch call success
        resolve(gptRes);
      } else {
        $("#chatGPTBox").setText("Error in calling chatGPT API service !!");
        reject();
      }
    });
  });
}

//to get all the workheets in the dashboard and populate the dropdown selector
function getWorksheets() {
  //  After initialization, ask Tableau what sheets are available
  const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;

  let list = "<option></option>";
  // Or iterate through the array of worksheets
  worksheets.forEach(function (worksheet) {
    list = list + "<option>" + worksheet.name + "</option>";
  });

  $("select.worksheetSelector").html(list);

  return worksheets;
}
