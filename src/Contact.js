import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { _Config } from "./Config";

export default function Contact() {
  const subjectLineRef = React.createRef();
  const emailAddrRef = React.createRef();
  const messageContentRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = subjectLineRef.current.value;
    const email = emailAddrRef.current.value;
    const message = messageContentRef.current.value;

    //Reset components
    subjectLineRef.current.value = "";
    emailAddrRef.current.value = "";
    messageContentRef.current.value = "";
    sendEmail(subject, email, message);
  } 

  const sendEmail = (subject, email, message) => {
    fetch(`https://formcarry.com/s/${_Config.EMAIL_KEY}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({email: `${email || "Anonymous"}`, subject: `${subject}`, message: `${message}`,})
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <React.Fragment>
      <p> Have a question, problem, or suggestion? Use this form to send me a quick email.</p>
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="subjectLine">
          <Form.Label>Subject</Form.Label>
          <Form.Control placeholder="Subject" ref={subjectLineRef}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control placeholder="Enter email" ref={emailAddrRef} />
          <Form.Text className="text-muted">
            Not required unless you'd like a response. 
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control placeholder="Message" as="textarea" rows="3" ref={messageContentRef} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  )
}
