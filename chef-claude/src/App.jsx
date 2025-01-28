import Header from "./components/Header"
import Main from "./components/Main"
import React from "react"

export default function App() {
let [isImportant, setIsImportant] = React.useState("Hello")

function handleClick () {
    setIsImportant("Definitely");
}



//   function click (){
//     React.useState("")
//   }

    return (
        // <>
        // <Header/>
        // <Main/>
        // </>
        <main> 
            <h1>is state important</h1>
            <button onClick={handleClick}>{isImportant}</button>
        </main>
    )
}