//  Dependencies
import React from "react";
import { TextLink } from '@tableau/tableau-ui';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Avatar, TypingIndicator, ConversationHeader, ConversationList,Conversation, Button, InfoButton } from '@chatscope/chat-ui-kit-react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import Modal from 'simple-react-modal'
import TableauHelper from './TableauHelper';
import './DashboardExtension.css';

//  Preview linting errors
/* global tableau */

const website_path = process.env.REACT_APP_PATH ? process.env.REACT_APP_PATH : '';

//  OpenAI constants
const openai_defaults = {
  prompt: 'i want you to be an analyst and look at this data set to help me understand areas which need improvement. Also suggest to me quick win strategies for those areas',
  temperature: 0,
  logo: `${website_path}/assets/openai.png`,
  name: 'assistant',
  fullname: 'ChatGPT Advisor for Tableau',
  info: 'Powered by OpenAI',
  infoLink: 'https://platform.openai.com/docs/introduction',
  disclaimer: 'By using this tool, you are interacting with an AI system.  This chatbox is simulating the experience of talking to your data',
  moderationViolation: "Sorry, I can't accept your question because it was flagged as a Moderation violation for the following categories",
  useChatCompletions: true
}
//  Tableay constants
const tableau_defaults = {
  icon: `${website_path}/assets/tableau.png`,
  userMessageClassname: 'tableau-message-user',
  goodMessageClassname: 'tableau-message-good',
  badMessageClassname: 'tableau-message-bad',
  inputMessageClassname: 'tableau-inputbar'
}

//  Use the moderation endpoint, to check the prompt for inappropriate content
const getOpenAImoderation = async (openai_key, openai_org_id, prompt) => {

  //  Define the response structure
  let response = {
    message: '',
    flagged: true,
    error: null
  }

  //  Define the payload to send to OpenAI
  const payload = {
    'input': prompt,
    'model': 'text-moderation-stable'
  }

  //  Generate headers for the OpenAI API call
  let headers = {
    'Authorization': `Bearer ${openai_key}`,
    'Content-Type': 'application/json'
  }
  if (openai_org_id){
    headers['organization'] = openai_org_id;
  }

  //  Define the API endpoint
  const openai_url = 'https://api.openai.com/v1/moderations';

  //  Make the next API call, to OpenAI
  const config = {
    'method': 'POST',
    'headers': headers,
    'body': JSON.stringify(payload)
  };

  //  Try to make the API call to OpenAI
  let openai_response;
  try {
    openai_response = await fetch(openai_url, config);
  } catch (error){
    console.error(error);
    response.error = error;
    response.message = error.message;
    return response;
  }

  //  Parse the output from OpenAI, and grab just the text to display
  const openai_data = JSON.parse(await openai_response.text());
  if (openai_data.error) {
    console.error(openai_data.error);
    response.error = openai_data.error;
    response.message = openai_data.error.message;
    return response;
  } else {
    //  Get a list of all categories the prompt was flagged for
    const categories = openai_data.results[0].categories;
    let flags = [];
    Object.keys(categories).forEach( key => {
      if (categories[key]){
        flags.push(key);
      }
    })

    //  Were any categories flagged?
    if (flags.length>0){
      response.message = `${openai_defaults.moderationViolation}: ${flags.join(", ")}`;
    } else {
      response.flagged = false;
      response.message = `The provided question is OK to ask.`;
    }

    return response;
  }
}

