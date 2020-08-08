import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
