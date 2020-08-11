import React, { useState } from 'react';
import { random, sample, xor } from 'lodash';
import { menu, ingredients } from './constants';
import { AppView } from './App.view';

const App = () => {
  const [currentOrder, setCurrentorder] = useState([
    'california',
    'salmon',
    'tuna',
    'tuna',
    'tuna',
    'tuna',
    'tuna',
    'tuna',
  ]);
  const [currentIngredients, setCurrentIngredients] = useState([]);
  const [bentoBox, setBentoBox] = useState([
    'california',
    'salmon',
    'tuna',
    'tuna',
    'tuna',
    'tuna',
    'tuna',
    'tuna',
  ]);
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

  const AppViewProps = {
    onGenerateOrder,
    successfulOrders,
    currentOrder,
    ingredients,
    onIngredientClick,
    onClearIngredients,
    onRoll,
    currentIngredients,
    bentoBox,
    onRemoveRoll,
    onShip,
  };

  return <AppView {...AppViewProps} />;
};

export default App;
