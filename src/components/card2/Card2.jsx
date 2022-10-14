import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./card2.css";

export default function Card2({ imgsrc, title, content, url }) {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img variant="top" src={imgsrc} loading="lazy" />
      <Card.Body>
        <span className="title-news">
          {" "}
          <Card.Title>{title}</Card.Title>
        </span>
        <a href={url}>
          {" "}
          <span className="content-news">
            <Card.Text>{content} </Card.Text>
          </span>
        </a>
      </Card.Body>
    </Card>
  );
}
