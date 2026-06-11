# TASK 3 — Documentation

---

# Project Documentation

## Project Name:
MERN Item Management System with Mobile Validation Microservice

## Description:
This project is a full-stack application built using the MERN stack (MongoDB, Express, React, Node.js).

It allows users to manage items with full CRUD operations:
- Add Item
- Get All Items
- Update Item
- Delete Item

Each item contains:
- Name
- Description
- Mobile Number 

The mobile number is validated using an external microservice before saving or updating the item.

---

# API Documentation

## 1. Add Item
POST /api/items

Body:
{
  "name": "string",
  "description": "string",
  "mobileNumber": "string "
}

---

## 2. Get All Items
GET /api/items

---

## 3. Update Item
PUT /api/items/:id

Body:
{
  "name": "string",
  "description": "string",
  "mobileNumber": "string"
}

---

## 4. Delete Item
DELETE /api/items/:id

---

# How to Run Project

## Backend
cd backend
npm install
npm run dev

Server runs on:
http://localhost:5000

---

## Frontend
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

---

## Database
using MongoDB Atlas.

---

# Notes

## Efficient Parts:
- Separation of frontend and backend
- REST API architecture
- useEffect for data fetching
- Axios for API communication
- Clean CRUD structure