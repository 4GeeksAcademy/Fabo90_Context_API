import React, { useContext } from "react";
import {MyContext} from "../Context/ContextProv.jsx";

const ContextPlayer = () => {

    const {info, setInfo} = useContext(MyContext);

    return(
        <>
        <p>this is the info for the app <strong>{info}</strong></p>
        </>
    )
}

export default ContextPlayer;