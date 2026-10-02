# 📦 MERN CRUD Application

A full-stack **CRUD** (Create, Read, Update, Delete) application built with the
**MERN** stack — MongoDB, Express.js, React, and Node.js.

---

## 📸 Screenshots


---
ARCHITECTURE FLOW
┌────────────┐  HTTP/JSON   ┌────────────────┐  Mongoose  ┌─────────┐
│   React    │ ◄──────────► │  Express API   │ ◄────────► │ MongoDB │
│ (Port 3000)│   Axios      │  (Port 5000)   │            │         │
└────────────┘              └────────────────┘            └─────────┘
   FRONTEND                    BACKEND                     DATABASE


Prerequisites: Make sure Node.js (v16+) and MongoDB are installed and running locally (or update MONGO_URI with a MongoDB Atlas connection string). This gives you a fully functional Create, Read, Update, and Delete application across the full MERN stack.

API ENDPOINTS SUMMARY
| Method   | Endpoint            | Action             |
|----------|---------------------|--------------------|
| GET      | /api/items          | Fetch all items    |
| GET      | /api/items/:id      | Fetch single item  |
| POST     | /api/items          | Create new item    |
| PUT      | /api/items/:id      | Update item        |
| DELETE   | /api/items/:id      | Delete item        |


--
1. About Project
## ✨ Features
- ✅ **Create** — Add new items with name, description & price
- ✅ **Read** — View all items in a responsive table
- ✅ **Update** — Edit existing items via a pre‑filled form
- ✅ **Delete** — Remove items with a confirmation prompt
- ✅ RESTful API with proper HTTP status codes
- ✅ Input validation (server & client side)
- ✅ Timestamps on every record (`createdAt`, `updatedAt`)
- ✅ Clean, responsive UI

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React 18, React Router v6, Axios   |
| Backend    | Node.js, Express.js                |
| Database   | MongoDB with Mongoose ODM          |
| Dev Tools  | Nodemon, dotenv, CORS              |

---

## 📋 Prerequisites

Make sure you have the following installed on your machine:

| Tool     | Version | Download                              |
|----------|---------|----------------------------------------|
| Node.js  | ≥ 16.x  | https://nodejs.org                     |
| npm      | ≥ 8.x   | _(comes with Node.js)_                |
| MongoDB  | ≥ 5.x   | https://www.mongodb.com/try/download   |
| Git      | any     | https://git-scm.com                    |

> **Tip:** You can also use [MongoDB Atlas](https://www.mongodb.com/atlas)
> (free tier) instead of a local MongoDB installation.

---

2. Backend Setup
cd backend
npm install

Create a .env file inside the backend/ folder:
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_crud

Start the backend server:
npm run dev


3. Frontend Setup
Open a new terminal:
cd frontend
npm install
npm start

The React app will open at http://localhost:3000.

📡 API Reference
Base URL: http://localhost:5000/api/items

Example - Create an Item (cURL)
curl -X POST http://localhost:5000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop","description":"Gaming laptop","price":1299.99}'


Example - Success Response
{
  "success": true,
  "data": {
    "_id": "664a1f2e3b1a4c001e8f1234",
    "name": "Laptop",
    "description": "Gaming laptop",
    "price": 1299.99,
    "createdAt": "2024-05-19T10:30:00.000Z",
    "updatedAt": "2024-05-19T10:30:00.000Z"
  }
}


🗺️ Roadmap / Future Improvements
Add user authentication (JWT)
Add pagination & search/filter
Add image upload support
Write unit & integration tests
Dockerize the application
Deploy to AWS / Heroku / Vercel
Add dark mode toggle



🤝 Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository
2. Create a feature branch:  git checkout -b feature/amazing-feature
3. Commit your changes:  git commit -m "Add amazing feature"
4. Push to the branch:  git push origin feature/amazing-feature
5. Open a Pull Request


note: Please make sure your code follows the existing code style and passes any existing tests.


🐛 Issues
Found a bug or have a feature request?
Open an issue and describe the problem or suggestion.


MIT License
Copyright (c) 2024 <Your Name>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


🙏 Acknowledgments
MongoDB Documentation
Express.js Guide
React Documentation
Mongoose Docs
Shields.io - for the badges
