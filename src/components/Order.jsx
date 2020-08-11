import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const OrderTicket = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 330px;
  background: #eee;
  border-radius: 8px;
  box-shadow: 12px 8px 0 rgba(0, 0, 0, 0.1);
`;

const OrderItem = styled.code`
  color: black;
  text-transform: capitalize;
  padding: 5px;
`;

const OrderTicketHeader = styled(OrderItem)`
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Order = ({ onGenerateOrder, successfulOrders, currentOrder }) => (
  <>
    <Row>
      <Col>
        <Button variant="primary" onClick={onGenerateOrder}>
          Generate Order
        </Button>
      </Col>
      <Col>
        <h2>Completed Orders: {successfulOrders}</h2>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <OrderTicket>
          <OrderTicketHeader>Current Order</OrderTicketHeader>
          {currentOrder.map((roll) => (
            <OrderItem>{`- ${roll}`}</OrderItem>
          ))}
        </OrderTicket>
      </Col>
    </Row>
  </>
);