//  Create the prompt text for OpenAI
const createOpenAiModelChat = (messages, tableauData, settings) => {

  /**********************************************************/
  /*  Create a dataframe from the Tableau DataTable object  */
  /**********************************************************/
  let data = [];

  //  The first row is table headers
  let headerRow = Object.keys(tableauData.columns).map( key => { return tableauData.columns[key].fieldName; } ).join(",");
  data.push(headerRow)

  //  Append all other rows (data values)
  tableauData.data.forEach( row => {
    //  Create a formatted array based on the Tableau data values
    let rowArray = [];
    row.forEach( cell => {
      if (typeof cell.nativeValue === "number") {
        //  For numeric values, round to either 0 decimal place (for any values>1) or 2 decimal places (for values<=1)
        const isSmallNumber = Math.abs(parseFloat(cell.nativeValue)) < 1;
        rowArray.push(parseFloat(cell.nativeValue).toFixed(isSmallNumber ? 2 : 0));
      } else if (Object.prototype.toString.call(cell.nativeValue) === "[object Date]") {
        //  For date objects, format them to be as minimal as possible
        rowArray.push(new Intl.DateTimeFormat('default').format(cell.nativeValue));
      } else {
        //  For all other data types, just insert the value
        rowArray.push(cell.nativeValue)
      }
    })
    //  Save this formatted row to our data array
    data.push(rowArray.join(","));
  })

  /**********************************************************/
  /*  Create the OpenAI payload                             */
  /**********************************************************/

  //  Convert this component's message history into a structure required by OpenAI
  let gptMessages = messages.map( (message,index) => {
    return {
      "role": message.sender,
      "content": message.message
      //"content": index === 0 ? `${message.message}. data set is - ${data}` : message.message
    }
  })

  //  Always include the summary data from Tableau as a user message
  const initialMessage = {
    "role": "user",
    "content": `Use the following data to help answer follow up questions: ${data}`
  }
  gptMessages.unshift(initialMessage);


  //  Return an object for OpenAI
  const payload = {
    "model": "gpt-3.5-turbo",
    "messages": gptMessages,
    "max_tokens": 500,
    "temperature": settings.temperature ? settings.temperature : openai_defaults.temperature
  }

  return payload
}

//  Create the prompt text for OpenAI
const createOpenAiModelCompletions = (message, tableauData, settings) => {

  /**********************************************************/
  /*  Create a dataframe from the Tableau DataTable object  */
  /**********************************************************/
  let data = [];

  //  The first row is table headers
  let headerRow = Object.keys(tableauData.columns).map( key => { return tableauData.columns[key].fieldName; } ).join(",");
  data.push(headerRow)

  //  Append all other rows (data values)
  tableauData.data.forEach( row => {
    //  Create a formatted array based on the Tableau data values
    let rowArray = [];
    row.forEach( cell => {
      if (typeof cell.nativeValue === "number") {
        //  For numeric values, round to either 0 decimal place (for any values>1) or 2 decimal places (for values<=1)
        rowArray.push(parseFloat(cell.nativeValue).toFixed(cell.nativeValue>1 ? 0 : 2));
      } else if (Object.prototype.toString.call(cell.nativeValue) === "[object Date]") {
        //  For date objects, format them to be as minimal as possible
        rowArray.push(new Intl.DateTimeFormat('default').format(cell.nativeValue));
      } else {
        //  For all other data types, just insert the value
        rowArray.push(cell.nativeValue)
      }
    })
    //  Save this formatted row to our data array
    data.push(rowArray.join(","));
  })

  /**********************************************************/
  /*  Create the OpenAI payload                             */
  /**********************************************************/

  //  Return an object for OpenAI
  const payload = {
    "model": "text-davinci-003",
    "prompt": `${message}. data set is - ${data}`,
    "max_tokens": 500,
    "temperature": settings.temperature ? settings.temperature : openai_defaults.temperature
  }

  return payload
}

