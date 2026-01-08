# Frontend Developer Task – MERN Auth Dashboard
##  Project Overview:
This project was built as part of the **Frontend Developer Intern Assignment** for Primetrade. It is a scalable MERN application with authentication and a dashboard that supports CRUD operations.

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

## Note on Scaling Frontend–Backend Integration for Production

To scale this project for a real production environment, I would ensure:

1. **Containerization (Docker)**  
   - Package frontend (React) and backend (Node/Express) into separate Docker containers.  
   - Use Docker Compose or Kubernetes for orchestration and scaling.

2. **CI/CD Pipeline**  
   - Automate builds, tests, and deployments using GitHub Actions or Jenkins.  
   - Every push to `main` triggers deployment to staging/production servers.

3. **Environment Variables & Secrets**  
   - Store API keys, JWT secrets, and DB credentials securely in `.env` files or secret managers.  
   - Ensure `.env` is excluded from GitHub via `.gitignore`.

4. **Load Balancing & Horizontal Scaling**  
   - Deploy backend behind a load balancer (NGINX/HAProxy) to distribute traffic.  
   - Run multiple backend instances with auto‑scaling groups on cloud providers (AWS/GCP/Azure).

5. **Database Scaling**  
   - Use a managed database service (e.g., MongoDB Atlas).  
   - Enable replication, sharding, and backups for high availability.

6. **Monitoring & Logging**  
   - Integrate tools like Prometheus, Grafana, or ELK stack for performance monitoring and error tracking.  
   - Set up alerts for downtime or unusual activity.

7. **Frontend Optimization**  
   - Use CDN for static assets (images, JS bundles).  
   - Enable caching and code splitting to improve performance.

