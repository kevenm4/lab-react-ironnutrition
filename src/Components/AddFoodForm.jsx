import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
  const { addNewFood } = props;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    addNewFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
    alert(`Name: ${name}`);
  };

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
