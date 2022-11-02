import './Car.css';
import React from "react";
// import Radium from "radium";

class Car extends React.Component {


    render() {
        const inputClasses = ['input']

        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        return (
            <div className='car'>
                car name: {this.props.name} <br/>
                year: {this.props.year} <br/>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                /> <br/>
                <button
                    onClick={this.props.onDelete}
                >delete
                </button>
            </div>
        )
    }
}

export default Car;