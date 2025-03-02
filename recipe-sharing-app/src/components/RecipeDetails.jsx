
import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../useRecipeStore';

const RecipeDetails = () => {
 
  const { id } = useParams();
  const { recipes } = useRecipeStore((state) => ({
    recipes: state.recipes,
  }));


  const recipeId = parseInt(id, 10);


  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h2>Recipe Details</h2>
      <p>Name: {recipe.name}</p>
    </div>
  );
};

export default RecipeDetails;
