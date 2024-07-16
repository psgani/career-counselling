
# Career Counselling

Career Counselling is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to post and answer questions related to career guidance. Additionally, users can share their achievements through blog posts.


## Features

 ### User Roles: Student and Tutor
 --  Displays the count of total number users registered, total number questions asked, total number of responses and total number of blogs posted.
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
 ## Screenshots
![Screenshot (60)](https://github.com/user-attachments/assets/4d4f36b4-a76c-421d-ba72-f39b8f8fcf7e)
![Screenshot (61)](https://github.com/user-attachments/assets/20849d55-8573-4b03-9f3b-0bae937c4bdd)

![Screenshot (62)](https://github.com/user-attachments/assets/ad2bc663-4142-4503-a396-d5eee329aac8)
![Screenshot (64)](https://github.com/user-attachments/assets/f72aface-99b5-480e-8ecd-76add291680f)
![Screenshot (66)](https://github.com/user-attachments/assets/b066cfa0-d221-44a5-9e14-0ad827d48f02)

![Screenshot (68)](https://github.com/user-attachments/assets/913b247e-a7f4-40b5-80e4-c85e25281ed4)

