import React from 'react';
import ReactDOM from 'react-dom';
import AppTheme from './AppTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './index.css';

ReactDOM.render(
  <AppTheme />,
  document.getElementById('root')
);
