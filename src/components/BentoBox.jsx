import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  width: 330px;
  height: 170px;
  background: #cbad8c;
  border-radius: 8px;
  box-shadow: 12px 8px 0 rgba(0, 0, 0, 0.1);
`;

const SushiRollPiece = styled.div`
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 100%;
  border: 3px solid #22382f;
  background-image: radial-gradient(#ef767a 0, #ef767a 40%, #fff 45%, #fff 80%);
`;

const TunaRollPiece = styled(SushiRollPiece)`
  background-image: radial-gradient(#a52a2a 0, #a52a2a 40%, #fff 45%, #fff 80%);
`;

const SalmonRollPiece = styled(SushiRollPiece)`
  border: 3px solid #ef767a;
  background-image: radial-gradient(
    #ef767a 0%,
    #ef767a 38%,
    #22382f 0,
    #22382f 40%,
    #fff 45%,
    #fff 80%
  );
`;
const CaliforniaRollPiece = styled(SushiRollPiece)`
  border: 3px solid #ff4906;
  background-image: radial-gradient(
    #9acd32 0%,
    #9acd32 15%,
    #ef767a 0%,
    #ef767a 38%,
    #22382f 0,
    #22382f 40%,
    #fff 45%,
    #fff 80%
  );
`;

const SushiRoll = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60px;
  height: 60px;
  margin: 10px;
`;

const CaliforniaRoll = () => (
  <SushiRoll>
    <CaliforniaRollPiece />
    <CaliforniaRollPiece />
    <CaliforniaRollPiece />
    <CaliforniaRollPiece />
  </SushiRoll>
);

const TunaRoll = () => (
  <SushiRoll>
    <TunaRollPiece />
    <TunaRollPiece />
    <TunaRollPiece />
    <TunaRollPiece />
  </SushiRoll>
);

const SalmonRoll = () => (
  <SushiRoll>
    <SalmonRollPiece />
    <SalmonRollPiece />
    <SalmonRollPiece />
    <SalmonRollPiece />
  </SushiRoll>
);

const sushiMap = {
  california: CaliforniaRoll,
  tuna: TunaRoll,
  salmon: SalmonRoll,
};

export const BentoBox = ({
  bentoBox,
  onRemoveRoll,
  onShip,
  currentIngredients,
}) => (
  <>
    <Row>
      <Col>
        <Board>{bentoBox.map((roll, index) => sushiMap[roll]())}</Board>
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
