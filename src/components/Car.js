
function Car(props) {
    return (
        <div>
            car name: {props.name} <br/>
            year:{props.year}
            {props.children}
        </div>
    )

}

export default Car;