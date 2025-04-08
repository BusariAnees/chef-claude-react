export default function IngredientsList(props) {
    return <div className="recipe-div">
    <ul>
    <p className="bold-p">Ready for a recipe?</p>  
  <p>Generate your recipe from your list of ingredient</p>
    </ul>
       <button onClick={props.addRecipe}>Get a recipe</button>
</div>
} 