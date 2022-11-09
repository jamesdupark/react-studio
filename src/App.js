import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup } from "react-bootstrap";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  let total = 0;

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>My Bakery</h1>{" "}
            {/* TODO: personalize your bakery (if you want) */}
            <Container>
              <Row>
                {bakeryData.map(
                  (
                    item,
                    index // TODO: map bakeryData to BakeryItem components
                  ) => (
                    <Col id={index} className="d-flex align-items-stretch">
                      <BakeryItem
                        name={item.name}
                        desc={item.description}
                        price={item.price}
                        url={item.image}
                        handler={setCart}
                        cart={cart}
                      />
                    </Col>
                  )
                )}
              </Row>
            </Container>
          </Col>
          <Col lg={3}>
            <h1>Cart</h1>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  {cart.map(({ name, price, qty }) => {
                    console.log(name, price, qty);
                    total += price * qty;
                    return (
                      <ListGroup.Item>
                        {qty}x {name}: ${price}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Card.Body>
              <Card.Footer>Total price: ${total}</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
