# Grocery Trackr

**Grocery Trackr** is a **smart home inventory app** built with **Next.js 16** that helps families and individuals manage grocery items efficiently. Track what you have, what’s running low, and what you need to buy next — all in one place.  

---

## Features

- **User Authentication** – Users can sign up and sign in to manage their personal grocery inventory.  
- **Product Management** – Add and update products with details like quantity, brand, and price.  
- **To-Buy List** – Automatically track items that are running low and need to be purchased.  
- **Dark Mode Support** – Toggle between light, dark, or system theme for comfortable viewing.  
- **Server-Side Session Handling** – Ensures data is dynamically loaded and secure.  

---

## App Overview

- **Home Page** – Displays welcome information and options to sign in or sign up.  
- **Product Dashboard** – View all products, update details, and monitor quantities.  
- **Add Product Page** – Add new grocery items with essential details.  
- **To-Buy List Page** – Displays items that need to be purchased next.  
- **Theme Toggle** – Switch between light, dark, or system theme using the toggle button.  

---

## The Walkthrough

### Home Page
- Welcome message
- Sign In / Sign Up buttons
- If signed in, shows "Add Product" button

### Product Dashboard
- Lists all products
- Shows current quantity, brand, and price
- Ability to update product details

### Add Product Page
- Form to input product name, quantity, price, brand, and other details

### To-Buy List Page
- Lists items that are below the minimum quantity
- Helps users plan their next shopping trip

### Theme Toggle
- Switch between **light**, **dark**, or **system** themes for the app

---

## Technologies Used

- **Next.js 16** – App router, server actions, layouts  
- **React** – Frontend UI components  
- **Tailwind CSS** – Styling and responsive design  
- **Next-Themes** – Dark/light theme management  
- **Neon (PostgreSQL)** – Database for storing products and user data  
- **Drizzle ORM** – Type-safe database queries  
- **Lucide Icons** – Icons for UI elements  

---

## Purpose

Grocery Trackr makes grocery management simple and organized. Users can:  

- Quickly see what groceries are available.  
- Know which items are running low.  
- Keep grocery shopping stress-free and efficient.  
