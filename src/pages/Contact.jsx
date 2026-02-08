import React, { useRef, useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <Container className="py-5" id="contact">
      <h2 className="mb-4 text-center">Get in Touch</h2>
      <Row className="justify-content-center">
        <Col md={8}>
            <div className="card-handmade">
                {status === 'success' && <Alert variant="success">Message sent successfully!</Alert>}
                {status === 'error' && <Alert variant="danger">Failed to send message. Please try again.</Alert>}
                
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="user_name" placeholder="Your Name" required style={{ 
                            border: 'var(--border-style)', 
                            borderRadius: '5px 5px 25px 5px',
                            background: 'transparent'
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="user_email" placeholder="name@example.com" required style={{ 
                            border: 'var(--border-style)', 
                            borderRadius: '5px 25px 5px 25px',
                            background: 'transparent'
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" rows={3} required style={{ 
                            border: 'var(--border-style)', 
                            borderRadius: '5px 5px 5px 25px',
                            background: 'transparent'
                        }} />
                    </Form.Group>

                    <Button variant="light" type="submit" className="btn-handmade w-100" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </Button>
                </Form>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
