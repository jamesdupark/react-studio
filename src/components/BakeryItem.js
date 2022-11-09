// TODO: create a component that displays a single bakery item
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BakeryItem0({ name, desc, price, url }) {
  const item = (
    <div className="BakeryItem">
      <img src={url} alt={name}></img>
      <h3>{name}</h3>
      <p>
        <b>Price: </b>
        {price}
      </p>
      <p>{desc}</p>
    </div>
  );
  return item;
}

function BakeryItem({ name, desc, price, url, handler, cart }) {
  const addToCart = () => {
    console.log(cart);
    const newItem = { name: name, price: price, qty: 1 };
    const obj = cart.find((e) => e.name === name);
    console.log(obj);
    if (obj !== undefined) {
      handler(
        cart.map((e) => {
          if (e === obj) {
            return { name: name, price: price, qty: obj.qty + 1 };
          } else {
            return e;
          }
        })
      );
    } else {
      handler(cart.concat(newItem));
    }
  };

  const card = (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>Price: {price}</Card.Subtitle>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex flex-column align-items-end">
        <Button variant="primary" onClick={addToCart}>
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );

  return card;
}

export default BakeryItem;
