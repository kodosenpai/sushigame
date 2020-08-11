import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Salmon = styled.div`
  width: 20px;
  height: 60px;
  background: #f45b69;
  border-radius: 6px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.3) 10%, #f45b69 10%);
  background-size: 10px 10px;
`;

const Tuna = styled.div`
  width: 20px;
  height: 60px;
  background: #8b0000;
  border-radius: 6px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.3) 10%, #8b0000 10%);
  background-size: 10px 10px;
`;

const ingredientMap = {
  Salmon,
  Tuna,
};

export const Kitchen = ({
  ingredients,
  onIngredientClick,
  onClearIngredients,
  onRoll,
  currentIngredients,
}) => (
  <>
    <Row>
      <Col>
        <h1>Kitchen</h1>
      </Col>
    </Row>
    <Row>
      {ingredients.map((ingredient) => (
        <Col>
          <Button
            variant="secondary"
            onClick={() => onIngredientClick(ingredient)}
          >
            {ingredient}
          </Button>
        </Col>
      ))}
    </Row>
    <br />
    <Row>
      <Col>
        <Button variant="danger" onClick={onClearIngredients}>
          Clear Ingredients
        </Button>
      </Col>
      <Col>
        <Button variant="success" onClick={onRoll}>
          Roll it!
        </Button>
      </Col>
    </Row>
    <Row>
      <Col>
        {currentIngredients.map((ingredient) => (
          <div>{ingredient}</div>
        ))}
      </Col>
    </Row>
  </>
);
