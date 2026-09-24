# Nischal Joshi — Developer Portfolio

A modern, responsive personal portfolio website for **Nischal Joshi**, a BSc CSIT student and Junior Full-Stack Developer building practical web applications with the MERN stack.

---

## 1. Project Overview

This portfolio showcases technical skills, projects, learning journey, education, and contact information. Portfolio content is cleanly separated into modular data files (`frontend/src/data/`) to make it easy to update without modifying UI code.

---

## 2. Tech Stack

### Frontend
- **React 19 & TypeScript**: Component architecture & strong typing
- **TanStack Start & TanStack Router**: Full-stack framework & file-based routing
- **Vite & Tailwind CSS v4**: Fast builds & modern utility styling
- **Framer Motion**: Restrained UI animations & smooth transitions
- **Lucide React**: Vector icons

### Backend
- **Node.js & Express**: REST API backend (`/api/contact`, `/api/health`)
- **MongoDB & Mongoose**: Persistence for contact submissions
- **CORS & dotenv**: Environment configuration & cross-origin security

---

## 3. Project Structure

```text
Nischal-Joshi-Portfolio/
├── frontend/
│   ├── public/
│   │   ├── images/          # Profile image (/images/profile.jpg)
│   │   ├── resume/          # PDF CV (/resume/Nischal-Joshi-CV.pdf)
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── portfolio/   # Portfolio UI (ContactForm, Navbar, ProjectCard, Reveal, SectionHeading)
│   │   │   └── ui/          # Essential UI components (button, input, label, textarea)
│   │   ├── data/            # Editable portfolio content
│   │   │   ├── personal.ts  # Personal information & social links
│   │   │   ├── projects.ts  # Projects, descriptions, technologies, & links
│   │   │   ├── skills.ts    # Technical skills
│   │   │   ├── education.ts # Education & degree info
│   │   │   ├── journey.ts   # Learning milestones
│   │   │   ├── process.ts   # Development process steps
│   │   │   └── navigation.ts# Navbar menu links
│   │   ├── routes/
│   │   │   ├── __root.tsx   # Root layout & error boundaries
│   │   │   └── index.tsx    # Home page route
│   │   ├── services/
│   │   │   └── contact.ts   # Contact API service (POST /api/contact)
│   │   ├── lib/
│   │   │   └── utils.ts     # Utility functions (cn)
│   │   ├── router.tsx       # TanStack Router instance
│   │   ├── start.ts         # TanStack Start server configuration
│   │   ├── server.ts        # Server entry
│   │   └── styles.css       # Tailwind CSS v4 styling
│   ├── .env.example         # Frontend environment template
│   ├── package.json
│   └── vite.config.ts       # Vite + TanStack Start configuration
├── backend/
│   ├── controllers/
│   │   └── contactController.js # Contact form controller & validation
│   ├── models/
│   │   └── Contact.js       # Mongoose Contact model
│   ├── routes/
│   │   └── contactRoutes.js # Express router for /api/contact
│   ├── server.js            # Express server initialization & MongoDB connection
│   ├── .env.example         # Backend environment template
│   └── package.json
└── README.md
```

---

## 4. How to Run Locally

### Prerequisites
- **Node.js**: v18+ recommended
- **MongoDB**: Local MongoDB instance (`mongodb://127.0.0.1:27017/my-portfolio`) or a cloud MongoDB Atlas connection URI.

### Step 1: Start Backend API
```bash
cd backend
npm install
npm run dev
```
The Express backend server will run on **`http://localhost:5000`**.

### Step 2: Start Frontend Application
In a separate terminal window:
```bash
cd frontend
npm install
npm run dev
```
The Vite development server will run on **`http://localhost:5173`**.

---

## 5. Environment Variables

### Frontend (`frontend/.env`)
| Variable | Description | Default / Example |
|---|---|---|
| `VITE_API_URL` | Express API base URL | `http://localhost:5000` |

### Backend (`backend/.env`)
| Variable | Description | Default / Example |
|---|---|---|
| `PORT` | API server port | `5000` |
| `MONGODB_URI` | MongoDB connection URI | `mongodb://127.0.0.1:27017/my-portfolio` |
| `CLIENT_URL` | Allowed CORS origin | `http://localhost:5173` |

---

## 6. Editing Portfolio Information

All user-facing text and configuration live in `frontend/src/data/`:

| Information | File | What to edit |
|---|---|---|
| **Personal Details** | `frontend/src/data/personal.ts` | Name, title, email, phone, social links, profile image, resume path |
| **Projects** | `frontend/src/data/projects.ts` | Title, description, technologies, `githubUrl`, `liveUrl` |
| **Skills** | `frontend/src/data/skills.ts` | Technical skills grouped by category |
| **Education** | `frontend/src/data/education.ts` | Degree, institution, university, duration, status |
| **Journey** | `frontend/src/data/journey.ts` | Learning milestones timeline |
| **Build Process** | `frontend/src/data/process.ts` | "How I Build" steps |
| **Navigation** | `frontend/src/data/navigation.ts` | Navbar links |

### Assets
- **Profile Image**: `frontend/public/images/profile.jpg`
- **Resume PDF**: `frontend/public/resume/Nischal-Joshi-CV.pdf`
