
import React, { useState } from 'react';
import useRecipeStore from '../useRecipeStore';

const AddRecipeForm = () => {
  const [newRecipe, setNewRecipe] = useState('');
  const { addRecipe } = useRecipeStore((state) => ({
    addRecipe: state.addRecipe,
  }));

  const handleAddRecipe = () => {
    if (newRecipe.trim()) {
      addRecipe(newRecipe);
      setNewRecipe('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newRecipe}
        onChange={(e) => setNewRecipe(e.target.value)}
        placeholder="Enter a recipe name"
      />
      <button onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  );
};

export default AddRecipeForm;
