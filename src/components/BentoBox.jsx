import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const BentoBox = ({
  bentoBox,
  onRemoveRoll,
  onShip,
  currentIngredients,
}) => (
  <>
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
  </>
);
