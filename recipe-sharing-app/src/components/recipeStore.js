
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  

  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe]
  })),


  deleteRecipe: (index) => set((state) => ({
    recipes: state.recipes.filter((_, i) => i !== index)
  })),


  updateRecipe: (index, newRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe, i) =>
      i === index ? newRecipe : recipe
    )
  })),
}));

export default useRecipeStore;
