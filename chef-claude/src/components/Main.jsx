import React from "react"
import ClaudeRecipe from "./claude"
import IngredientsList from "./ingredients";


const ingredients = []

let recipeShown = false;

export default function Main(){
    const[ingredient , setIngredient] = React.useState(ingredients)
    const news = ingredient.map(ingredient => 
        <li key={ingredient}>{ingredient}</li> )



  const [gotten, setGotten] = React.useState(recipeShown)
 

function onsubmit (event){
    event.preventDefault()
    console.log("submitted")
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
  newIngredient &&  setIngredient(prevSet => [...prevSet, newIngredient ])
    console.log(ingredient);
     
  
   
}
function  change (){
  return ingredient.length > 0 ? "Ingredients on hand:" : ""
}



function addRecipe () {
    setGotten(prevsSet => prevsSet = true);
}


    return (
   <main>
   <section className="first-section">
           <form onSubmit={onsubmit} className="first-input-div">
           <input type="text" name="ingredient" id="Ingredient" placeholder="e.g oregano" />
       <button className="button"> Add ingredient</button>
           </form>
       <h1 className="ingredients-h1"> {change()} </h1>
       <ul className="section-first-ul">
            {news}
       </ul>
       {ingredient.length > 4 && <IngredientsList addRecipe = {addRecipe} /> }
    
   </section>
   { gotten && <ClaudeRecipe/> }
</main>
    )
}