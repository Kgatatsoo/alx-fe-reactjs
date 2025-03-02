
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../useRecipeStore';

const RecipeList = () => {
  const { recipes, deleteRecipe, updateRecipe } = useRecipeStore((state) => ({
    recipes: state.recipes,
    deleteRecipe: state.deleteRecipe,
    updateRecipe: state.updateRecipe,
  }));

  const [editIndex, setEditIndex] = useState(null);
  const [updatedRecipe, setUpdatedRecipe] = useState('');

  const handleUpdate = (index) => {
    if (updatedRecipe.trim()) {
      updateRecipe(index, updatedRecipe);
      setUpdatedRecipe('');
      setEditIndex(null);  
    }
  };

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <li key={index}>
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={updatedRecipe}
                    onChange={(e) => setUpdatedRecipe(e.target.value)}
                    placeholder="Edit recipe"
                  />
                  <button onClick={() => handleUpdate(index)}>Save</button>
                </div>
              ) : (
                <span>{recipe}</span>
              )}

              <button onClick={() => deleteRecipe(index)}>Delete</button>
              {editIndex !== index && (
                <button onClick={() => setEditIndex(index)}>Edit</button>
              )}

              {}
              <Link to={`/recipe/${index}`}>View Details</Link>
            </li>
          ))
        ) : (
          <p>No recipes added yet!</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
