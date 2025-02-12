import React from "react"

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
       {ingredient.length > 4 && <div className="recipe-div">
           <ul>
           <p className="bold-p">Ready for a recipe?</p>  
         <p>Generate your recipe from your list of ingredient</p>
           </ul>
              <button onClick={addRecipe}>Get a recipe</button>
       </div> }
    
   </section>
   { gotten8 && <section>
  <h2>Chef Claude Recommends:</h2>
  <article className="suggested-recipe-container" aria-live="polite">
    <h3>Beef Bolognese Pasta</h3>
    <p><strong>Chef Claude:</strong> Based on the ingredients you have available, I would recommend a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe.</p>
    
    <h4>Ingredients:</h4>
    <p>Ingredients on hand:</p>
    <ul>
      <li>1 lb ground beef</li>
      <li>1 onion, diced</li>
      <li>3 cloves garlic, minced</li>
      <li>2 tablespoons tomato paste</li>
      <li>1 (28 oz) can crushed tomatoes</li>
      <li>1 cup beef broth</li>
      <li>1 teaspoon dried oregano</li>
      <li>1 teaspoon dried basil</li>
      <li>Salt and pepper to taste</li>
      <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
    </ul>
    
    <h4>Instructions:</h4>
    <ol>
      <li>Bring a large pot of salted water to a boil for the pasta.</li>
      <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
      <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until softened.</li>
      <li>Stir in the tomato paste, crushed tomatoes, and beef broth. Let it simmer for 15-20 minutes, stirring occasionally, until the sauce thickens.</li>
      <li>Add the oregano, basil, salt, and pepper. Stir to combine.</li>
      <li>While the sauce is simmering, cook the pasta according to package instructions. Drain and set aside.</li>
      <li>Combine the cooked pasta with the Bolognese sauce. Serve with grated Parmesan cheese, if desired.</li>
    </ol>
    
    <p>Enjoy your delicious <strong>Beef Bolognese Pasta</strong>!</p>
    
    <p><em>Chef Claude’s tip:</em> Feel free to add any extra ingredients you have on hand, like fresh vegetables or herbs, to customize the recipe to your taste!</p>
  </article>
</section> }
</main>
    )
}