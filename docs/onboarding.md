# PeoplePay Developer Onboarding

Welcome to the PeoplePay development team! This guide will help you set up your development environment and understand our codebase structure.

## Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose
- Git
- VS Code (recommended) with our extension pack
- PostgreSQL client (optional, for database inspection)

## Getting Started

### 1. Clone and Setup

```bash
git clone https://github.com/YourOrg/PeoplePay.git
cd PeoplePay
npm install
```

### 2. Environment Configuration

Copy the environment template and configure your local settings:

```bash
cp .env.example .env
```

Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_URL`: Redis connection string
- `JWT_SECRET`: Secret for JWT token signing
- `BLOCKCHAIN_RPC_URL`: Blockchain node endpoint
- `ANTHROPIC_API_KEY`: For AI features (optional)

### 3. Database Setup

Start the local development database:

```bash
docker-compose up -d postgres redis
npm run db:migrate
npm run db:seed
```

### 4. Development Server

Start all services in development mode:

```bash
npm run dev
```

This will start:
- Web app at http://localhost:3000
- API server at http://localhost:8000
- Admin dashboard at http://localhost:3001
- Storybook at http://localhost:6006

## Project Structure

```
peoplepay/
├── apps/                    # Frontend applications
│   ├── web/                # Next.js web app
│   ├── mobile/             # React Native app
│   └── admin-dashboard/    # Admin interface
├── packages/               # Shared packages
│   ├── ui/                 # Component library
│   ├── hooks/              # Shared React hooks
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript definitions
├── services/               # Backend microservices
│   ├── auth/               # Authentication service
│   ├── payments/           # Payment processing
│   ├── ledger/             # Transaction ledger
│   ├── compliance/         # KYC/AML compliance
│   ├── notifications/      # Push/email/SMS
│   └── analytics/          # Data analytics
├── blockchain/             # Blockchain integration
│   ├── smart-contracts/    # Solidity contracts
│   ├── wallet-integration/ # Wallet connectivity
│   ├── token-management/   # Token operations
│   └── chain-bridge/       # Cross-chain support
├── infra/                  # Infrastructure code
│   ├── api-gateway/        # API routing and rate limiting
│   ├── server/             # Main server application
│   ├── db/                 # Database migrations and seeds
│   ├── queue/              # Background job processing
│   └── monitoring/         # Logging and metrics
├── docs/                   # Documentation
└── tests/                  # Test suites
```

## Development Workflow

### Branch Naming Convention

- `feature/payment-processing` - New features
- `bugfix/auth-token-refresh` - Bug fixes
- `hotfix/security-patch` - Critical fixes
- `chore/update-dependencies` - Maintenance tasks

### Commit Message Format

Follow conventional commits:

```
feat(payments): add recurring payment support
fix(auth): resolve token refresh race condition
docs(api): update payment endpoint documentation
test(compliance): add KYC validation tests
```

### Code Review Process

1. Create feature branch from `main`
2. Implement changes with tests
3. Submit pull request with description
4. Address review feedback
5. Merge after approval and CI passes

## Testing

### Running Tests

```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# Blockchain tests
npm run test:blockchain

# All tests
npm run test
```

### Test Coverage

Maintain minimum 80% code coverage:

```bash
npm run test:coverage
```

### Writing Tests

- Unit tests: `*.test.ts` files alongside source code
- Integration tests: `tests/integration/` directory
- E2E tests: `tests/e2e/` directory
- Blockchain tests: `tests/blockchain/` directory

## Code Quality

### Linting and Formatting

```bash
npm run lint        # ESLint
npm run lint:fix    # Auto-fix linting issues
npm run format      # Prettier formatting
npm run type-check  # TypeScript compilation
```

### Pre-commit Hooks

Husky runs these checks automatically:
- Lint and format code
- Run affected tests
- Type checking
- Security scanning

## Database Migrations

### Creating Migrations

```bash
npm run db:migration:create -- --name add_user_table
```

### Running Migrations

```bash
npm run db:migrate        # Run pending migrations
npm run db:migrate:down   # Rollback last migration
npm run db:reset          # Reset database (dev only)
```

## Debugging

### VS Code Configuration

Our `.vscode/launch.json` includes:
- Node.js service debugging
- Browser debugging for React apps
- Docker container debugging

### Logging

Use our structured logging:

```typescript
import { logger } from '@peoplepay/utils'

logger.info('Payment processed', { 
  userId: user.id, 
  amount: payment.amount,
  transactionId: transaction.id 
})
```

### Error Tracking

Errors are automatically tracked in:
- Development: Console output
- Staging/Production: Sentry

## Security Guidelines

### Sensitive Data

- Never commit secrets to git
- Use environment variables for configuration
- Encrypt PII data at rest
- Use HTTPS for all communications

### Authentication

- JWT tokens for API authentication
- OAuth2 for external integrations
- Biometric authentication for mobile
- MFA for admin access

### Code Security

- Run security scans: `npm audit`
- Use Snyk for vulnerability checking
- Follow OWASP security guidelines
- Regular dependency updates

## Deployment

### Staging Deployment

Automatic deployment on merge to `develop`:

```bash
git checkout develop
git merge feature/my-feature
git push origin develop
```

### Production Deployment

1. Create release PR from `develop` to `main`
2. Update version numbers and changelog
3. Get approval from team lead
4. Merge triggers production deployment

### Environment Promotion

1. Development: Feature branches
2. Staging: `develop` branch
3. Production: `main` branch

## Useful Commands

```bash
# Start specific services
npm run dev:web           # Web app only
npm run dev:api           # API server only
npm run dev:mobile        # Mobile app

# Database operations
npm run db:studio         # Open database GUI
npm run db:backup         # Create backup
npm run db:restore        # Restore from backup

# Build commands
npm run build             # Build all apps
npm run build:web         # Build web app
npm run build:mobile      # Build mobile app

# Docker operations
docker-compose up -d      # Start all services
docker-compose logs app   # View app logs
docker-compose exec db psql # Connect to database
```

## Getting Help

- **Slack**: #peoplepay-dev channel
- **Documentation**: Internal wiki at wiki.peoplepay.com
- **Code Questions**: Tag @dev-team in PR comments
- **Infrastructure**: Contact DevOps team
- **Security**: Contact security@peoplepay.com

## Resources

- [API Documentation](docs/api.md)
- [Component Library](http://localhost:6006) (Storybook)
- [Architecture Overview](docs/architecture.md)
- [Compliance Guidelines](docs/compliance.md)
- [Deployment Guide](docs/deployment.md)

Welcome to the team! 🚀