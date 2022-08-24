if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}
const express = require("express");
const nodemailer = require("nodemailer");
const path = require('path');
const cors = require("cors");

const app = express();
app.use(express.json());
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));
app.use(cors());
const port = process.env.PORT || 8000; // production || development
app.listen(port, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post("/contact", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message; 
  const mail = {
    from: email,
    to: "varun.wadhwa19@gmail.com",
    subject: "Contact form message from your Portfolio",
    html: `<p>Name: ${firstName+' '+lastName}</p><p>Email: ${email}</p><p>Subject: ${subject}</p><p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
     if (error) {
      console.log(error);
      res.json({ serverMessageStatus: "Your message to Varun failed to send! Please get in touch with Varun through the information on the home page." });
    } else {
      res.json({ serverMessageStatus: "Your message has been sent successfully to Varun, thank you!" });
    } 
  });
});