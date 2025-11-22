# Authentication Setup Guide

## Overview

Your authentication system is now fully integrated with MongoDB backend. Users can sign up and sign in with their credentials stored securely in the database.

## Backend Setup

### 1. Environment Variables (`.env` file)

Make sure your backend `.env` file contains:

```
MONGODB_URI=mongodb://localhost:27017/betahouse
# or your MongoDB Atlas connection string:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/betahouse

JWT_SECRET=your_super_secret_jwt_key_change_this
PORT=5000
```

### 2. Start the Backend

```bash
cd backend
npm install  # Already done
npm run dev  # Starts with nodemon
```

The backend will run on `http://localhost:5000`

## Frontend Setup

### 1. API Configuration

The frontend is configured to connect to `http://localhost:5000/api` by default.

If you need to change the API URL, update the `API_BASE_URL` in:

- `src/services/authService.js`

### 2. Start the Frontend

```bash
npm run dev  # Runs Vite dev server
```

The frontend will typically run on `http://localhost:5173`

## Features Implemented

### Sign Up

- **Route**: `/signup`
- **Fields**: First Name, Last Name, Email, Password, Confirm Password
- **Validation**:
  - All fields required
  - Email format validation
  - Password minimum 6 characters
  - Passwords must match
  - Terms & Conditions must be accepted
- **On Success**: User is stored in MongoDB and redirected to home page with auth token

### Sign In

- **Route**: `/signin`
- **Fields**: Email, Password
- **Features**:
  - Remember Me checkbox (stores email in localStorage)
  - Forgot Password link (placeholder)
- **On Success**: User is authenticated and redirected to home page with auth token

### Authentication State Management

- **Context**: `AuthContext` provides global auth state
- **Hook**: `useAuth()` to access user, token, and auth methods
- **Storage**: Auth token and user data stored in localStorage

## API Endpoints

### Sign Up

```
POST /api/auth/signup
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}

Response:
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  }
}
```

### Sign In

```
POST /api/auth/signin
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  }
}
```

## File Structure

```
src/
├── services/
│   └── authService.js          # API calls for auth
├── context/
│   └── AuthContext.jsx         # Global auth state
├── pages/
│   ├── SignUp.jsx              # Sign up form (updated)
│   ├── SignIn.jsx              # Sign in form (updated)
│   └── HomePage.jsx
└── App.jsx                     # Updated with AuthProvider
```

## Using Authentication in Components

### Access Current User

```jsx
import { useAuth } from "../context/AuthContext";

export default function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.firstName}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}
```

## Testing the Flow

1. **Start Backend**: `npm run dev` in `/backend` folder
2. **Start Frontend**: `npm run dev` in root folder
3. **Test Sign Up**:
   - Go to `http://localhost:5173/signup`
   - Fill in the form with valid data
   - Accept terms and submit
   - Should redirect to home page
4. **Test Sign In**:
   - Go to `http://localhost:5173/signin`
   - Use the email/password from sign up
   - Should redirect to home page

## Security Notes

- Passwords are hashed with bcryptjs before storage
- JWT tokens expire after 30 days
- Tokens are stored in localStorage (consider using httpOnly cookies for production)
- Always use HTTPS in production
- Change the JWT_SECRET to a strong random string

## Next Steps

1. Implement "Forgot Password" functionality
2. Add Google OAuth integration
3. Add email verification
4. Create protected routes for authenticated users
5. Add user profile page
