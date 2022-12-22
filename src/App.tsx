import { useMemo, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import {themeSettings} from "./theme";
import { Box } from "@mui/material";


function App() {

    const mode = 'light';

    const [count, setCount] = useState(0);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <Box className="App">
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        </Box>
    );
}

export default App;
