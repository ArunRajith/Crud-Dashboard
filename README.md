MERN Dashboard Application
Full-Stack Authentication & Chart Visualization Project

Project Overview
This project is a MERN (MongoDB, Express, React, Node.js) based Dashboard Application that implements user authentication with JWT and displays dynamic charts generated from backend data stored in MongoDB.
Once a user logs in, they are welcomed personally and shown interactive charts (Bar and Pie) built from their data.
Built with scalability, modularity, and security in mind.

Features
✅ Secure JWT Authentication (Login / Register / Logout)
✅ Protected Dashboard with Dynamic User Data
✅ Real-Time Chart Updates from MongoDB
✅ Fully Responsive UI (Tailwind CSS)
✅ Bar & Pie Charts via Recharts
✅ Clean Code + Modular Folder Structure
✅ Redux Toolkit for Global State Management
✅ Express Middleware for Auth Protection

Tech Stack

Frontend	React.js, Redux Toolkit, React Router, Tailwind CSS, Recharts
Backend	Node.js, Express.js
Database	MongoDB (Mongoose)
Auth	JSON Web Token (JWT)
Styling	Tailwind CSS

🗂 Folder Structure
mern-dashboard/
│
├── backend/
│ ├── config/ # DB connection setup
│ ├── controllers/ # Business logic (auth, charts)
│ ├── middleware/ # Auth protection (JWT)
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ └── server.js # Entry point
│
└── frontend/
├── src/
│ ├── app/
│ │ └── store.js # Redux store setup
│ ├── api/
│ │ └── axios.js # Axios instance with config
│ ├── features/
│ │ ├── auth/ # Auth slice + thunks
│ │ └── chart/ # Chart slice + thunks
│ ├── components/
│ │ └── ProtectedRoute.jsx # Auth route protection
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ └── Dashboard.jsx
│ └── main.jsx # App entry point

Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/ArunRajith/Crud-Dashboard.git
cd mern-dashboard

2️⃣ Setup Backend
cd backend
npm install

Create a .env file inside backend/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
CLIENT_URL=http://localhost:5173

Run backend:
npm run dev

Backend runs at 👉 http://localhost:5000

3️⃣ Setup Frontend
cd ../frontend
npm install
npm run dev

Frontend runs at 👉 http://localhost:5173

Authentication Flow
User registers → password hashed with bcrypt.
JWT token issued → stored in HTTP-only cookie for security.
Protected routes verify JWT before granting access.
On refresh, the app fetches profile automatically.
Logout clears cookies and Redux state.

Dynamic Charts
Charts are fetched from the backend based on the logged-in user.
Data stored in MongoDB.
Dashboard updates automatically when new data is added or changed.
Implemented using Recharts (BarChart + PieChart).

API Endpoints
| Method   | Endpoint                | Description             |
| -------- | ----------------------- | ----------------------- |
| `POST`   | `/api/auth/register`    | Register a new user     |
| `POST`   | `/api/auth/login`       | Login and receive JWT   |
| `GET`    | `/api/auth/profile`     | Get logged-in user data |
| `GET`    | `/api/chart`            | Fetch chart data        |
| `POST`   | `/api/chart/create`     | Add a new chart entry   |
| `PUT`    | `/api/chart/update/:id` | Update chart entry      |
| `DELETE` | `/api/chart/delete/:id` | Delete chart entry      |

Conclusion
This project delivers a complete MERN stack application with secure authentication, dynamic chart visualization, and clean UI.
It demonstrates full-stack skills in React, Node.js, Express, MongoDB, and JWT, following good practices for modularity, data security, and responsive design.
