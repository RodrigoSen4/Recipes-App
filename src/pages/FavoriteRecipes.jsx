import React, { useEffect, useState } from 'react';
import CardFavoriteRecipes from '../components/CardFavoriteRecipes';
import Header from '../components/Header';

function FavoriteRecipes() {
  const [listFavoriteRecipes, setListFavoriteRecipes] = useState([]);

  const getRecipesLocalStorage = () => {
    if (localStorage.getItem('favoriteRecipes')) {
      setListFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
    }
  };

  useEffect(() => {
    getRecipesLocalStorage();
  }, []);

  const handleFilter = ({ target }) => {
    const { name } = target;
    getRecipesLocalStorage();
    if (name !== 'all') {
      const newRecipes = listFavoriteRecipes.filter((recipe) => recipe.type === name);
      setListFavoriteRecipes(newRecipes);
    }
  };

  return (
    <div className="favorite-recipes">
      <Header title="Favorite Recipes" />
      <section className="favorite-recipes-buttons">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          name="all"
          onClick={ (e) => handleFilter(e) }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          name="food"
          onClick={ (e) => handleFilter(e) }
        >
          Foods
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          name="drink"
          onClick={ (e) => handleFilter(e) }
        >
          Drinks
        </button>
      </section>
      <CardFavoriteRecipes listRecipes={ listFavoriteRecipes } />
    </div>
  );
}

export default FavoriteRecipes;
