import But from "../button/But";
import Card from "react-bootstrap/Card";

function BasicExample(p) {
  return (
    <div className="div-for-card">
      <Card style={{ width: "16.4rem" }}>
        <Card.Img variant="top" src={p.det.src} />
        <Card.Body>
          <Card.Title>{p.det.title}</Card.Title>
          <Card.Text>{p.det.detail} </Card.Text>
          <But text={p.det.buttontext} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
