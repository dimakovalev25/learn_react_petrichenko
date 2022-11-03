import './Car.css';
import React from "react";

class Car extends React.Component {

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('car componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('car shouldComponentUpdate', nextProps, nextState)
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('car componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('car componentDidUpdate')
    }


    render() {
        console.log('car render')
        let {deleteItem} = this.props;
        // console.log(props);
        // console.log({deleteItem});

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
                    onClick={deleteItem}
                >delete
                </button>
            </div>
        )
    }
}

export default Car;