import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function Item ({ producto })  {
  return (    
<Card className="card" style={{ width: '20rem' }}>
<Card.Body>
    <Card.Title className="lineClamp">{producto.name}</Card.Title>

    <Card.Img variant="top" src={producto.img} className="imagen"/>
    <Card.Text className="smallTxt">
      {producto.description}
      <br />
      Precio: ${producto.price}
      <br />
      Stock: {producto.stock}
    </Card.Text>
    <Link to={"/producto/" + producto.id} className="boton">Ver detalle</Link>
  </Card.Body>
</Card>
  )
  }

