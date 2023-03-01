import React from "react";
import { Button, TextField, TextArea, DropdownSelect } from '@tableau/tableau-ui';
import './Config.css';
import TableauHelper from './TableauHelper';

/* global tableau */

export class Config extends React.Component {

  constructor(props) {
    super(props);
    //  Set default config values 
    this.state = Object.assign(
      {
        worksheets: [],
        settingsLoaded: false
      },
      TableauHelper.defaultSettings()
    );

    //  Bind event handlers to `this`
    this.saveThenCloseDialog = this.saveThenCloseDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  //  Save settings, then close
  saveThenCloseDialog() {
    //  Save a reference to this component
    let thisComponent = this;

    //  Generate an object with just the settings to save
    let newState = {};
    for (let key in TableauHelper.defaultSettings()) {
      newState[key] = this.state[key];
    }

    //  Since the dropdown is populated from an API call, it doesn't have a default value
    //  This is to ensure a selection, even if the user doesn't explicitly change the dropdown selection
    if (!newState.selectedWorksheet && this.state.worksheets.length>0){
      newState.selectedWorksheet = this.state.worksheets[0].name;
    }

    //  Tell Tableau there are new settings for this extension
    TableauHelper.setSettings(newState);

    //  Save those settings (gets stored within the workbook xml)
    tableau.extensions.settings.saveAsync().then((newSavedSettings) => {
      thisComponent.closeDialog()
    });
  }

  //  Trigger the popup to close
  closeDialog() {
    tableau.extensions.ui.closeDialog();
  }

  componentDidMount() {

    let thisComponent = this;

    //  Initialize the popup using tableau extension api
    tableau.extensions.initializeDialogAsync().then( () => {

      //  Get the list of worksheets from Tableau
      const worksheets = TableauHelper.getWorksheets();

      //  Look for any saved settings
      let newState = Object.assign(
        { 
          settingsLoaded: true,
          worksheets: worksheets
        },
        TableauHelper.getSettings()
      );

      //  Update the state
      thisComponent.setState(newState)

    })
  }

  //  HTML to render for this component
  render() {

    //  Get a reference to this component
    let thisComponent = this;

    //  Helper function to figure out which input was changed, and update the appropriate property of this component's state
    const updateStateDynamically = (e) => {
      const propName = e.target.attributes["stateprop"].value;
      let newStateValue = {};
      newStateValue[propName] = e.target.type==="checkbox" ? e.target.checked : e.target.value;
      thisComponent.setState(newStateValue)
    }

    //  Figure out which worksheet to mark as selected in the dropdown (default to an empty string)
    let selectedWorksheet = '';
    if (this.state.defaultWorksheet) {
      //  There is a saved selection, use that
      selectedWorksheet = this.state.selectedWorksheet;
    } else {
      if (this.state.worksheets.length>0) {
        //  No saved selection, so grab the first available worksheet
        selectedWorksheet = this.state.worksheets[0];
      }
    }

    //  Create menu items for worksheets dropdown
    const items = this.state.worksheets.map( (sheet, index) => {
      return <option value={sheet.name} key={index}>{sheet.name}</option> 
    })

    //  Render the output
    return (
      <div>
        <div className="tableau-titlebar">
          <span className="tableau-titlebar-label">Configure Extension</span>
          <span className="tableau-titlebar-close-button" onClick={this.closeDialog}>x</span>
        </div>
        <TextField label="OpenAI API Key" stateprop="openai_key" value={this.state.openai_key} kind='line' onChange={updateStateDynamically} onClear={updateStateDynamically}/>
        <br/>
        <TextField label="OpenAI Org ID" stateprop="openai_org_id" value={this.state.openai_org_id} kind='line' onChange={updateStateDynamically} onClear={updateStateDynamically}/>
        <br/>
        <TextArea label="Default question to ask" stateprop="defaultQuestion" value={this.state.defaultQuestion} kind='line' onChange={updateStateDynamically} onClear={updateStateDynamically} className="tableau-text-area"/>
        <br/>
        <DropdownSelect label='Sheet' kind='line' onChange={updateStateDynamically} stateprop='selectedWorksheet' value={selectedWorksheet}>
           { items }
        </DropdownSelect>
        <br/>
        <div className="tableau-footer">
          <Button kind="outline" key="cancelButton" onClick={this.closeDialog}>Cancel</Button>
          <Button kind="primary" key="saveButton" onClick={this.saveThenCloseDialog}>Save</Button>
        </div>
      </div>
    );
  }
}