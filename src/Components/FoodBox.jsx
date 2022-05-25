import React from 'react';
import { Card, Col, Button } from 'antd';
function FoodBox(props) {
  const { food } = props;
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories:{food.calories}</p>
        <p>Servings:{food.service}</p>
        <Button type="primary" onClick={() => props.deleteFood(food.name)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
