import React from 'react';
import './App.css';
import Car from "./components/Car";
import ErrorBoundary from "./errorBoundary/errorBoundary";
import Counter from "./counter/counter";

class App extends React.Component {
    constructor(props) {
        // console.log('app constructor')
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'audi rs6', year: 2018},
                {id: 2, name: 'toyota supra', year: 2001},
                {id: 3, name: 'bugatti veyron', year: 2018},
            ],
            pageTitle: 'HELLO REACT!',
            showCars: false,
        }
    }

    deleteItem = (id) => {
        // console.log(id)
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    changeTitle = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }

    handleInput = (e) => {
        // console.log('CH!', e.target.value)
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
        const cars = [...this.state.data]
        cars[index] = car
        this.setState({
            cars: cars
        })
    }

    // componentWillMount() {
    //     console.log('app componentWillMount')
    // }
    //
    // componentDidMount() {
    //     console.log('app componentDidMount')
    // }

    render() {
        // console.log('app render')
        return (
            <div className='app' style={{
                width: 400,
                margin: 'auto',
                paddingTop: "20px"
            }}>
                <Counter />
                <h1 className='car'>
                    {this.state.pageTitle} <br/>

                    <input
                        onChange={this.handleInput}
                        type="text"/>

                    <button
                        onClick={this.handleInput}
                    >Change
                    </button>
                    <br/>

                    <button
                        onClick={this.toggleCarsHandler}
                    >show Cars
                    </button>
                    <br/>
                </h1>


                {this.state.showCars ? this.state.data.map((item, index) => {
                        return (
                            <ErrorBoundary key={item.id}>
                            <Car
                                name={item.name}
                                year={item.year}
                                deleteItem={() => this.deleteItem(item.id)}
                                onChangeName={e => this.onChangeName(e.target.value, index)}
                            />
                            </ErrorBoundary>
                        )
                    })
                    : null
                }
            </div>
        )
    }
}

export default App;