import React, { useState } from "react";
import { Button } from "react-bootstrap"
import LetsConnectImage from '../images/letsconnect.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/Contact.css';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Contact() {

  const [status, setStatus] = useState("Send Message");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openModal, setModalOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState("");
  const [modalBody, setModalBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { firstName, lastName, email, subject, message } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    let url = '';
    if(process.env.NODE_ENV === 'development')
      url = 'http://localhost:8000/contact'; 
    else
      url = '/contact';

    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Accept': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(details),
      });

      let result = await response.json();
      const serverReponse = result.serverMessageStatus;
      let fail = serverReponse.includes("failed");
      fail ? setModalHeader("Message Failed to Send") : setModalHeader("Message Sent Successfully");
      setModalBody(serverReponse);
      setModalOpen(true);

      setFirstName("");
      setLastName("");
      setSubject("");
      setEmail("");
      setMessage("");
      setStatus("Send Message");

    } catch {

      setModalHeader("Message Failed to Send");
      setModalBody("Your message to Varun failed to send! Please get in touch with Varun through the information on the home page.");
      setModalOpen(true);
      setFirstName("");
      setLastName("");
      setSubject("");
      setEmail("");
      setMessage("");
      setStatus("Send Message");

    }
  };

  const handleModalClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setModalOpen(false)
    }
  }

  return (
    <>
      <h1 className="contact-header">Contact Me</h1>
      <div className="container contact-formBackground ">
        <img src={LetsConnectImage} title="Contact Me" className="contact-contactImage" draggable="false" alt="Contact" />
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label" htmlFor="firstName">First name:</label>
            <input className="form-control" placeholder="First name" type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="lastName">Last name:</label>
            <input className="form-control" placeholder="Last name" type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div className="col-md-4">
            <label className="form-label" htmlFor="subject">Subject:</label>
            <input className="form-control" placeholder="Subject" type="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </div>
          <div className="col-md-8">
            <label className="form-label" htmlFor="email">Your email:</label>
            <input className="form-control" placeholder="Your email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="col-md-12">
            <label className="form-label" htmlFor="message">Message:</label>
            <textarea className="form-control" placeholder="Message" id="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <div className="col-md-12">
            <Button type="submit" className="contact-formSubmitButton" variant="secondary"><b>{status}</b></Button>
          </div>
        </form>
      </div>
      <Modal open={openModal} onClose={openModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={modalStyle} >
          <h3 className="contact-modalHeader">{modalHeader}</h3>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalBody}
          </Typography>
          <Button className="contact-modalCloseButton" variant="secondary" onClick={handleModalClose}><b>Close</b></Button>
        </Box>
      </Modal>
    </>
  )
}

export default Contact;
