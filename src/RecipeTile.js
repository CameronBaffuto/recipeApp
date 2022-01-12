import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

function RecipeTile({ recipe }) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) 
        !== null && (
        <Col>
        <Card className="mb-5 purp" onClick={ () => {
            window.open(recipe["recipe"]["url"]);
        }}>
            
            <Card.Img src={recipe["recipe"]["image"]} alt=""/>
            <Card.Body>
            <Card.Title className="text-light">{recipe["recipe"]["label"]}</Card.Title>
                <Card.Text>
                <p className="text-light">Calories: {recipe["recipe"]["calories"]}</p>
                <p className="text-light">Servings: {recipe["recipe"]["yield"]}</p>
                <p className="text-light">Source: {recipe["recipe"]["source"]}</p>
                
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>    
       
        )
        
    );
}

export default RecipeTile
