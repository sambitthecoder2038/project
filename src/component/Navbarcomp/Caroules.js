import Carousel from "react-bootstrap/Carousel";
import "./Nav.css";
import Img8010 from "./8010.png";
import Img9135 from "./9135.jpg";
import Img12315 from "./12315.jpg";
function Carousels() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="caro" src={Img8010} alt="logo" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="caro" src={Img9135} alt="logo" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="caro" src={Img12315} alt="logo" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
