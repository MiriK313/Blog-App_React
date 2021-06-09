import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import PostMessages from "./components/PostMessages";
import { store } from "./actions/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";

function App() {
    return ( < Provider store = { store } >
        <
        Container maxWidth = "md" >
        <
        AppBar position = "static"
        color = "transparent" >
        <
        Typography className = "h2"
        variant = "h2"
        align = "center" > My Blog < /Typography> </AppBar > < PostMessages / >
        <
        ButterToast position = {
            { vertical: POS_TOP, horizontal: POS_RIGHT }
        }
        /> </Container > < /Provider>
    );
}

export default App;