import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <>
      <div className={style.recipe}>
        <img src={image} alt="food" />
        <h1>{title}</h1>
        <ol>
          {ingredients.map(ingredient => (
            <li>
              {ingredient.text}
            </li>
          ))}
        </ol>
        <p>Total calorie = {calories}</p>
      </div>
    </>
  );
};

export default Recipe;
