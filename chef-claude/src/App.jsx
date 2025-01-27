import Header from "./components/Header"
import Main from "./components/Main"
import React from "react"

export default function App() {
const result = React.useState("Hello")
  console.log(result)
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
            <button>{result[0]}</button>
        </main>
    )
}