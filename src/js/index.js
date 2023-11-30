//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import {ContextProv} from "./Context/ContextProv.jsx"

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import ContextPlayer from "./component/ContextPlayer.jsx";

const App = () => {
    
    return (
        <ContextProv>
            <ContextPlayer />
        </ContextProv>
    )

}


//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
