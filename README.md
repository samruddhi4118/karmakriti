KarmaKriti - Handcrafted E-Commerce Platform

<div align="center"> <img src="public/KarmaKriti.png" alt="KarmaKriti Logo" width="150"/> </div>

<p align="center"> A full-stack e-commerce application dedicated to showcasing and selling handmade products from artisans, built with the MERN stack (React, Node.js) and Firebase. </p>

✨ Features
Full User Authentication: Secure login and signup functionality using Firebase Authentication.

Dynamic Product Pages: Browse products by category and view detailed information on individual product pages.

Shopping Cart: Fully functional cart using React Context API to add and manage items globally.

Wishlist: Users can add or remove their favorite products to a persistent wishlist.

Protected Checkout: A secure checkout process that requires user authentication before proceeding.

Responsive Design: A consistent and accessible user interface across desktop and mobile devices.

Pop-up on Load: Displays a promotional or informational modal when the website first opens.

Modern SPA Routing: Seamless navigation between pages without reloads, powered by React Router.

🛠️ Tech Stack
Frontend: React (with Vite), React Router

State Management: React Context API

Backend & Database: Firebase (Authentication, Firestore)

Styling: Pure CSS

🚀 Getting Started
Follow these instructions to get a local copy of the project up and running for development and testing purposes.

Prerequisites
Make sure you have Node.js and npm installed on your machine. You can download them from nodejs.org.

Bash

node -v
npm -v
Installation
Clone the repository:

Bash

git clone https://github.com/your-username/karmakriti-project.git
cd karmakriti-project
Install dependencies:

Bash

npm install
Set up Firebase:

Create a firebase.js file in your src/ directory.

Go to your Firebase project console and get your web app's configuration object.

Add your configuration to src/firebase.js and export the services:

JavaScript

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
// ...and so on
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
Run the development server:

Bash

npm run dev
Open http://localhost:5173 to view it in the browser.

📂 Project Structure
The project follows a standard React application structure:

/
├── public/ # Static assets (images, fonts, login-bg.jpg)
├── src/
│ ├── components/ # Reusable components (Navbar, ProductCard, etc.)
│ ├── context/ # Global state management (CartContext, WishlistContext)
│ ├── pages/ # Main page components (HomePage, Login, Cart, etc.)
│ │ └── products/ # Individual product category pages
│ ├── App.jsx # Main application component with routing
│ ├── index.css # Global stylesheet
│ └── main.jsx # Main entry point of the application
├── index.html # Main HTML template
└── package.json # Project dependencies and scripts
