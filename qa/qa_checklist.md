# ✅ QA Checklist – Fullstack JWT Auth App

This checklist ensures all basic quality checks are completed before pushing the project to GitHub or hosting.

---

## 🧰 Project Setup

- [x] `requirements.txt` added for backend
- [x] `.env.example` added for backend
- [x] `package.json` with scripts present in frontend
- [x] `vite.config.ts` used in frontend
- [x] `.env.example` added for frontend
- [x] Working `.gitignore` in both frontend and backend

---

## 📦 Dependency & Build Check

- [x] `npm install` works in frontend
- [x] `pip install -r requirements.txt` works in backend
- [x] Django dev server runs without error
- [x] React dev server runs without error

---

## ✨ Features Check

- [x] User signup with validation
- [x] User login with JWT token
- [x] Protected dashboard route
- [x] Auto token refresh via Axios interceptor
- [x] Logout functionality
- [x] Fetch current user profile via token

---

## 🎨 UI Check (Bootstrap + Responsive)

- [x] Responsive login form
- [x] Responsive signup form
- [x] Dashboard layout mobile-friendly
- [x] Toasts or alerts for feedback

---

## 🔐 Protected Route Logic

- [x] Auth context or localStorage used for token
- [x] PrivateRoute logic implemented
- [x] Redirects correctly on logout or expired token

---

## 🧪 Manual QA

- [x] Signup, login, and logout tested
- [x] Token expiry and refresh tested
- [x] Page reload maintains session
- [x] Accessing dashboard without login redirects to login page

---

## 🧹 Code Quality

- [x] Format all code (Prettier + Black used)
- [x] Lint errors fixed (basic level)
- [x] Console logs removed in production code

---

## 🧾 Documentation

- [x] README.md with setup instructions
- [x] API routes listed
- [x] Screenshots added

---

✅ **Final Status: READY TO PUSH 🚀**