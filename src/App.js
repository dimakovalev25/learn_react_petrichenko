import React from 'react';
import './App.css';
import Car from "./components/Car";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'audi rs6', year: 2018},
                {id: 2, name: 'toyota supra', year: 2001},
                {id: 3, name: 'bugatti veyron', year: 2018},
            ],
            pageTitle: 'HELLO REACT!',
            showCars: true,
        }
    }


    changeTitle = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }

    handleInput = (e) => {
        console.log('CH!', e.target.value)
        this.setState({
            pageTitle: e.target.value + 'done'
        })
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName = (name, index) => {
        const car = this.state.data[index]
        car.name = name
        const cars= [...this.state.data]
        cars[index] = car
        this.setState({
            cars: cars
        })
    }

    deleteHandler = (index) => {
        const cars = this.state.data.concat()
        cars.splice(index, 1)
        this.setState({
            cars: cars
        })
    }

    render() {
        // console.log('app render')
        return (
            <div className='app' style={{
                width: 400,
                margin: 'auto',
                paddingTop: "20px"
            }}>
                <h1 className='car'>
                    {this.state.pageTitle} <br/>

                    <input
                        onChange={this.handleInput}
                        type="text"/>

                    <button
                        onClick={this.changeTitle.bind(this, "Changed!")}
                    >Change</button> <br/>

                    <button
                        onClick={this.toggleCarsHandler}
                    >show Cars</button> <br/>



                </h1>
                    { this.state.showCars ? this.state.data.map((item, index) => {
                        return (
                            <Car
                                key={item.id}
                                name={item.name}
                                year={item.year}
                                onDelete={this.deleteHandler.bind(this, index)}
                                onChangeName={e => this.onChangeName(e.target.value, index)}
                            />
                        )
                    })
                        : null
                    }
            </div>
        )
    }
}

export default App;