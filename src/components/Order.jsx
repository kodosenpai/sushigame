import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const Order = ({ onGenerateOrder, successfulOrders, currentOrder }) => (
  <>
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
  </>
);
