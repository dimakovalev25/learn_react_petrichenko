import React from 'react';
import './App.css';
import Car from "./components/Car";

function App() {
    return (
        <div>
            <h1>
                HELLO REACT! <br/>
                <Car name={'audi'} year={2018}>
                    <p>c</p>
                </Car>
                <Car name={'bugatti'} year={2018}/>

            </h1>
        </div>
    )

}

export default App;