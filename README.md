# 🐾 PetConnect

PetConnect is a friendly community platform for pet owners, adopters, shelters, and veterinary professionals. It brings pet adoption, community discussions, pet profiles, helpful news, and AI-powered pet-care guidance together in one place.

## Overview

The project includes a React frontend and an Express/MongoDB backend. Visitors can explore the landing page, adoption listings, community content, and pet-care news. Registered users can manage their account and pets, create discussions, and use the protected chat features.

## Related Repositories

- [PetConnect Backend](https://github.com/Pet-connect-website/pet-connect-backend/commits/master/)

## Features

- Landing page with product information and calls to action
- User registration, login, logout, and protected routes
- Forgot-password and reset-password flows
- User dashboard with profile details and quick actions
- Pet profiles with details such as type, breed, age, weight, gender, photos, and medical notes
- Pet adoption listings with images, locations, descriptions, and detail modals
- Community wall for starting discussions, sharing images, liking posts, and commenting
- Lost-pet and adoption post support with search, category, type, and pagination filters
- Pet-care news with categories, featured articles, article details, and view counts
- Full-page AI pet-care chat with quick questions, typing feedback, and conversation context
- Floating pet-care assistant widget available from the home page
- Emergency keyword detection and reminders to contact a veterinarian for serious concerns
- Chat history, sessions, response ratings, and protected chat endpoints
- Responsive layouts for desktop, tablet, and mobile screens
- Security and performance middleware including validation, CORS, rate limiting, compression, and error handling
- Real-time Socket.IO support for user rooms, location rooms, and typing indicators

## Technology

| Technology | Purpose |
| --- | --- |
| React 19 | Builds the interactive user interface |
| Vite | Frontend development server and production bundling |
| React Router | Handles public, authenticated, and fallback routes |
| Tailwind CSS | Provides responsive styling and layout utilities |
| Framer Motion | Supports interface animations |
| Lucide React | Supplies interface icons |
| Axios | Sends requests from the frontend to the API |
| Node.js and Express | Runs the backend REST API |
| MongoDB and Mongoose | Stores users, pets, posts, and chat sessions |
| Socket.IO | Enables real-time events and typing indicators |
| OpenAI API | Generates AI-powered pet-care responses when configured |
| JWT, Helmet, and express-rate-limit | Supports authentication and API security |

## Getting Started

### Prerequisites

- Node.js 16 or newer
- npm 8 or newer
- MongoDB or a MongoDB Atlas connection for persistent data
- An OpenAI API key is optional; the chat service includes fallback responses

### 1. Install frontend dependencies

```bash
cd pet-connect-frontend
npm install
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

Create `pet-connect-frontend/backend/.env`:

```env
PORT=3001
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017/petconnect
JWT_SECRET=replace-with-a-long-random-secret
OPENAI_API_KEY=your-openai-key
```

`OPENAI_API_KEY` can be omitted when using the built-in fallback chat responses. The backend can also start in demo mode if MongoDB is unavailable, but persistent features require a database.

### 3. Start the backend

From `pet-connect-frontend/backend`:

```bash
npm run dev
```

The API runs at `http://localhost:3001` and its health check is available at `http://localhost:3001/health`.

### 4. Start the frontend

In a second terminal, from `pet-connect-frontend`:

```bash
npm run dev
```

Open the URL shown by Vite, normally `http://localhost:5173`.

## Useful Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the frontend development server |
| `npm run build` | Build the frontend for production |
| `npm run lint` | Check frontend code with ESLint |
| `npm run preview` | Preview the production build |
| `npm start` (in `backend/`) | Start the backend API |
| `npm run dev` (in `backend/`) | Start the backend with Nodemon |

## Main Routes

`/` and `/landing` show the landing page. Authenticated users can access `/home`, `/dashboard`, `/adoption`, `/post`, `/commwall`, `/chat`, and `/news`.

## Notes

The frontend currently uses the API base URL `http://localhost:3001/api` in `src/services/authService.js`. Keep the backend on port `3001`, or update that value if you choose another port.

