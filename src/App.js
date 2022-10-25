import React from 'react';
import './App.css';


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: 6000,
            bonus: 400,
            position: ''
        }
    }

    plusBonus = () => {
        this.setState({
            bonus: this.state.bonus + 50
        })
    }

    minBonus = () => {
        this.setState({
            bonus: this.state.bonus - 50
        })
    }

    salaryNull = () => {
        this.setState({
            bonus: 0
        })
    }

    randomSalary = () => {
        this.setState({
            bonus: +(Math.random() * (5000)).toFixed(0)
        })
    }

    finalPayment = () => {
        this.setState({
            salary: this.state.bonus + this.state.salary
        })
    }

    commitInputChanges = (e) => {
        // console.log(e.target.value)
        this.setState({
            position: e.target.value
        })
    }



    render() {
        console.log(this)

        let {name, age, id} = this.props;
        return (
            <div className='app'>
                <h1>
                    name: {name} <br/>
                    salary: {this.state.salary} $ <br/>
                    position: {this.state.position}

                </h1>
                <h3>
                    bonus: {this.state.bonus} $ <br/>
                    <button onClick={this.plusBonus}>bonus +</button>
                    <button onClick={this.minBonus}>bonus -</button>
                    {/*<button onClick={this.randomSalary}>bonus random</button>*/}
                    {/*<br/>*/}
                    {/*<button onClick={this.salaryNull}>bonus = 0</button>*/}
                    {/*<br/>*/}
                    <button onClick={this.finalPayment}>final payment</button>
                    <form action="">
                        <span>position </span>
                        <input type="text" onChange={this.commitInputChanges}/>
                    </form>
                </h3>
            </div>

        )
    }
}


function Who(props) {
    let {data} = props;

    const element = data.map(item => {
        return (
            <User key={item.id} name={item.name} age={item.age}/>

        )
    })

    return (
        <div>
            {element}
        </div>
    )


}


function App() {
    const data = [
        {id: 1, name: 'Alex M.', age: 29},
        {id: 2, name: 'Ken G.', age: 19},

    ];

    return (
        <div>
            <Who data={data}/>
        </div>
    )
}

export default App;
