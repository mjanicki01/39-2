const Tweet = (props) => (
    <ul>
        <li>User: {props.user}</li>
        <li>Name: {props.name}</li>
        <li>Date: {props.date}</li>
        <li>Message: {props.message}</li>
    </ul>
)