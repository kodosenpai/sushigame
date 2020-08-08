import React from 'react';

import { BentoBox } from './components/BentoBox';
import { Kitchen } from './components/Kitchen';
import { Order } from './components/Order';
import Container from 'react-bootstrap/Container';

export const AppView = ({
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
}) => (
  <Container>
    <br />
    <Order
      onGenerateOrder={onGenerateOrder}
      successfulOrders={successfulOrders}
      currentOrder={currentOrder}
    />
    <br />
    <Kitchen
      ingredients={ingredients}
      onIngredientClick={onIngredientClick}
      onClearIngredients={onClearIngredients}
      onRoll={onRoll}
      currentIngredients={currentIngredients}
    />
    <br />
    <BentoBox bentoBox={bentoBox} onRemoveRoll={onRemoveRoll} onShip={onShip} />
  </Container>
);
