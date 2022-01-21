const Person = (props) => {

    let msg;

    if (props.age >= 18) {
        msg = "Please go vote!"
    } else if (props.age < 18 ) {
        msg = "You must be 18+ to vote"
    } else {
        msg = "Please return a valid age"
    }

    let displayedName;

    if (props.name.length > 8) {
        displayedName = props.name.substring(0,6)        
    } else {
        displayedName = props.name
    }

    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {displayedName}</p>
            <h3>{msg}</h3>
            <label>Hobbies</label>
            <ul>{props.hobbies.map(hobby => (
                <li>
                    {hobby}
                </li>
            )
            )}
            </ul>
        </div>
    )
}