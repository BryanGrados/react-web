import React from 'react';
import './App.css';
import Result from "./Components/Result";
import Numbers from "./Components/Numbers";
import Functions from "./Components/Functions";

const App = () => {

    return (
        <div className="react-calculator">

            <Result></Result>

            <Numbers></Numbers>

            <Functions></Functions>

            <div className="math-operations">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>=</button>
            </div>

        </div>
    )

}

export default App