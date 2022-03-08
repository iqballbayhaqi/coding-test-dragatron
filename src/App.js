import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddNewPatient from "./containers/customer-dispense/add-new-patient";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9ad0f5",
    },
    secondary: {
      main: "#36a1ea",
    },
    warning: {
      main: "#ffac32"
    }
  },
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Sidebar>
          <div className="App">
            <AddNewPatient/>
          </div>
        </Sidebar>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
