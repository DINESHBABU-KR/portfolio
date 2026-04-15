import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto', padding: '2rem 0', borderTop: '2px solid var(--ink-color)', textAlign: 'center' }}>
     <Container>
        <p className="mb-1">
          Full-Stack Developer | Building Scalable Web & Blockchain Applications
        </p>
        <p className="mb-0">
          © {new Date().getFullYear()} Dinesh Babu. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
