
import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../useRecipeStore';

const RecipeDetails = () => {

  const { id } = useParams();
  const { recipes } = useRecipeStore((state) => ({
    recipes: state.recipes,
  }));


  const recipeIndex = parseInt(id, 10);

  if (isNaN(recipeIndex) || recipeIndex < 0 || recipeIndex >= recipes.length) {
    return <p>Recipe not found!</p>;
  }


  const recipe = recipes[recipeIndex];

  return (
    <div>
      <h2>Recipe Details</h2>
      <p>{recipe}</p>
    </div>
  );
};

export default RecipeDetails;
