# Contributing to ProLegis

Thank you for your interest in contributing! This document outlines the process for contributing code, documentation, and bug reports.

## 🛠 Development Workflow

1.  **Fork & Clone**
    ```bash
    git clone https://github.com/YOUR-USERNAME/prolegis.git
    cd prolegis
    ```

2.  **Create a Feature Branch**
    ```bash
    git checkout -b feat/your-feature-name
    # or: fix/your-bug-fix
    ```

3.  **Set Up Environment**
    ```bash
    cp .env.example .env.development
    # Edit .env.development with your values
    docker-compose up -d
    docker-compose exec backend npm run migrate
    ```

4.  **Make Your Changes**
    - Follow the existing code style.
    - Write or update tests for new functionality.
    - Update documentation if needed.

5.  **Run Tests & Lint**
    ```bash
    docker-compose exec backend npm test
    docker-compose exec backend npm run lint
    ```

6.  **Commit & Push**
    - Use descriptive commit messages.
    - Reference issue numbers if applicable.
    - Push to your fork: `git push origin feat/your-feature-name`

7.  **Open a Pull Request (PR)**
    - Target the `develop` branch.
    - Fill out the PR template completely.
    - Link any related issues.

## 📁 Project Structure & Key Conventions

- **Backend Routes**: Define endpoints in `/backend/routes/`. Use the `auth.js` middleware for protection.
- **Business Logic**: Place in `/backend/services/` (to be created).
- **Database Models**: Place in `/backend/models/` (to be created).
- **Frontend Components**: Place in `/frontend/src/components/`.
- **Middleware**: All request/response middleware is in `/backend/middleware/`. The `auth.js` middleware is central—it validates JWT tokens and enforces role-based access control (RBAC).

## ✅ Quality Gates

- **Tests Must Pass**: All existing tests must pass. New features should include tests.
- **Linting Must Pass**: Code must adhere to the ESLint configuration.
- **Security Review**: Any change handling sensitive data (cases, documents) will be reviewed for security implications.
- **Documentation**: Update `README.md`, `ARCHITECTURE.md`, or inline JSDoc as needed.

## 🐛 Reporting Bugs

Use the GitHub Issues template. Include:
- Steps to reproduce
- Expected vs. actual behavior
- Environment details (OS, Node version, Docker version)
- Relevant logs or screenshots

## ❓ Questions?

Reach out via the project's discussion board or contact the maintainers.