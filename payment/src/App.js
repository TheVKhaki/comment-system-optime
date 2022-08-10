import "bootstrap/dist/css/bootstrap.min.css";

//Page
import Home from "./page/Home";

import { useEffect, useState } from "react";

function App() {
    //animation btn-main
    // useEffect(() => {
    // }, []);
    return (
        <div className="App container">
            <Home />
        </div>
    );
}

export default App;
