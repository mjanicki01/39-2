const App = () => (
    <div>
        <Person
            name="Joe"
            age="45"
            hobbies={["skiing", "rock climbing", "gardening"]}
         />
         <hr/>
        <Person
            name="James Smith"
            age="32"
            hobbies={["sailing", "biking", "computer games", "playing guitar"]}
         />
         <hr/>
        <Person
            name="Sam Sullivan"
            age="14"
            hobbies={["skateboarding", "Final Fantasy", "eating popcorn"]}
         />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))
