import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    ratting: 5,
    price: "$100",
    name: "card",
    details: "Lorem ipsum",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    ratting: 4,
    price: "$120",
    name: "2nd card",
    details: "Lorem ipsum dolor",
  },
];

function Hcard() {
  const navigate = useNavigate();
  const handleChange = () => {};
  return (
    <Container>
      <Row className="fs-2 fw-bold mt-4">Online Experience</Row>
      <div className="">
        <Row className="fs-5 fw-lighter mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Row>
      </div>

      <Row className="mt-4">
        {cardData.map((card, index) => {
          return (
            <Col sm={3} key={index}>
              {" "}
              {/* Use index as the key */}
              <Card
                onClick={() => {
                  navigate("/carddetails");
                }}
              >
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Hcard;
