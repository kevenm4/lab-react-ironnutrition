import { Row } from 'antd';
import React, { useState } from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';
function FoodList() {
  const [food, setFood] = useState(foods);
  const [searchFood, setSearchFood] = useState(foods);
  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    setFood(updatedFood);
  };
  const deleteFood = (foodName) => {
    const filteredFood = food.filter((foods) => {
      return foods.name !== foodName;
    });

    setFood(filteredFood);
    setSearchFood(filteredFood);
  };

  const searchFilter = (search) => {
    let filteredFood = food.filter((foods) =>
      foods.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchFood(filteredFood);
    setFood(filteredFood);
  };

  return (
    <div>
      <AddFoodForm addNewFood={addNewFood} />
      <Search searchFilter={searchFilter} />
      <h1>Food List</h1>

      <Row>
        {food.map((el) => {
          return (
            <>
              <FoodBox food={el} deleteFood={deleteFood} />
            </>
          );
        })}
      </Row>
    </div>
  );
}

export default FoodList;
