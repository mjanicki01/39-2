const FirstComponent = () => (
    <h1>First Component</h1>
)

const Name = (props) => (
    <p><b>Name: {props.firstName}</b></p>
)

const App = () => {
    return (
        <div>
        <FirstComponent />
        <Name firstName={"Beethoven"}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));