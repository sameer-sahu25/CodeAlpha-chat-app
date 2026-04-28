# 💬 Viber Clone

> A modern full-stack real-time chat application built with a powerful PERN-like stack (PostgreSQL, Express, React, Node.js), featuring real-time communication via Socket.io, robust state management with Zustand, and a polished UI using TailwindCSS + Shadcn UI.

---

## 🌟 Highlights

- ⚙️ **Tech Stack**: PostgreSQL, Prisma ORM, Express.js, React.js (TypeScript), Node.js
- 🎃 **Authentication & Authorization** using **JWT** and secure HTTP-only cookies
- 👾 **Real-time messaging** powered by **Socket.io**
- 🚀 **Online user status** with real-time indicators
- ⚡ **Global state management** using **Zustand**
- 🛠️ **Robust architecture** with clear separation of concerns and error handling
- 🌐 **Modern UI** built with **TailwindCSS** and **Shadcn UI** components
- 📦 **Database** hosted on **Neon** (Serverless PostgreSQL)

---

## 🖥️ Tech Stack

### 🧩 Frontend
| Technology     | Description                           |
|----------------|---------------------------------------|
| React.js       | UI library (TypeScript)               |
| Vite           | Modern build tool for lightning speed |
| TailwindCSS    | Utility-first CSS framework           |
| Shadcn UI      | High-quality accessible components     |
| Zustand        | Lightweight global state manager      |
| Socket.io-client | Real-time communication             |
| Axios          | API requests with credentials         |
| Lucide React   | Beautiful iconography                 |

### 🛠️ Backend
| Technology     | Description                           |
|----------------|---------------------------------------|
| Node.js        | JavaScript runtime                    |
| Express.js     | Server-side web framework             |
| PostgreSQL     | Relational database                   |
| Prisma ORM     | Type-safe database client             |
| JWT            | Secure authentication system          |
| Socket.io      | Real-time messaging engine            |
| bcryptjs       | Secure password hashing               |
| Cloudinary     | Image storage for profile pictures    |

---

## 🚀 Features

- 🔐 **Secure Auth**: JWT-based login and signup with automatic redirection.
- 📬 **Real-time Chat**: Instant message delivery and reception.
- 🟢 **Presence**: Real-time online/offline status indicators for all users.
- �️ **Profile Management**: Upload and update profile pictures via Cloudinary.
- 📱 **Responsive**: Fully optimized for mobile, tablet, and desktop.
- 🎨 **Polished UX**: Modern design with clean animations and fallbacks.
- ❌ **Error Handling**: Graceful handling of network and database issues.

---

## �️ Getting Started

### 🔧 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sameer-sahu25/chat.git
   cd chat
   ```

2. **Environment Configuration**
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5001
   DATABASE_URL=your_postgresql_url
   JWT_SECRET=your_secret_key
   NODE_ENV=development
   CLOUDINARY_CLOUD_NAME=your_name
   CLOUDINARY_API_KEY=your_key
   CLOUDINARY_API_SECRET=your_secret
   ```

3. **Install Dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

4. **Run the Application**
   ```bash
   # Start Backend (Port 5001)
   cd backend
   npm run dev

   # Start Frontend (Port 8080)
   cd ../frontend
   npm run dev
   ```


