# 🔐 Final Blueprint — React Login + Signup (JWT Authentication Micro‑Demo)

> **Goal:** Provide a complete, production‑ready architecture blueprint for implementing JWT‑based authentication (login, signup, token refresh, protected routes) using **React + TypeScript** (frontend) and **Django REST Framework + Simple JWT** (backend).

---

## 🧩 Tech Stack Summary

| Layer      | Technology |
|------------|------------|
| Frontend   | React (Vite + TypeScript) |
| UI         | Bootstrap 5 |
| Routing    | React Router v6 |
| API Client | Axios |
| Auth       | JWT (access + refresh tokens) |
| Backend    | Django REST Framework + Simple JWT |
| Storage    | localStorage |

---

## 📂 Folder Structure (Frontend)

```
src/
├── components/
│   ├── LoginForm.tsx
│   ├── SignupForm.tsx
│   ├── LogoutButton.tsx
│   └── UserInfo.tsx
├── pages/
│   ├── AuthPage.tsx
│   ├── LoginPage.tsx
│   └── Dashboard.tsx
├── routes/
│   └── PrivateRoute.tsx
├── services/
│   ├── api.ts
│   └── authService.ts
├── App.tsx
└── main.tsx
```

---

## 🧠 Conceptual Flow Overview

### **1. Signup Flow**
- User submits signup form → POST `/auth/register/`
- Backend validates + creates user
- Redirect to login page

### **2. Login Flow**
- User submits login form → POST `/auth/token/`
- Backend returns **access + refresh tokens**
- Tokens stored in `localStorage`
- Redirect to `/dashboard`

### **3. Protected Route Flow**
- `PrivateRoute` checks if `access_token` exists
- If token missing → redirect to `/`

### **4. Token Refresh Flow**
- Axios request fails with 401  
- `api.ts` interceptor sends POST `/auth/token/refresh/`
- On success → retry original request
- On failure → logout user

---

## 📜 Functional Summary

- **LoginForm**  
  Authenticates the user, saves tokens, redirects to dashboard.

- **SignupForm**  
  Registers a new user with validation + backend error display.

- **Dashboard**  
  Protected page accessible only via `PrivateRoute`.

- **UserInfo**  
  Fetches authenticated user profile from `/auth/me`.

- **PrivateRoute**  
  Guards protected pages based on token presence.

- **AuthService**  
  Handles token storage, refresh logic, and logout.

- **API Service (Axios)**  
  Automatically attaches access token and refreshes when expired.

---

## 📄 Component Breakdown

### ✅ `LoginForm.tsx`
- Sends login request to `/auth/token/`
- Saves tokens to `localStorage`
- Handles authentication errors
- Redirects to `/dashboard`

### ✅ `SignupForm.tsx`
- Sends registration request to `/auth/register/`
- Displays validation errors from backend

### ✅ `AuthPage.tsx`
- Wrapper page for login/signup toggle
- Improves UX with a clean layout

### ✅ `LoginPage.tsx`
- Dedicated page that renders `LoginForm`

### ✅ `Dashboard.tsx`
- Protected page rendered only inside `<PrivateRoute>`
- Displays logged‑in user details

### ✅ `UserInfo.tsx`
- Fetches authenticated user info
- Shows error if token fails or user is not authenticated

### ✅ `LogoutButton.tsx`
- Clears stored tokens
- Reloads or redirects to login page

### ✅ `PrivateRoute.tsx`
- Checks if user has an access token
- Redirects unauthenticated visitors to `/`

---

## 🔐 Token Management (`authService.ts`)

Includes these core utilities:

- `getAccessToken()`
- `getRefreshToken()`
- `saveTokens(access, refresh)`
- `refreshAccessToken()` → calls `/auth/token/refresh/`
- `logout()` → clears tokens and reloads app

---

## 🔁 Axios Interceptor Layer (`api.ts`)

### **Request Interceptor**
- Automatically adds `Authorization: Bearer <access_token>` header

### **Response Interceptor**
- Detects `401 Unauthorized`
- Uses refresh token to fetch a new access token
- Retries original request after successful refresh
- Auto‑logout if refresh fails

---

## ⚙️ App Initialization (`App.tsx`)

- Attempts silent token refresh on load
- Sets up all routes:
  - `/` → `AuthPage`
  - `/dashboard` → `PrivateRoute` → `Dashboard`

---

## 💡 Suggested Enhancements

| Enhancement | Description |
|-------------|-------------|
| Toast Notifications | Use `react-toastify` for better feedback |
| Strong Validation | Use `react-hook-form` + Yup |
| Password Reset | Add forgot‑password flow |
| Avatar Upload | User profile picture support |
| Role-Based Access | Admin/user route protection |
| Auto Logout Timer | Logout on inactivity |
| Environment Vars | Move API base URL into `.env` |

---

## 🧱 Summary

This blueprint provides a **complete, reusable authentication architecture** suitable for:
- Freelance dashboards
- Admin panels
- SaaS onboarding flows
- Secure web applications  
- Client‑facing authentication modules

You can reuse this structure in future micro‑demos with minimal changes.

