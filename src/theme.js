import { createTheme } from '@mui/material/styles'
import { orange, red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: orange[500],
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    text: {
        secondary: red[500]
    }
  }
})

export default theme