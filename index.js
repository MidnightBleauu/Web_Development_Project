'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const nodemailer = require('nodemailer');

app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public')); 


let htmlTop = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Pramit Patel</title>
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css"> 

</head>
<body>
    <header>
        <h1>
            Pramit Patel
             <img src="android-chrome-192x192.png" alt="Favicon" class="favicon">
        </h1>
        <p>Simple node app that uses a Public folder with Javascript, HTML and CSS</p>
    </header>

    <nav>
        <a href="index.html">Homepage</a>
        <a href="contact.html">Contact</a>
        <a href="Gallery.html">Gallery</a>
    </nav>
    <main>
`;

let htmlBottom = `
</main>
<footer>
    <p>&#169; 2023 Pramit Patel</p>
</footer>
</body>
</html>
`;


app.post("/results", (req, res) => {
    // Extract data from the form
    const fullName = req.body.fullName;
    const email = req.body.email;
    const feedback = req.body.feedback;
    const comprehensionRating = req.body.comprehensionRating;
    const learningRating = req.body.learningRating;
    const questionSelect = req.body.questionSelect;
  
    const responseMessage = `
      ${htmlTop}
      <section>
          <h2>Contact Form Submission</h2>
          <article class="formResponse">
              <p>Thank you for your feedback, ${fullName}! We have received your message:</p>
              <blockquote><strong>${feedback}</strong></blockquote>
              <p>Email: ${email}</p>
              <p><strong>Your comprehension rating:</strong> ${comprehensionRating}</p>
              <p><strong>Your learning rating:</strong> ${learningRating}</p>
              <p>Answer to whether or not you'd refer to this site for information: ${questionSelect === "option1" ? "Yes" : "No"}</p>
          </article>
      </section>
      ${htmlBottom}
    `;
  
    // Send the response with the complete HTML page
    res.send(responseMessage);
  
    // Send email using Nodemailer
    nodemailer.createTestAccount((err, account) => {
      if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
      }
  
      console.log('Credentials obtained, sending message...');
      console.log('Email address', account.user); 
      console.log('Password', account.pass);
  
      // Create a SMTP transporter object
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass
        }
      });
  
      // Message object
      let message = {
        from: `"Pramit Patel" <sender@example.com>`,
        to: `"Recipient" <recipient@example.com>`,
        subject: 'Contact Form Submission',
        text: `Thank you for your feedback`,
        html: responseMessage
      };
  
      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log('Error occurred. ' + err.message);
          return process.exit(1);
        }
  
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
    });
  });  

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
