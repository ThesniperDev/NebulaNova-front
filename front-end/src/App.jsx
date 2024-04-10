import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "./App.css";
import customTheme from "./context/theme";
import NebulaContext from "./context"

import router from "./router/router";

function App() {
  const [addGame, setAddGame] = useState(false)

  return (
    <NebulaContext.Provider value={{ addGame, setAddGame }}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </NebulaContext.Provider>
  );
}

export default App;
