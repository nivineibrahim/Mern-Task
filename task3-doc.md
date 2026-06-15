# TASK 3 — Documentation

---

# Project Documentation

## Project Name

MERN Item Management System with Mobile Validation Service

---

## Description

This project is a full-stack application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js).

The application allows users to manage items using full CRUD operations.

Each item contains:
- Name
- Description
- Mobile Number (optional)
- Category

If a mobile number is provided, it is validated before the item is saved or updated. The application also retrieves the country code, country name, and operator name for valid numbers.

Items belong to a category using a MongoDB reference.

---

# Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Axios

---

# API Documentation

## 1. Mobile Validation

POST /api/validate-mobile

### Request

```json
{
  "mobileNumber": "+96170123456"
}
```

### Response

```json
{
  "countryCode": "LB",
  "countryName": "Lebanon",
  "operatorName": "Alfa"
}
```

If the number is invalid, the API returns an error.

---

## 2. Add Item

POST /api/items

### Body

```json
{
  "name": "Phone",
  "description": "iPhone 15",
  "mobileNumber": "+96170123456",
  "category": "categoryId"
}
```

---

## 3. Get All Items

GET /api/items

---

## 4. Update Item

PATCH /api/items/:id

### Body

```json
{
  "name": "Phone",
  "description": "Updated Description",
  "mobileNumber": "+96170123456",
  "category": "categoryId"
}
```

---

## 5. Delete Item

DELETE /api/items/:id

---

## 6. Add Category

POST /api/categories

### Body

```json
{
  "name": "Electronics"
}
```

---

## 7. Get All Categories

GET /api/categories

---

## 8. Delete All Categories

DELETE /api/categories

---
## 9. Delete a specific Category

Delete /api/categories/:id

---

# Category Relationship

Each item belongs to one category.

The Item model stores the category ID as a reference to the Category collection.

The backend uses populate() to return the category name when retrieving items.

---

# How to Run the Project

## Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Database

MongoDB Atlas is used as the database.

---

# Efficient Parts

- Separation between frontend and backend.
- Clean REST API architecture.
- Reusable service for mobile number validation.
- Axios for API communication.
- React Hooks (useState and useEffect).
- MongoDB populate() for category relationships.
- Modular project structure (Controllers, Models, Routes, Services).

---

# Possible Improvements

- Add authentication and authorization.
- Improve the frontend UI.
- Add pagination and search.
- Add more automated unit and integration tests.
- Dockerize the application for easier deployment.