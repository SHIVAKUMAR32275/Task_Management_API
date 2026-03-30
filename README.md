# 🚀 Task Management API

A robust and secure RESTful API built using **Node.js** and **Express.js** to handle user authentication and task management. This project follows the **MVC architecture** and implements **JWT-based authentication** for secure and scalable backend development.

---

## 📌 Features

* 🔐 User Registration & Login
* 🔑 JWT-based Authentication & Authorization
* 🔒 Secure Password Hashing using bcrypt
* 📋 Task Management (CRUD Operations)
* 👤 User-specific task ownership (data isolation)
* 📄 Pagination for task listing
* ⚠️ Input validation and error handling
* 🧱 Clean MVC architecture

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Token (JWT)
* bcrypt.js
* dotenv

---

## 📁 Project Structure

```
Task_Management_API/
│
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── server.js
├── .env
├── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/SHIVAKUMAR32275/Task_Management_API.git
cd Task_Management_API
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskdb
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the server

```
npm run dev
```

---

## 🔐 Authentication Endpoints

### ➤ Register User

```
POST /api/auth/register
```

### ➤ Login User

```
POST /api/auth/login
```

---

## 📋 Task Endpoints (Protected Routes)

> 🔒 All routes require JWT token in headers

### ➤ Create Task

```
POST /api/tasks
```

### ➤ Get All Tasks (with pagination)

```
GET /api/tasks?page=1
```

### ➤ Get Single Task

```
GET /api/tasks/:id
```

### ➤ Update Task

```
PUT /api/tasks/:id
```

### ➤ Delete Task

```
DELETE /api/tasks/:id
```

---

## 🔑 Authorization

Include JWT token in request headers:

```
Authorization: YOUR_TOKEN
```

---

## 📸 Sample Request (Create Task)

```
POST /api/tasks
```

```json
{
  "title": "Learn Node.js",
  "description": "Complete backend project"
}
```

---

## 🧠 Key Concepts Implemented

* MVC Architecture
* RESTful API Design
* Authentication & Authorization using JWT
* Secure Password Hashing
* Middleware for protected routes
* Database relationships using MongoDB
* Error handling & validation

---

## 🚀 Future Improvements

* Swagger API Documentation
* Role-Based Access Control (RBAC)
* Refresh Token Mechanism
* Deployment (Render / AWS / Railway)

---

## 👨‍💻 Author

**Shivakumar**
GitHub: https://github.com/SHIVAKUMAR32275

---

## ⭐ Conclusion

This project demonstrates the development of a secure and scalable backend API with real-world features such as authentication, authorization, and task management. It follows industry best practices and is suitable for production-level applications and technical interviews.
