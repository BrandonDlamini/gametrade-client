import React from 'react';
import './Game.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


export const Game = (props) => {
    const {game} = props;

    
    return(

        <Container fluid>
            <Row>
                <Col>
                <div className ="gameWrapper">
                    <h3>{game.title}</h3>
                    <div className ="gameDescription">
                        <p>{game.dateReleased}</p>
                        <p>willing to trade for : {game.tradeFor}</p>
                        <p>trader contact Number: {game.phoneNumber}</p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        
    );
}

