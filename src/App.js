import React, { useState } from 'react';
import { random, sample, xor } from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const california = ['rice', 'nori', 'crab', 'avocado', 'cucumber'];
const salmon = ['rice', 'nori', 'creamCheese', 'salmon'];
const tuna = ['rice', 'nori', 'tuna'];
const takoyaki = ['flour', 'squid', 'mayo', 'sauce'];

const ingredients = [
  'rice',
  'nori',
  'crab',
  'avocado',
  'cucumber',
  'creamCheese',
  'salmon',
  'tuna',
  'flour',
  'squid',
  'mayo',
  'sauce',
];

const menu = {
  california,
  salmon,
  tuna,
  takoyaki,
};

const App = () => {
  const [currentOrder, setCurrentorder] = useState([]);
  const [currentIngredients, setCurrentIngredients] = useState([]);
  const [bentoBox, setBentoBox] = useState([]);
  const [successfulOrders, setSuccessfulOrders] = useState(0);

  const onGenerateOrder = () => {
    const amountOfRolls = random(1, 5);
    const rolls = Array(amountOfRolls)
      .fill('')
      .map((element) => sample(Object.keys(menu)));

    setCurrentorder(rolls);
  };

  const onIngredientClick = (ingredient) => {
    if (!currentIngredients.includes(ingredient)) {
      setCurrentIngredients([...currentIngredients, ingredient]);
    }
  };

  const onClearIngredients = () => setCurrentIngredients([]);

  const areArraysEqual = (a, b) => xor(a, b).length === 0;

  const onRoll = () => {
    console.log('rolling...');

    const actualRoll = Object.keys(menu).find((roll) =>
      areArraysEqual(currentIngredients, menu[roll])
    );

    if (!actualRoll) {
      alert(`That roll doesn't exist my dude :(`);
    } else {
      alert(
        `You just made a ${actualRoll} ${
          actualRoll === 'takoyaki' ? '' : 'roll'
        }`
      );
      setBentoBox([...bentoBox, actualRoll]);
      onClearIngredients();
    }
  };

  const onShip = () => {
    const orderMatchesBentoBox = areArraysEqual(bentoBox, currentOrder);
    if (orderMatchesBentoBox) {
      alert('Order shipped! Good job 🎉');
      setBentoBox([]);
      setCurrentorder([]);
      setSuccessfulOrders(successfulOrders + 1);
    } else {
      alert('Your bento box is incorrect! :( ');
    }
  };

  const onRemoveRoll = (index) => {
    const filteredBentoBox = bentoBox.filter(
      (currentRoll, rollIndex) => index !== rollIndex
    );

    setBentoBox(filteredBentoBox);
  };

  return (
    <Container>
      <br />
      <Row>
        <Col>
          <Button variant="primary" onClick={onGenerateOrder}>
            Generate Order [{successfulOrders}]
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h1>Current Order</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {currentOrder.map((roll) => (
            <div>{`🍣 ${roll}`}</div>
          ))}
        </Col>
      </Row>
      <br />
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
      <br />
      <Row>
        <Col>
          {currentIngredients.map((ingredient) => (
            <div>{ingredient}</div>
          ))}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h1>Bento Box</h1>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          {bentoBox.map((roll, index) => (
            <div onClick={() => onRemoveRoll(index)}>{`🍣 ${roll}`}</div>
          ))}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          {
            <Button variant="success" onClick={onShip}>
              {'Ship it! 🚚'}
            </Button>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default App;
