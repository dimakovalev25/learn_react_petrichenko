import './Car.css';
import React from "react";
import PropTypes from 'prop-types'
import withClass from '../higherOrderComponent/withClass'

class Car extends React.Component {

    render() {
        let {deleteItem} = this.props;

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
            <React.Fragment className='Car'>
                car name: {this.props.name} <br/>
                year: {this.props.year} <br/>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                /> <br/>
                <button
                    onClick={deleteItem}
                >delete
                </button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    deleteItem: PropTypes.func,
}

export default withClass(Car, Car);