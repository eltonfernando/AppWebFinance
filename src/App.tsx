import React from "react";
import { ThemeProvider } from "styled-components";
import Global from "./styles/Global";


import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import AppRoute from "./routes";
const App: React.FC = () => {
    return(

         <ThemeProvider theme={dark}>
         <Global />   
        <AppRoute/>
        </ThemeProvider>
    )
}

export default App;