import React from 'react';
import './App.css';
import Car from "./components/Car";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'audi', year: 2018},
                {name: 'bugatti', year: 2018},
            ],
            pageTitle: 'HELLO REACT!'
        }
    }

    changeTitle = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }


    render() {
    const cars = this.state.data;
        return (
            <div>
                <h1>
                    {this.state.pageTitle} <br/>
                    <button
                        onClick={this.changeTitle.bind(this, "Changed!")}
                    >Change</button>
                    <Car
                        name={'audi'}
                        year={2018}
                        onchangeTitle={this.changeTitle.bind(this, 'Car')}
                    />
                    <Car name={'bugatti'} year={2018}/>

                </h1>
            </div>
        )

    }
}

export default App;