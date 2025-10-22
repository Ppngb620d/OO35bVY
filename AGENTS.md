# Streamlit Repo Overview

Streamlit is an open-source (Apache 2.0) Python library for creating interactive web applications and dashboards with focus on data apps and internal tools.

## Tech Stack

- **Backend (Server):** Python, Tornado server, pytest
- **Frontend (Web UI):** TypeScript, React, Emotion (CSS-in-JS), Vite, Vitest
- **Communication:** Protocol Buffers (protobuf) over WebSocket.

## Folder Structure

- `lib/`: All backend code and assets.
  - `streamlit/`: The main Streamlit library package.
  - `streamlit/elements/`: Backend code of elements and widgets.
  - `streamlit/runtime/`: App runtime and execution logic.
  - `streamlit/web/`: Web server and CLI implementation
  - `tests`: Python unit tests (pytest).
- `frontend/`: All frontend code and assets.
  - `app/`: Streamlit application UI.
  - `lib/`: Shared TypeScript library that contains elements, widgets, and layouts.
  - `connection/`: WebSocket connection handling logic.
  - `utils/`: Shared utilities.
- `proto/streamlit/proto/`: Protobuf definitions for client-server communication.
- `e2e_playwright/`: E2E tests using playwright (via pytest).
- `scripts/`: Utility scripts for development and CI/CD.
- `component-lib/`: Library for building Streamlit custom components.
- `.github/workflows/`: GitHub Actions workflows used for CI/CD.

### Shell & Build Policy (AI Agents)

- Prefer `make` targets for all dev tasks (tests, lint, format, builds).
- For Python unit tests: `pytest` commands are allowed and encouraged for running specific tests during development.
- For E2E tests: `pytest` commands targeting `e2e_playwright/` files are blocked by policy.
  Use `make run-e2e-test <filename>` instead.

## `make` commands

Selection of `make` commands for development (run in the repo root):

- `help`: Show all available make commands.
- `protobuf`: Recompile Protobufs for Python and the frontend.
- `autofix`: Autofix linting and formatting errors.

**Backend Development (Python):**

- `python-lint`: Lint and check formatting of Python files (ruff).
- `python-tests`: Run all Python unit tests (pytest).
- `python-types`: Run the Python type checker (mypy & ty).
- `python-format`: Format Python files (ruff).

**Frontend Development (TypeScript):**

- `frontend-fast`: Build the frontend (vite).
- `frontend-dev`: Start the frontend development server (hot-reload).
- `frontend-lint`: Lint and check formatting of frontend files (eslint).
- `frontend-types`: Run the TypeScript type checker (tsc).
- `frontend-format`: Format frontend files (eslint).
- `frontend-tests`: Run all frontend unit tests (vitest).

**E2E Testing (Playwright):**

- `debug-e2e-test`: Run e2e test in debug mode, via: `make debug-e2e-test st_command_test.py`.
- `run-e2e-test`: Run e2e test, via: `make run-e2e-test st_command_test.py`.

### Development Tips

- **Follow existing patterns**: Check neighboring files for conventions.
- You can use the `work-tmp` directory to store temporary files, specs, and scripts.
- If you fail to run a `make` command, remember to run it from the root / top-level directory.

## Testing Strategy

- **Python Unit Tests**: Test internal behavior without frontend.
- **Frontend Unit Tests**: Test React components, hooks, and related functionality with Vitest and React Testing Library.
- **E2E Tests**: Test the entire app logic end-to-end with Playwright.
- **(Python) Type Tests**: Verify public API typing with mypy `assert_type`.
- Prefer running specific tests / test scripts for newly added tests instead the entire test suite.
