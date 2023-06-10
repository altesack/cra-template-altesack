import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';
import { TopBar } from '../components/TopBar';

export const SampleLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <Container>
      <TopBar />
      {children}
    </Container>
  );
};
