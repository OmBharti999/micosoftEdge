import But from "../button/But";
import Card from "react-bootstrap/Card";

function BasicExample(p) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={p.det.src} />
      <Card.Body>
        <Card.Title>{p.det.title}</Card.Title>
        <Card.Text>{p.det.detail} </Card.Text>
        <But text={p.det.buttontext}/>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
