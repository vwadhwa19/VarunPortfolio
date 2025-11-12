# VarunPortfolio (https://varunw-portfolio-d37c2aff1ba8.herokuapp.com)

Varun Portfolio is a web application that displays information about me. It is a single page web application using React.js with bootstrap/material-ui in the front end and Node.js in the back end for a contact me form. It includes features like a home/about page, work history timeline, photo gallery, and contact form. 

To run this app locally on localhost:3000:

1) 'npm install' in root folder to generate node_modules folder

Dockerized
1) 'docker-compose up' and access app in the browser on localhost:3000

Locally
1) You can also run the app locally using the command 'npm start'. This will start client on port 3000 and backend email service on port 8000 
2) It uses two environment variables in the .env file which are "EMAIL" and "PASSWORD". You can set these variables in your .env with your credentials to get the contact form to send to your email on form submission. Otherwise, your contact form won't work locally if no credentials are provided in .env file. 

How it runs on Heroku: 

1) It looks at package.json start script and runs 'npm start' and starts client/server