# ProLegis Sports Integrity Platform
```
## Overview
A secure, full-stack platform for managing anti-doping cases, legal documentation, and athlete representation globally.

```

## 🚀 Quick Start
```bash
git clone https://github.com/yourusername/prolegis.git
cd prolegis
cp .env.example .env
# Edit .env with your values
docker-compose up --build

```
Access: Frontend http://localhost:3000 | API http://localhost:5000/api/health

```

## 📋 Features
· Case Management: Track doping cases from investigation to resolution
· Secure Document Vault: E2E encrypted file storage with audit trails
· Video Consultations: Integrated video calls with recording
· Real-time Notifications: WebSocket-based alerts and updates
· Mobile Applications: Cross-platform React Native apps

```

🛠 Tech Stack
## Component Technology
Backend API Node.js, Express, PostgreSQL, Redis, Socket.io
Frontend Web React.js, Material-UI, Axios
Mobile App React Native, Expo
Infrastructure Docker, Nginx, GitHub Actions
Security JWT, E2E Encryption, RBAC, Audit Logging

```
## 🏗 Architecture & Key Components
The backend follows a layered architecture:
- **Routes** (`/routes/`): Define API endpoints (e.g., `cases.js`, `auth.js`).
- **Controllers**: Handle request/response logic (to be created in `/controllers/`).
- **Middleware** (`/middleware/`): Intercept requests for authentication (`auth.js`), logging, validation, and error handling.
- **Services** (`/services/`): Contain business logic and database interactions.
- **Models** (`/models/`): Define data structures and database queries.
**How Middleware Works:** The `auth.js` middleware is applied to protected routes. It validates the JWT token from the `Authorization` header, checks user permissions (Role-Based Access Control), and attaches the user to the `req` object before passing control to the route handler.

```

## 📁 Project Structure

prolegis/
├── .github/workflows/ci.yml           # CI/CD Pipeline
├── backend/
│   ├── server.js                      # MAIN APP ENTRY
│   ├── package.json                   # UPDATED WITH SCRIPTS
│   ├── Dockerfile                     # CONTAINER DEFINITION
│   ├── healthcheck.js
│   ├── routes/cases.js
│   ├── middleware/auth.js
│   ├── database/
│   │   ├── db.js
│   │   ├── schema.sql
│   │   └── migrations.js
│   ├── scripts/
│   │   ├── create-admin.js
│   │   └── validate-env.js
│   └── utils/logger.js                # LOGGING UTILITY
├── frontend/
│   ├── Dockerfile                     # CONTAINER DEFINITION
│   └── nginx.conf
├── scripts/                           # ROOT-LEVEL SCRIPTS
│   ├── deploy.sh
│   ├── backup.sh
│   └── test-api.sh                    # NEW TEST SCRIPT
├── docs/
│   └── ARCHITECTURE.md
├── docker-compose.yml                 # FULL-STACK ORCHESTRATION
├── .env.example                       # ENV TEMPLATE
├── README.md                          # UPDATED
├── SECURITY.md
├── CONTRIBUTING.md
├── DEPLOYMENT.md
└── CHANGELOG.md

```
prolegis/
├── backend/           # Node.js API server
├── frontend/          # React web dashboard
├── mobile/            # React Native application
├── docker-compose.yml # Full-stack orchestration
└── docs/              # Project documentation
```

## 🔗 Documentation

· Architecture Overview
· Deployment Guide
· API Documentation
· Security Policy
· Contributing Guide

```

## 📄 License

Proprietary - All rights reserved.

```

🚀 Recommended Final Steps to Launch

To bring your platform online, follow this exact sequence from your project root:

1. Prepare Environment:
   ```bash
   cp .env.example .env
   # EDIT .env file with your real passwords and secrets
   ```
2. Build and Launch with Docker Compose:
   ```bash
   # This uses the services defined in docker-compose.yml
   docker-compose up --build -d
   ```
3. Initialize Database & Create Admin:
   ```bash
   docker-compose exec backend npm run migrate
   docker-compose exec backend npm run create-admin
   ```
4. Run Your Tests:
   ```bash
   # Test the API (ensure services are running)
   ./scripts/test-api.sh http://localhost:5000
   
   # Run backend unit tests inside its container
   docker-compose exec backend npm test
   
   
   ```