//  Make API call to OpenAI
const getOpenAIdata = async (openai_key, openai_org_id, payload) => {

  //  Define the response object
  let response = {
    message: '',
    error: null
  }

  //  Generate headers for the OpenAI API call
  let headers = {
    'Authorization': `Bearer ${openai_key}`,
    'Content-Type': 'application/json'
  }
  if (openai_org_id){
    headers['organization'] = openai_org_id;
  }

  //  Define the API endpoint
  const openai_url = `https://api.openai.com/v1/${openai_defaults.useChatCompletions ? 'chat/' : '' }completions`;

  //  Make the next API call, to OpenAI
  const config = {
    'method': 'POST',
    'headers': headers,
    'body': JSON.stringify(payload)
  };

  //  Try to make the API call to OpenAI
  let openai_response;
  try {
    openai_response = await fetch(openai_url, config);
  } catch (error){
    console.error(error);
    response.error = error;
    response.message = error.message;
    return response;
  }

  //  Parse the output from OpenAI, and grab just the text to display
  const openai_data = JSON.parse(await openai_response.text());
  if (openai_data.error) {
    console.error(openai_data.error);
    response.error = openai_data.error;
    response.message = openai_data.error.message;
    return response;
  } else {
    if (openai_defaults.useChatCompletions) {
      response.message = openai_data.choices[0].message.content.trim();
    } else {
      response.message = openai_data.choices[0].text.trim();
    }
  }

  //  Return the text from OpenAI
  return response;
}

export class DashboardExtension extends React.Component {

  //  Look for any saved settings, set them to the state
  constructor(props) {
    super(props);
    //  Set default config values 
    this.state = Object.assign(
      {
        isSaving: false,
        showModal: false,
        waitingForOpenAI: false,
        settingsLoaded: false,
        dataTable: null,
        messages: [],
        worksheets: []
      },
      TableauHelper.defaultSettings()
    );
  }

  /******************************************/
  /*  Tableau Dashboard Extension functions */
  /******************************************/

  //  Configure the dashboard extension to support the config menu, and update state when the config is changed
  configureExtension = () => {

    let thisComponent = this;
    
    //  Determine the config popup's url
    const url = `${window.location.origin}${website_path}/config.html`;
    
    //  Initialize the extension's config popup     
    tableau.extensions.ui.displayDialogAsync(url, "", { height: 500, width:400 } ).then((closePayload) => {
      thisComponent.setState(TableauHelper.getSettings());
    }).catch((error) => {
      // One expected error condition is when the popup is closed by the user (meaning the user
      // clicks the 'X' in the top right of the dialog).  This can be checked for like so:
      switch (error.errorCode) {
        case tableau.ErrorCodes.DialogClosedByUser:
          console.log("Config popup was closed by user");
          break;
        default:
          console.log(error.message);
      }
    });
  }

  //  Show a modal dialog for selecting the sheet  
  openModal = (event) => {
    this.setState({
      showModal: true
    });
  }

  //  Just close the modal, no changes to save
  closeModal = (event) => {
    //  No, just close the modal
    this.setState({
      showModal:false
    });
  }

  //  Close the modal, while selecting a new sheet
  closeModalWithSelection = (event) => {
    const newSheetSelected = event.target.textContent;
    if (newSheetSelected){
      //  Yes, close the modal but also run the initialization function again
      this.setState({
        showModal:false,
        selectedWorksheet: event.target.textContent
      }, () => {
        this.initialMessageFromTableau();
      });
    }
  }

