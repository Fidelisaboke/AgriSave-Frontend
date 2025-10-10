# 🌾 Agrisave Frontend

[![Vite](https://img.shields.io/badge/Vite-4.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![ShadCN/UI](https://img.shields.io/badge/ShadCN/UI-Components-000000?logo=shadcn&logoColor=white)](https://ui.shadcn.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-Data_Fetching-FF4154?logo=react-query&logoColor=white)](https://tanstack.com/query)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Linted with ESLint](https://img.shields.io/badge/Lint-ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)

## 🌾 Project Overview

**Agrisave** empowers farmers and agricultural researchers with data-driven insights.  
Through AI-based disease detection, smart crop recommendations, and sustainability tracking, this platform promotes smarter and greener agriculture in Kenya and beyond.  

The frontend offers a clean, interactive dashboard with seamless integration into the Django backend via JWT authentication.


## 📜 Table of Contents

- [✨ Features](#-features)
- [🧰 Tech Stack](#-tech-stack)
- [⚙️ Setup and Installation](#️-setup-and-installation)
- [🚀 Basic Usage](#-basic-usage)
- [📂 Project Structure](#-project-structure)
- [🧪 Testing](#-testing)
- [🔮 Future Enhancements](#-future-enhancements)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

## ✨ Features

✅ **Authentication**
- Secure login, registration, and token refresh using JWT.  
- Auth state persisted with React Context + Local Storage.

🌿 **AI-Powered Analysis**
- Upload leaf images for **disease prediction**.  
- Receive **crop recommendations** based on soil and weather data.

📊 **Weather & Climate Insights**
- Visualize temperature and rainfall trends using **Chart.js**.  
- Fetch real-time weather data via Django API endpoints.

🧑‍🌾 **Crop Management**
- Add, edit, and track crops, including **upcoming harvests** and **statistics**.

💚 **Green Points Dashboard**
- Track your **sustainability score**, earn **badges**, and view eco-tips.

🎨 **Modern UI/UX**
- Built with **ShadCN/UI**, **Lucide Icons**, and responsive design via **Tailwind CSS**.  
- Smooth transitions with **Framer Motion**.

## 🧰 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend Framework | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [ShadCN/UI](https://ui.shadcn.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Data Fetching | [Axios](https://axios-http.com/) + [TanStack Query](https://tanstack.com/query) |
| Forms & Validation | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Charts | [Chart.js](https://www.chartjs.org/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Linting | [ESLint](https://eslint.org/) |

## ⚙️ Setup and Installation

### Prerequisites
- Node.js 18+
- npm or yarn
- Backend API running (Django)

### Steps
```bash
# Clone the repository
git clone https://github.com/your-username/agrisave-frontend.git
cd agrisave-frontend

# Copy environment file
cp .env.example .env

# Install dependencies
npm install

# Run the development server
npm run dev
```

The app should now be accessible at:
👉 **[http://localhost:5173](http://localhost:5173)**


## 🚀 Basic Usage

1. Register a new user or log in.
2. Explore the dashboard: view crops, upload leaf images, or check weather data.
3. Access your sustainability metrics in the **Green Points Dashboard**.
4. Log out securely when done.


## 📂 Project Structure

```
src/
├── api/                # Axios services for API endpoints
├── components/         # Reusable UI components (ShadCN + custom)
├── contexts/           # Auth context and provider
├── lib/                # Utility functions
├── pages/              # Main views (auth, dashboard, etc.)
├── providers/          # React Query & Auth providers
├── routes/             # Route configuration (Protected + Guest)
├── schemas/            # Zod schemas for form validation
└── types/              # Shared TypeScript interfaces
```

## 🧪 Testing

Basic frontend testing can be done using:

```bash
npm run lint
npm run test
```

Recommended libraries:

* **Vitest** for unit testing
* **React Testing Library** for component testing

## 🔮 Future Enhancements

* 🌍 PWA support for offline access
* 🪴 AI-based yield prediction models
* 📱 Dedicated mobile app using React Native
* 🌤️ Real-time weather alerts
* 🧭 Multi-language support

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch (`feat/awesome-idea`)
3. Commit your changes
4. Open a Pull Request


## 📜 License

This project is licensed under the [MIT License](LICENSE).
Feel free to use, modify, and share responsibly.

## 🪴 Acknowledgements

Special thanks to:
* SecretStartups x Tech Hut Community
* Django backend team 💻
* OpenWeather & AI model contributors ☁️
* Hackathon mentors and reviewers ⚡

> Built with 💚 and a mission to empower **sustainable farming!**