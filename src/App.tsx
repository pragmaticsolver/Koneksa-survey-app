import Box from "@mui/material/Box";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { Survey } from "./components";

import "./App.css";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#e2e2e2",
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Survey />
      </Box>
    </LocalizationProvider>
  );
}

export default App;
