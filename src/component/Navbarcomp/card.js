import React from "react";
import Img1331402 from "./1331402.jpg";
import { Card, Button } from "react-bootstrap";
import "./Card.css";

function Car() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Img1331402} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Here it goes somewhere</Card.Text>
          <Button variant="primary">Tap to Go</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Car;
