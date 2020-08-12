import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { capitalize } from 'lodash';

const IngredientContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ingredient = styled.div`
  width: 20px;
  height: 60px;
  background: #f45b69;
  border-radius: 6px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.3) 10%, #f45b69 10%);
  background-size: 10px 10px;
  box-shadow: 3px 2px 0 rgba(0, 0, 0, 0.1);
`;

const Salmon = styled(Ingredient)``;

const Tuna = styled(Ingredient)`
  background: #8b0000;
  background-image: linear-gradient(rgba(255, 255, 255, 0.3) 10%, #8b0000 10%);
`;

const Rice = styled(Ingredient)`
  width: 60px;
  height: 60px;
  background: #eee;
  background-image: none;
  box-shadow: 3px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: initial;
`;

const Nori = styled(Ingredient)`
  width: 60px;
  height: 60px;
  background: #2f4f4f;
  background-image: none;
  box-shadow: 3px 2px 0 rgba(0, 0, 0, 0.1);
`;

const Crab = styled(Ingredient)`
  background: #ff96a0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.3) 10%, #ff96a0 10%);
`;

const Avocado = styled(Ingredient)`
  background: #6b8e23;
  width: 30px;
  height: 30px;
  align-self: center;
  justify-self: center;
  background-image: none;
`;

const Cucumber = styled(Ingredient)`
  background: #9acd32;
  border-radius: 0px;
  width: 10px;
  align-self: center;
  justify-self: center;
  background-image: none;
`;

const Creamcheese = styled(Ingredient)`
  background: #eee;
  border-radius: 0px;
  width: 10px;
  align-self: center;
  justify-self: center;
  background-image: none;
`;

// const Label = styled.div`
//   background-color: #ddd;
// `;

// 'rice',
//   'nori',
//   'crab',
//   'avocado',
//   'cucumber',
//   'creamcheese',
//   'salmon',
//   'tuna',

const ingredientMap = {
  Rice,
  Nori,
  Crab,
  Avocado,
  Cucumber,
  Creamcheese,
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
      {ingredients.map((ingredient) => {
        const Ingredient = ingredientMap[capitalize(ingredient)];
        console.log(ingredient, capitalize(ingredient), Ingredient);
        if (!Ingredient) {
          console.log(ingredient, capitalize(ingredient));
          debugger;
        }
        return (
          <IngredientContainer>
            <Ingredient onClick={() => onIngredientClick(ingredient)} />
          </IngredientContainer>
        );
      })}
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
