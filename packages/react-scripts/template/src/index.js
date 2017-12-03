import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from 'utils/store'
import { MuiThemeProvider } from 'material-ui/styles'
import createTheme from 'utils/theme'
import App from './App'
import './index.css'
import 'typeface-open-sans'
import createBrowserHistory from 'history/createBrowserHistory'
// import registerServiceWorker from './registerServiceWorker'

const history = createBrowserHistory()
const store = configureStore()
const theme = createTheme()

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
)
// registerServiceWorker();
