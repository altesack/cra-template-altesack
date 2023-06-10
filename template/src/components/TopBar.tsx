import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icon';

export const TopBar = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col md={1}>
          <h1>
            <Icon name={'house-door'} />
          </h1>
        </Col>
        <Col>
          <h1>Application home</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button href={'https://reactjs.org'}>Learn React</Button>
        </Col>
        <Col>
          <Button onClick={() => navigate('/')}>Home</Button>
        </Col>
        <Col>
          <Button onClick={() => navigate('/page1')}>Page One</Button>
        </Col>
        <Col>
          <Button onClick={() => navigate('/page2')}>Page Two</Button>
        </Col>
      </Row>
    </Container>
  );
};
