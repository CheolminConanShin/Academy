import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBarComponent from './AppBarComponent';
import CardExampleWithAvatar from './ExampleCardComponent';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 70,
  },
});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const AppTheme = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
  	<div>
	    <AppBarComponent />
	  	<CardExampleWithAvatar />
  	</div>
  </MuiThemeProvider>
);

export default AppTheme;