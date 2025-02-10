import React from "react"

export default function Main(){
    const[ingredient , setIngredient] = React.useState([])
    const news = ingredient.map(ingredient => 
        <li key={ingredient}>{ingredient}</li> )


function addIngredientList(){
    setIngredient(prevSet => [...prevSet, ingredient[prevSet.length] ])
}
  
        

function onsubmit (event){
    event.preventDefault()
    console.log("submitted")
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    ingredient.push(newIngredient)
    console.log(ingredient);

    addIngredientList();
  
}

    return (
   <main>
   <section className="first-section">
           <form onSubmit={onsubmit} className="first-input-div">
           <input type="text" name="ingredient" id="Ingredient" placeholder="e.g oregano" />
       <button className="button"> Add ingredient</button>
           </form>
       <h1 className="ingredients-h1"> Ingredients on hand:</h1>
       <ul className="section-first-ul">
            {news}
       </ul>
       <div className="recipe-div">
           <ul>
           <p className="bold-p">Ready for a recipe?</p>  
         <p>Generate your recipe from your list of ingredient</p>
           </ul>
              <button>Get a recipe</button>
       </div>
   </section>
</main>
    )
}