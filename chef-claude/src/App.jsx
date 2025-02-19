import Header from "./components/Header"
import Main from "./components/Main"
import React from "react"
import Pads from "./pads"
// import starFilled from "/chef.jpg"
// import starEmpty from "/vite.svg"

export default function App({darkMode}) {
// let [isImportant, setIsImportant] = React.useState("Yes")

// function handleClick () {
//     setIsImportant("Definitely");
// }








// complex object state
// const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Anees",
//     phone: "08121298992",
//     email: "ayomideanees2003@gmail.com",
//     isFavourite: false
// })







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

// let starIcon = contact.isFavourite ? starFilled : starEmpty;


// function toggleFavorite(){
// setContact(prevSet => {
//     return {
//         ...contact,
//         isFavourite : !prevSet.isFavourite,
//     }
// })
    
// }

// function signUp(event){
//     event.preventDefault()
//     console.log("Submitted")
//     const forms = event.currentTarget
//     const formData = new FormData(forms)
//     // const email = formData.get("email")
//     // console.log(email)
//     // const password = formData.get("password")
//     // const radio = formData.get("employmentstatus")
//     // const checkbox = formData.getAll("diestryRestrictions")
//     // const color = formData.get("color")
//     const object = Object.fromEntries(formData)
//     const dietryData = formData.getAll("diestryRestrictions")
//     const allData = {
//         ...object,
//         dietryData
//     }
//     console.log(allData)
//     // forms.reset()    //react 19 made it possible to slim down the code making it more declarative
// }


//props and states
const [pathButton, setButton] = React.useState(Pads)
const styles = {
    backgroundColor: darkMode === true ? "black" : "white"                //camel case the css property
}

const [on, setOn] = React.useState(e.on)

function clicked () {
    setOn(prevSet => !prevSet)
}

function toggle (id){
   setButton(setPrev => setPrev.map(p => 
    {  return p.id === id ? { ...p, on: !p.on} : p
}))
}


    const displayB = pathButton.map(e => (<button  onClicked={clicked} className={e.on ? "button.on" : undefined} style={{backgroundColor: e.color}} key={e.id}> car </button> ))


// function click (){
//     setButton(preB =>  {
//         return [
//             ...pathButton,
//             on= false,
//         ]
//     })
// }


    return (
        // <>
        // <Header/>
        // <Main/>
        // </>




        <main>
            <div>
              {displayB}
            </div>
        </main>



//react form


// <section>
//     <h1>Signup form</h1>
//     <form onSubmit={signUp} > 
//         <label htmlFor="Email">Email:</label>
//         <input type="text" id="Email" name="email" placeholder="mrman@gmail.com"/>
//         <br />

//         <label htmlFor="Password">Password:</label>
//         <input type="password" id="Password" name="password"/>

//         <button>Submit</button>
//         <label htmlFor="Desccription"></label>
//         <textarea name="description" id="Description" cols="30" rows="10"></textarea>


//        <fieldset>
//         <legend>Employment Status </legend>
//        <label >
//             <input type="radio"  name="employmentstatus"  value="employed"/>
//             employed
//         </label>
//         <label >
//             <input type="radio"  name="employmentstatus" value="unemployed"/>
//             unemployed
//         </label>
//         <label >
//             <input type="radio" name="employmentstatus" value="part-time" defaultChecked={true}/>
//             part-time
//         </label>
//        </fieldset>
//        <fieldset>
//         <legend>Diet Restrictions: </legend>
//        <label >
//             <input type="checkbox"  name="diestryRestrictions"  value="kosha"/>
//             kosha
//         </label>
//         <label >
//             <input type="checkbox"  name="diestryRestrictions" value="vegan"/>
//             vegan
//         </label>
//         <label >
//             <input type="checkbox" name="diestryRestrictions" value="glutenfree"/>
//             gluttenfree
//         </label>
//        </fieldset>
     

//      <label htmlFor="favColor">What is your favorite color?</label>
//      <select name="color" id="favColor" defaultValue="orange" required>
//      <option disabled>ChooseValue</option>
//         <option value="red">Red</option>
//         <option value="blue">blue</option>
//         <option value="green">green</option>
//         <option value="orange">orange</option>
//      </select>
//     </form>
// </section>




//complex objects 
// {/* <main>
//     <article className="card">
//     <img src="chef.jpg" alt="avatar" />
//     <div>
//         <button onClick= {toggleFavorite} aria-pressed={contact.isFavourite} aria-label ={contact.isFavourite ? "Add to Favorite" : "Remove from Favorite"}>
//             <img src={starIcon} alt={ contact.isFavourite ? "filled star" : "unfilled star"} />
            
//         </button>
//         <h2>{contact.firstName} {contact.lastName}</h2>
//         <p>{contact.phone}</p>
//         <p>{contact.email}</p>
//     </div>
//     </article>
// </main> */}



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