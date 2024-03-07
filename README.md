# Welcome to Nosh's API
### Introduction
This is a free to use API that was made with https://opentdb.com/. There is no API Key. Follow along with the guided URLs below to retrieve questions.
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/questions | To retrieve all questions |
| GET | /api/questions/:id | To get one question by id |
| GET | /api/questions/category/:category | To get questions under specific category |
| GET | /api/questions/difficulty/:difficulty | To retrieve all questions under a specific difficulty |
| GET | /api/category/:category/difficulty/:difficulty | To retrieve questions for a certain category and difficulty |
| POST | /api/questions | To add a new question |
| PUT | /api/questions/:id | To update a question by id |
| DELETE | /api/questions/:id | To delete a question by id |
### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
### Acknowledgements
Raul Meghan Chris! 

[README Template](https://medium.com/fbdevclagos/https-medium-com-sylvaelendu-part-6-documenting-your-api-4558cde4d44e)

[TriviaAPI](https://opentdb.com/)