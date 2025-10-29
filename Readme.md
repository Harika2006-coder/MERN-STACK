# 🌐 Collab Works – Freelancing Platform (MERN Stack)

Collab Works is a modern freelancing web application that connects clients and freelancers seamlessly.  
Users can **sign up**, **create projects**, **apply as freelancers**, and manage their **profiles** — all within an interactive, gradient-styled dashboard built with React.

---

## 🚀 Features

### 👤 Authentication
- Secure **Login / Signup** using JWT.
- Interactive gradient UI for smooth user experience.

### 🏠 Dashboard
- Central hub to **view**, **create**, and **manage projects**.
- Quick navigation to Profile, Create Project, and Logout.

### 📁 Create Project
- Clients can create new projects with title, description, and budget.
- Projects instantly appear on the dashboard.

### 👨‍💻 Freelancer Profile
- Upload profile picture and bio.
- View applied project history.
- Edit profile details anytime.

### 💼 Project Management
- Apply for projects as a freelancer.
- Clients can view applicants and manage posted work.

### 📱 Responsive Design
- Optimized for mobile, tablet, and desktop using modern CSS gradients.

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, React Router, Axios, Tailwind CSS / CSS3 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas) |
| **Authentication** | JWT (JSON Web Tokens), bcrypt |
| **File Uploads** | Multer, Cloud / Local Storage |
| **UI Styling** | CSS3, TailwindCSS, Gradient Themes |

---

## 📁 Folder Structure

collab-works/
│
├── backend/
│ ├── server.js
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── middleware/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Login.jsx
│ │ │ ├── Signup.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ ├── Profile.jsx
│ │ │ ├── CreateProject.jsx
│ │ │ └── Navbar.jsx
│ │ ├── App.js
│ │ ├── index.js
│ │ ├── assets/
│ │ └── styles/
│ └── package.json
│
├── .env
├── README.md
└── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/collab-works.git
cd collab-works
cd backend
npm installPORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
npm start
cd ../frontend
npm install
npm start



* 💡 Future Enhancements

Real-time chat between client and freelancer.

Payment integration (Stripe / Razorpay).

Rating and review system.

Dark / light mode toggle.




