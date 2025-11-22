# BetaHouse Backend

A Node.js/Express backend with MongoDB for the BetaHouse internship project.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB URI and JWT secret:

```
MONGODB_URI=mongodb://localhost:27017/betahouse
JWT_SECRET=your_secure_secret_key_here
PORT=5000
NODE_ENV=development
```

## Running the Server

### Development (with auto-reload):

```bash
npm run dev
```

### Production:

```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication

#### Sign Up

- **POST** `/api/auth/signup`
- **Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

#### Sign In

- **POST** `/api/auth/signin`
- **Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Users

#### Get Profile

- **GET** `/api/users/profile`
- **Headers:** `Authorization: Bearer <token>`

#### Update Profile

- **PUT** `/api/users/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**

```json
{
  "firstName": "Jane",
  "lastName": "Doe"
}
```

## Database Schema

### User Model

```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date,
  updatedAt: Date
}
```

## Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Email validation
- CORS enabled
- Input validation with express-validator

## Environment Variables

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT signing
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

## Connecting Frontend

Update your React frontend to use the backend API:

```javascript
const API_URL = "http://localhost:5000/api";

// Sign up
const response = await fetch(`${API_URL}/auth/signup`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

// Sign in
const response = await fetch(`${API_URL}/auth/signin`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

## Notes

- Passwords are automatically hashed before storage
- Tokens expire after 30 days
- All endpoints return JSON responses
- Error messages are included in responses for debugging