  //  Fetch data from the Tableau Sheet
  initialMessageFromTableau = async() => {

    //  Save a reference to this
    let thisComponent = this;

    //  Load any saved settings
    let settings = TableauHelper.getSettings();

    //  If we've already selected a worksheet use that, otherwise use the default from config settings
    const selectedWorksheet = this.state.selectedWorksheet ? this.state.selectedWorksheet : settings.selectedWorksheet;

    //  If a worksheet was specified in the config, fetch the dataTable for it
    if (settings.selectedWorksheet && settings.openai_key) {

      // Define the initial messages
      const message1 = {
        type: 'text',
        position: 'single',
        direction: 'outgoing',
        sender: 'user',
        className: tableau_defaults.userMessageClassname,
        sentTime: TableauHelper.formatDate(new Date()),
        message: settings.defaultQuestion,
      }

      //  Update the state to show the loading icon, but trigger the first query to OpenAI
      this.setState({
        openai_key: settings.openai_key,
        openai_org_id: settings.openai_org_id,
        selectedWorksheet: selectedWorksheet,
        worksheets: TableauHelper.getWorksheets(),
        temperature: settings.temperature,
        waitingForOpenAI: true,
        messages: [message1]
      }, async () => {

        //  Get the list of existing messages
        let newMessages = this.state.messages.map( message => message);

        //  Fetch the raw data from a worksheet
        const rawData = await TableauHelper.getData(settings.selectedWorksheet);

        //  Verify the default question is OK to ask
        const moderation = await getOpenAImoderation(settings.openai_key, settings.openai_org_id, settings.defaultQuestion);
        if (moderation.flagged) {

          //  Content was flagged by the Moderation API, notify the user
          newMessages.push({
            type: 'text',
            position: 'single',
            direction: 'incoming',
            sender: openai_defaults.name,
            className: tableau_defaults.badMessageClassname,
            sentTime: TableauHelper.formatDate(new Date()),
            message: moderation.message
          });
        } else {

          //  Content is OK, generate the payload for OpenAI
          let openai_payload;
          if (openai_defaults.useChatCompletions){
            openai_payload = createOpenAiModelChat(newMessages, rawData, thisComponent.state);
          } else {
            openai_payload = createOpenAiModelCompletions(newMessages, rawData, thisComponent.state);
          }

          //  Get the initial message for this worksheet's data
          const openai_data = await getOpenAIdata(settings.openai_key, settings.openai_org_id, openai_payload);

          //  Create a new message from OpenAI
          newMessages.push({
            type: 'text',
            position: 'single',
            direction: 'incoming',
            sender: openai_defaults.name,
            className: tableau_defaults.goodMessageClassname,
            sentTime: TableauHelper.formatDate(new Date()),
            message: openai_data.message
          })
        }

        //  Update the state
        thisComponent.setState({
          dataTable: rawData,
          waitingForOpenAI: false,
          messages: newMessages
        })
      })
    }
  }

  //  Handle new questions from the user
  handleNewMessage = async (newMessage) => {

    //  Save a reference to this
    let thisComponent = this;

    //  Create a new message from the User
    let newMessages = this.state.messages.map( message => message );
    newMessages.push({
      type: 'text',
      position: 'single',
      direction: 'outgoing',
      sender: 'user',
      className: tableau_defaults.userMessageClassname,
      sentTime: TableauHelper.formatDate(new Date()),
      message: newMessage
    })

    //  Update the state to show the loading icon, but trigger the query to OpenAI
    this.setState({
      waitingForOpenAI: true,
      messages: newMessages
    }, async () => {

      //  Get the list of existing messages
      let newMessages = this.state.messages.map( message => message);

      //  Verify the default question is OK to ask
      const moderation = await getOpenAImoderation(thisComponent.state.openai_key, thisComponent.state.openai_org_id, newMessage);
      if (moderation.flagged) {

        //  Content was flagged by the Moderation API, notify the user
        newMessages.push({
          type: 'text',
          position: 'single',
          direction: 'incoming',
          sender: openai_defaults.name,
          className: tableau_defaults.badMessageClassname,
          sentTime: TableauHelper.formatDate(new Date()),
          message: moderation.message
        });
      } else {

        //  Content is OK, generate the payload for OpenAI
        let openai_payload;
        if (openai_defaults.useChatCompletions){
          openai_payload = createOpenAiModelChat(newMessages, thisComponent.state.dataTable, thisComponent.state);
        } else {
          openai_payload = createOpenAiModelCompletions(newMessage, thisComponent.state.dataTable, thisComponent.state);
        }

        //  Get the initial message for this worksheet's data
        const openai_data = await getOpenAIdata(thisComponent.state.openai_key, thisComponent.state.openai_org_id, openai_payload);

        //  Create a new message from OpenAI
        newMessages.push({
          type: 'text',
          position: 'single',
          direction: 'incoming',
          sender: openai_defaults.name,
          className: tableau_defaults.goodMessageClassname,
          sentTime: TableauHelper.formatDate(new Date()),
          message: openai_data.message,
        })
      }

      //  Update the state
      thisComponent.setState({
        waitingForOpenAI: false,
        messages: newMessages
      })
    })
  }

