import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto', padding: '2rem 0', borderTop: '2px solid var(--ink-color)', textAlign: 'center' }}>
      <Container>
        <p className="mb-0">
          Handmade with &hearts; using React & Bootstrap. &copy; {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
