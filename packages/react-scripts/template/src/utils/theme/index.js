import { createMuiTheme } from 'material-ui/styles'
import createPalette from './create-palette'

export default (primary = '#d80d80') => createMuiTheme({
  primaryColor: primary,
  palette: {
    primary: createPalette(primary),
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    headline: {fontFamily: "'Open Sans', sans-serif"},
    title: {fontFamily: "'Open Sans', sans-serif"},
    subheading: {fontFamily: "'Open Sans', sans-serif"},
    body2: {fontFamily: "'Open Sans', sans-serif"},
    body1: {fontFamily: "'Open Sans', sans-serif"},
    caption: {fontFamily: "'Open Sans', sans-serif"},
    button: {fontFamily: "'Open Sans', sans-serif", fontWeight: 'bold'},
  }
})
