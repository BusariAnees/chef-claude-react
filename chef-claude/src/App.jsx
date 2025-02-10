import Header from "./components/Header"
import Main from "./components/Main"
import React from "react"

export default function App() {
// let [isImportant, setIsImportant] = React.useState("Yes")

// function handleClick () {
//     setIsImportant("Definitely");
// }


// const myFavoriteThings = []
// const [favoriteStuff, setFavorite] = React.useState(myFavoriteThings);

// const allFavoriteThings = ["0", "2", "4", "6", "1", "2"]
// const thingsElements = favoriteStuff.map(thing => <p key={thing}>{thing}</p>)



// function addFavoriteThing() {
//   setFavorite(setprev => [...setprev, allFavoriteThings[setprev.length]])     //updating with array
// };



// lesson state setter function

// const [theNumber, changeNumber] = React.useState(0);

// function add(){
//     changeNumber(function(prevNumber){
//      return  prevNumber + 1
//     })
// }

// function remove (){
//     changeNumber((prevNumber => prevNumber - 1))
// }

//   function click (){
//     React.useState("")
//   }



// let isGoingout = false;

// const [yess, yesfunc] = React.useState(isGoingout)

// function no () {
//   yesfunc(prev => !prev )
     
// }



// function yes() {
//     isGoingout = true;
//     yesfunc(prevfunc => prevfunc = "Yes")
// }

//terniery

// const answer = isGoingout ? "Yes" : "No" 

// if(isGoingout == true){
//     answer = "Yes"
// } else {
//     answer = "No"
// }


  


    return (
        <>
        <Header/>
        <Main/>
        </>


// <main>
//     <button onClick={addFavoriteThing}> Add item</button>
//     <section aria-live="polite">
//         {thingsElements}
//     </section>
// </main>



// {/* <main>
//     <h1>Do i feel like ging out tonight</h1>
//     <button
//      onClick={no}
//      aria-label= {`Current answer is ${yess ? "Yes" : "No"}. Click to change`}
//      >{yess ? "Yes" : "No"}</button>
// </main> */}



//  <main>
//     <h1>say what how many times</h1>
//     <div>
//         <button onClick={remove} >-</button>
//         <h2>{theNumber}</h2>
//         <button onClick={add}>+</button>
//     </div>
// </main> 


        // <main> 
        //     <div></div>
        //     <h1>is state important</h1>
        //     <button onClick={handleClick}>{isImportant}</button>
        // </main>
    )
}