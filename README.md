
# Career Counselling

Career Counselling is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to post and answer questions related to career guidance. Additionally, users can share their achievements through blog posts.


## Features

 -- User Roles: Student and Tutor
 - Student:
   - Post both questions and answers.
   - Search for any specific keyword in the questions answers section.
 - Tutor:
   - Post answers to career-related questions
 - Blogs
   - Users can post blogs to share their career achievements


## Installation

To get a local copy up and running follow these simple steps.

Make sure you have the following installed:

 - Node.js
 - npm (Node Package Manager)
 - MongoDB

1. Clone the project/ Download zip file
```bash
  git clone https://github.com/yourusername/hostelhunt.git
  cd career-counselling
```
2. Install Dependencies
Navigate to both the server and client directories and install the dependencies:
```bash
cd server
npm install

cd ../client
npm install
```
3. Set up MONGO_URI in server->db.js
```bash
MONGO_URI=your_mongodb_connection_string
```
4. Run the Application
To run the application in development mode, open two terminal windows. In one, start the server:
```bash
cd server
npm run dev
```
```bash
cd client
npm start
```

The application should now be running on http://localhost:3000.


    
## Demo

 - Tutor
   - Sign up and log in as a Tutor.
   - You will find questions posted in questions section. 
   - Find the Answer button for every question. Click on the answer button and post answer. Answer will be posted.
 - Student
   - Sign up and log in as a student.
   - navigate to find answers page to find questions and related answers.
   - Use the search box to search for a particular question or answer.
   - View answers for questions and post new questions in the box provided below and click on submit to submit your questions.

