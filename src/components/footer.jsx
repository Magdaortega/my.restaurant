import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Header>Visítanos</Card.Header>
      <Card.Body>
        <Card.Title>Dolce y Vegana</Card.Title>
        <Card.Text>
          Donde la comida tiene su estilo propio
        </Card.Text>
        <Button variant="primary">Hacer una reserva</Button>
      </Card.Body>
      <Card.Footer className="text-muted">100 visitantes esta semana</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;