  /******************************************/
  /*  React Lifecycle functions             */
  /******************************************/

  //  Render the HTML to the DOM
  render() {

    //  Save a reference to this component
    let thisComponent = this;

    //  Has the extension been configured? an OpenAI key is required to work with ChatGPT
    let content;
    if (this.state.openai_key) {

      //  Create a list of all the worksheets on this dashboard, allow the user to switch on the fly
      const worksheets = this.state.worksheets.map( (sheet,index) => {
        const info = thisComponent.state.selectedWorksheet === sheet.name ? 'Selected' : '';
        const active = thisComponent.state.selectedWorksheet === sheet.name ? true : false;
        return <Conversation key={`sheet-${index}`} name={sheet.name} info={info} active={active} onClick={this.closeModalWithSelection}></Conversation>
      })

      //  Define the list of messages to display in the chat window
      const messages = this.state.messages.map( (message, index) => {

        //  Which messages should show an avatar?
        const hasAvatar = message.direction==='incoming';
        const avatar = hasAvatar ? <Avatar src={openai_defaults.logo} name={message.sender} /> : null;

        //  Define the model for each message
        return  <Message model={message} avatarPosition={hasAvatar ? 'cl' : null} className={message.className} key={`message-${index}`}>
                  {avatar}
                </Message>
      });

      //  Are we waiting for a message to complete?
      const inputDisabled = this.state.waitingForOpenAI;
      const dotDotDot = inputDisabled ? <TypingIndicator content={`${openai_defaults.name} is working on it`}/> : null;

      //  Define the content to display
      content = <div className="container-fluid" style={{width: "100%"}}>
                  <MainContainer style={{height: "100vh"}}>
                    <ChatContainer>   
                      <ConversationHeader>
                        <Avatar src={openai_defaults.logo} name={openai_defaults.name} size="md"/>
                        <ConversationHeader.Content userName={openai_defaults.fullname} info={openai_defaults.info}/>
                        <ConversationHeader.Actions>                           
                          <Button border onClick={this.openModal} style={{padding:"5px"}} >{this.state.selectedWorksheet}</Button>
                          <InfoButton title={openai_defaults.disclaimer} />
                          <Avatar src={tableau_defaults.icon} name="Tableau" />   
                        </ConversationHeader.Actions>
                      </ConversationHeader>
                      <MessageList typingIndicator={dotDotDot}>
                          { messages }
                      </MessageList>
                      <MessageInput attachButton={false} disabled={inputDisabled} onSend={this.handleNewMessage} className={tableau_defaults.inputMessageClassname} placeholder="Ask a question here" />        
                    </ChatContainer>
                  </MainContainer>
                  <Modal show={this.state.showModal} onClose={this.closeModal} >
                    <ConversationList> 
                      { worksheets }
                    </ConversationList>
                  </Modal>
                </div>
    } else {
      content = <div>This extension is not yet configured, <TextLink kind="standalone" onClick={this.configureExtension }>click here</TextLink> to add your API key from OpenAI.</div>
    }

    //  Render the output
    return  <div>
              { content }
            </div>
  }

  //  Run after the initial HTML has been rendered to the DOM
  componentDidMount() {

    //  Save a reference to this
    let thisComponent = this;

    //  Initialize the extension
    tableau.extensions.initializeAsync({"configure": this.configureExtension}).then(function () {

      //  Send the first message to OpenAI when the extension first loads
      thisComponent.initialMessageFromTableau();

      //  Watch for updates to settings
      tableau.extensions.settings.addEventListener(tableau.TableauEventType.SettingsChanged, (settingsEvent) => {
        //  Clear and send the new first message to OpenAI when the extension's setting change
        thisComponent.initialMessageFromTableau();
      });
    });
  }

  //  Run after any update to the DOM (not including the initial mount)
  componentDidUpdate() {

  }
}