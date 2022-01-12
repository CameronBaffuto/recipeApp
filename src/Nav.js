import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


  
function Nav() {
    return (
<>
  <Navbar className="purp" variant="dark">
    <Container>
      <Navbar.Brand href="#" className="text-light">
      🍔🥩🥞 Lauren's Recipe App
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
    )
}

export default Nav
