
import {createRoot} from "react-dom/client"
import App from "./App"

createRoot(document.getElementById('root')).render(
  <App />
)


// import ReactDOM from 'react-dom/client';

// function App() {

//   function handleClick() {
//     console.log("I was clicked")
//   }
 


//   return (
//     <>
//      <img onMouseOver={ function hovered(){
//     console.log("i was overed")
//   }} src="./chef.jpg" alt="" />
//     <button onClick={handleClick} >Click me</button>
//     </>
   
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);