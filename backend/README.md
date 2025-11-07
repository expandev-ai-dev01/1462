# Alexandre Pet Care - Backend API

Backend API for Alexandre Pet Care - Complete pet shop management system dedicated to pet wellness and care.

## Features

- Client and Pet Registration
- Service Scheduling (grooming, bathing, treatments)
- Inventory Management
- Sales Control
- Financial Management
- Medical and Service History
- Loyalty Program
- Automatic Notifications

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API
- **Data Storage**: In-memory (arrays/objects)

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   ├── v1/                 # Version 1 routes
│   └── index.ts            # Main router
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── tests/                  # Global test utilities
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## API Documentation

### Base URL

- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Endpoints

#### Health Check

```
GET /health
```

Returns API health status.

#### External Routes (Public)

```
/api/v1/external/...
```

Public endpoints accessible without authentication.

#### Internal Routes (Authenticated)

```
/api/v1/internal/...
```

Authenticated endpoints requiring valid credentials.

## Development Guidelines

### Code Style

- Use TypeScript strict mode
- Follow ESLint configuration
- Use 2 spaces for indentation
- Maximum line length: 120 characters
- Use single quotes for strings

### Testing

- Write unit tests for business logic
- Write integration tests for API endpoints
- Maintain test coverage above 80%
- Use descriptive test names

### Commit Messages

- Use conventional commit format
- Examples:
  - `feat: add client registration endpoint`
  - `fix: resolve scheduling conflict validation`
  - `docs: update API documentation`

## Environment Variables

See `.env.example` for all available configuration options.

## License

ISC

## Support

For support and questions, please contact the development team.