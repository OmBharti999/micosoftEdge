import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./card2.css";

export default function Card2({ imgsrc, title, content, url }) {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content} </Card.Text>
        <a href={url}>
          {" "}
          <Button variant="primary">Go somewhere</Button>
        </a>
      </Card.Body>
    </Card>
  );
}
