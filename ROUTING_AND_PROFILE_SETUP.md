# Routing & Profile Setup Guide

## Changes Made

### 1. Updated Routing (App.jsx)

- **Landing Page**: `/` now shows the Sign Up page
- **Home Page**: Moved to `/home` (requires authentication)
- **Sign Up**: Still accessible at `/signup`
- **Sign In**: Still accessible at `/signin`

```
/ → Sign Up (Landing Page)
/home → Home Page (Authenticated)
/signup → Sign Up Form
/signin → Sign In Form
```

### 2. Updated Redirects

- **SignUp.jsx**: After successful signup, redirects to `/home`
- **SignIn.jsx**: After successful signin, redirects to `/home`

### 3. Enhanced NavBar Component

#### Desktop View

When **NOT authenticated**:

- Shows "Sign Up" and "Login" buttons

When **authenticated**:

- Shows user's initials in a circular avatar (e.g., "JD" for John Doe)
- Displays user's first name next to avatar
- Clicking avatar opens a dropdown menu with:
  - Full name and email
  - Logout button

#### Mobile View

When **NOT authenticated**:

- Shows "Sign Up" and "Login" buttons in mobile menu

When **authenticated**:

- Shows user info card with name and email
- Shows "Logout" button in red

## Features

### Profile Avatar

- **Style**: Circular gradient background (green)
- **Content**: User's first and last name initials
- **Responsive**: Works on desktop and mobile
- **Interactive**: Dropdown menu on desktop, info card on mobile

### Logout Functionality

- Clears authentication token and user data from localStorage
- Redirects to landing page (`/`)
- Closes any open menus

## User Flow

### New User

1. Lands on `/` (Sign Up page)
2. Fills in sign up form
3. Submits and creates account in MongoDB
4. Automatically redirected to `/home`
5. NavBar shows profile avatar with user's name
6. Can click avatar to logout

### Returning User

1. Lands on `/` (Sign Up page)
2. Clicks "Login" button
3. Goes to `/signin`
4. Enters email and password
5. Submits and authenticates
6. Redirected to `/home`
7. NavBar shows profile avatar with user's name

## Technical Details

### Authentication Context

The `useAuth()` hook provides:

- `user` - Current user object with firstName, lastName, email
- `isAuthenticated` - Boolean flag for auth state
- `logout()` - Function to logout user

### NavBar State

- `isOpen` - Mobile menu toggle
- `showProfileMenu` - Desktop profile dropdown toggle
- Uses `useAuth()` to access authentication state

## Styling

- Profile avatar uses Tailwind gradient: `bg-linear-to-br from-green-400 to-green-600`
- Dropdown menu styled with dark theme matching site design
- Responsive design for mobile and desktop
- Hover effects for better UX

## Next Steps

1. Test the complete flow: Sign up → Home → Logout → Sign in → Home
2. Consider adding:
   - Profile page with user details
   - Edit profile functionality
   - Profile picture upload
   - Password change option
