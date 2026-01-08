# Task Manager

A full‑stack MERN project to manage tasks   
This project demonstrates **user authentication (Register/Login)** and **CRUD operations** using MongoDB, Express, React, and Node.js.

## Features
- User Registration & Login (JWT Authentication)
- Create, Read, Update, Delete tasks/books
- Secure API endpoints
- Deployed backend on Render
- Deployed frontend on Vercel
- Postman Collection for API testing

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas
- **API Testing:** Postman

## Postman Collection
You can test all API endpoints using the Postman collection:  
[Task Manager API Collection](postman/TaskManager.postman_collection.json)

## API Endpoints

### Auth
- `POST /api/auth/register` → Register new user  
- `POST /api/auth/login` → Login user & get token  

### Tasks
- `GET /api/tasks` → Get all tasks (requires token)  
- `POST /api/tasks` → Create new task (requires token)  
- `PUT /api/tasks/:id` → Update task by ID (requires token)  
- `DELETE /api/tasks/:id` → Delete task by ID (requires token)  

---

## Setup Instructions (Local)
1. Clone the repo:
   ```bash
   git clone https://github.com/Anu-code02/FrontendAssignment_Primetrade.git

2. Install Dependencies:
   npm install

3. Add .env File:
   PORT=5000
   
   MONGO_URI=your_mongodb_connection_string
   
   JWT_SECRET=your_secret_key

5. Run Backend:
   npm start

6. Run Fronted:
   npm run dev
