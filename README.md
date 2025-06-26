# Vite + React + Firebase Auth Boilerplate

🚀 A clean and minimal boilerplate project using **Vite**, **React**, **TypeScript**, and **Firebase Authentication**.  
Ideal for starting modern web applications with authentication built-in.

---

## 🔧 Features

- ⚡ Fast development with [Vite](https://vitejs.dev)
- ⚛️ Component-based architecture using React
- 🔐 Firebase Authentication (Email/Password)
- 🛠️ TypeScript support
- 🎨 Basic styling with CSS
- 📁 Organized folder structure

---

## 📂 Project Structure

```bash
src/
├── api/ # API abstraction layer (optional)
├── assets/ # Static files & media
├── components/ # Reusable components
│ ├── Auth/ # Login/Register components
│ └── User/ # UserForm, UserList
├── hooks/ # Custom React hooks
├── models/ # TypeScript types/interfaces
├── pages/ # Page-level components (LoginPage, HomePage, etc.)
├── services/ # Firebase service logic
├── store/ # Global state/store (optional)
└── App.tsx # App entry component
```

=======

```bash
src/
├── api/           # API abstraction layer (optional)
├── assets/        # Static files & media
├── components/    # Reusable components
│   ├── Auth/      # Login/Register components
│   └── User/      # UserForm, UserList
├── hooks/         # Custom React hooks
├── models/        # TypeScript types/interfaces
├── pages/         # Page-level components (LoginPage, HomePage, etc.)
├── services/      # Firebase service logic
├── store/         # Global state/store (optional)
└── App.tsx        # App entry component
```

## 🚀 Getting Started

```bash
# Clone this repo
git clone https://github.com/ezarelz/vite-react-firebase-auth.git

# Navigate into the directory
cd vite-react-firebase-auth

# Install dependencies
npm install

# Run in development
npm run dev

# Build for production
npm run build
```

=======
### 🔐 Firebase Setup

This project uses Firebase Authentication (Email/Password) out of the box.

To make it work with your own Firebase project:

1. Go to Firebase Console and create a new project.
2. Enable Email/Password authentication in the Authentication > Sign-in method tab.
3. Copy your Firebase credentials (API key, Auth domain, etc).
4. Replace the firebaseConfig object in src/firebaseConfig.ts with your own project config.

Example:

```bash
// src/firebaseConfig.ts
const firebaseConfig = {
apiKey: 'YOUR_API_KEY',
authDomain: 'your-app.firebaseapp.com',
projectId: 'your-app',
storageBucket: 'your-app.appspot.com',
messagingSenderId: 'YOUR_MESSAGING_ID',
appId: 'YOUR_APP_ID',
measurementId: 'YOUR_MEASUREMENT_ID',
};

```

### ✅ Current Features

✅ Login & Register pages
✅ Firebase integration
✅ Routing with React Router
✅ Responsive design improvements

## 📝 License
MIT © 2025 - https://github.com/ezarelz
=======
