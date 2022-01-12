import React, { useState } from 'react';
import Axios from 'axios';
import RecipeTile from './RecipeTile';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'


function Search() {

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [healthlabel, sethealthlabel] = useState("alcohol-free");
  
    const YOUR_APP_ID = "70c35a79";
    const YOUR_APP_KEY = "e636f7e338545e8b405e86cfc465aaf3";  
  
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=100&health=${healthlabel}`;
  
  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }
  
  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  }



    return (
    <Container className="mt-5">
    <h5 onClick={getRecipes}>Search for Recipes</h5>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="ingredient">
        <InputGroup className="mb-3">
        <Form.Control type="text" name="search" id="search" placeholder="Search for a ingredient..." value={query} onChange={(e) => setQuery(e.target.value)}/>
        <Button variant="danger" id="button-addon2" onClick={() => setQuery(() => "")}>X</Button>
        </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="health">
        <Form.Label>Choose Health Filter</Form.Label>
        <Form.Select>
          <option onClick={() =>  sethealthlabel("alcohol-free")} value="alcohol-free">Choose a filter...</option>
          <option onClick={() =>  sethealthlabel("shellfish-free")} value="shellfish-free">Shellfish Free</option>
          <option onClick={() =>  sethealthlabel("vegan")} value="vegan">Vegan</option>
          <option onClick={() =>  sethealthlabel("vegetarian")} value="vegetarian">Vegetarian</option>
          <option onClick={() =>  sethealthlabel("gulten-free")} value="gulten-free">Gluten Free</option>\
          <option onClick={() =>  sethealthlabel("fish-free")} value="fish-free">Fish Free</option>
          <option onClick={() =>  sethealthlabel("dairy-free")} value="dairy-free">Dairy Free</option>
          <option onClick={() =>  sethealthlabel("low-sugar")} value="low-sugar">Low Sugar</option>
        </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-3 purp text-light" value="Search">Search</Button>

      </Form>
    
<Row xs={2} md={4} className="g-4">
    
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
  
</Row>
</Container>
    )
}

export default Search
