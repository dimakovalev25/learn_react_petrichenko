
function Car(props) {
    return (
        <div>
            car name: {props.name} <br/>
            year: {props.year} <br/>
            <button
                onClick={props.onchangeTitle}
            >Change title!</button>

        </div>
    )

}

export default Car;