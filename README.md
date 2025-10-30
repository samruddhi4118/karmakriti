# 🌸 Karmakriti

Karmakriti is a community-based web application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js).  
It aims to promote and empower **local artisans and women in the cottage industry** by providing them with an online platform to showcase and sell their handmade products.  

---

## 🧭 Overview

Karmakriti acts as a bridge between **rural women artisans** and **customers**, helping small-scale producers grow their businesses digitally.  
The platform focuses on providing:
- Product visibility for artisans  
- Easy product management  
- Customer-friendly UI  
- Order and inventory tracking  
- Smooth communication between sellers and customers  

---

## ✨ Features

- 🛍️ **Product Management** – Add, view, update, and delete handmade products  
- 🔐 **User Authentication** – Firebase-based secure login and registration  
- 🧵 **Category Filtering** – Browse products by categories like Chutneys, Handicrafts, Pickles, and more  
- 💬 **Contact Page** – Easy way for customers to reach out  
- 📱 **Responsive UI** – Works on mobile, tablet, and desktop  
- ⚡ **Firebase Integration** – Used for database and authentication  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | Frontend framework |
| **Express.js** | Backend framework |
| **Firebase** | Database and Authentication |
| **Node.js** | Backend runtime |
| **HTML, CSS, JavaScript** | Core web technologies |

---

## 📁 Project Structure

```
karmakriti/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # All page components (Home, Products, About, etc.)
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                  # Express backend (if included)
│   ├── index.js
│   └── package.json
├── firebase.js              # Firebase configuration
├── README.md
└── package.json
```

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/samruddhi4118/karmakriti.git
cd karmakriti
```

### 2️⃣ Install Dependencies
If the project has separate client and server folders:
```bash
cd client
npm install
```

### 3️⃣ Setup Firebase
Create a file named `.env` in the root directory and add your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4️⃣ Run the App
```bash
npm run dev
```
The app will start on `http://localhost:5173/` (for Vite) or `http://localhost:3000/` (for Create React App).

---

## 💡 Usage

1. Register or log in using Firebase Authentication.  
2. Explore available products or add new ones.  
3. Browse by category (Chutneys, Pickles, etc.).  
4. Contact artisans for purchase or collaboration.  

---
> **Karmakriti** – Handcrafted with ❤️ 
