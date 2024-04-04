import { createTheme } from '@mui/material/styles'

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#2A2D33",
      bg: "#0A1424"
    },
    secondary: {
      main: "#353941",
      bg: "#46546B"
    },
    third: {
      main: "#486696"
    }
  },
  typography: {
    h1: [
      "Poppins",
      "Times New Roman",
      "Arial"
    ].join(',')
  }
})

export default customTheme