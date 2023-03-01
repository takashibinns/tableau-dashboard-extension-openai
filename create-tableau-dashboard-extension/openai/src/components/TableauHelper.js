
/* global tableau */

const defaultValues = {
    settingsKey: 'extension-settings'
}

class TableauHelper {

    //  Define the settings model
    static defaultSettings = () => {
        return {
            defaultQuestion: 'i want you to be an analyst and look at this data set to help me understand areas which need improvement. Also suggest to me quick win strategies for those areas',
            openai_key: '',
            openai_org_id: '',
            selectedWorksheet: null
        }
    }

    //  Function to get the dashboard extension's settings
    static getSettings = () => {
        //  Fetch the new settings from tableau api
        const settingsString = tableau.extensions.settings.get(defaultValues.settingsKey)
        if (settingsString) {
            //  Found some config settings, set the state
            return JSON.parse(settingsString);
        } else {
            console.log('No existing settings found');
            return this.defaultSettings();
        }
    }

    //  Function to save settings within the dashboard extension
    static setSettings = (newSettings) => {
        tableau.extensions.settings.set(defaultValues.settingsKey, JSON.stringify(newSettings));
    }

    //  Function to get a list of worksheets from the Tableau dashboard
    static getWorksheets = () => {
        try {
            return tableau.extensions.dashboardContent.dashboard.worksheets;
        } catch (error) {
            console.log(error)
            return [];
        }
    }

    //  Function to get the data behind a worksheet within the dashboard
    //  Returns a DataTable object (https://tableau.github.io/extensions-api/docs/interfaces/datatable.html)
    static getData = async (sheetName) => {
        
        //  Get the current dashboard
        const dashboard = tableau.extensions.dashboardContent.dashboard;
    
        //  Get the worksheet with our data
        const matches = dashboard.worksheets.filter((ws) => { return ws.name === sheetName; });
    
        //  Look for a worksheet with the provided name
        if (matches.length === 1) {
    
            //  Worksheet found!
            const worksheet = matches[0];
            
            //  Fetch the data in that worksheet
            const data = await worksheet.getSummaryDataAsync();

            //  Return a list of users
            return data;

        } else {

            //  Could not find a worksheet with this name, return null
            console.log(`No worksheet found with name: ${sheetName}`)
            return null;
        }
    }

    //  Function to format a javascript date as a string
    static formatDate = (dateObj) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true
          };
        return new Intl.DateTimeFormat('default', options).format(dateObj)
    }

}

export default TableauHelper