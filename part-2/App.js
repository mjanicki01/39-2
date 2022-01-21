const App = () => (
    <div>
    <Tweet
        user="username1"
        name="John"
        date="Jan 1, 2022"
        message="Happy new year!"
     />
    <Tweet
        user="username2"
        name="Jeremiah"
        date="Jan 4, 2022"
        message="Here is a message"
     />
    <Tweet
        user="username3"
        name="Joe Shmo"
        date="Jan 17, 2022"
        message="Ravioli is great"
     />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))