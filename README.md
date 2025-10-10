# PeoplePay

A comprehensive fintech platform for secure peer-to-peer payments, built with enterprise-grade architecture and blockchain integration.

## Architecture Overview

PeoplePay is structured as a monorepo with the following components:

### Apps
- **mobile/**: React Native or Flutter app for iOS/Android
- **web/**: Next.js web client for browser access
- **admin-dashboard/**: Internal admin panel for compliance and audits

### Packages
- **ui/**: Shared UI components (buttons, modals, inputs)
- **hooks/**: Shared React/Flutter hooks (auth, wallet, etc.)
- **utils/**: Shared utilities (formatting, validation)
- **types/**: Shared TypeScript or Dart types/interfaces

### Services
- **auth/**: OAuth2, biometric login, 2FA
- **payments/**: Send/receive money, request payments
- **ledger/**: Blockchain transaction logging + audit trail
- **compliance/**: KYC/AML checks, identity verification
- **notifications/**: Push, SMS, email alerts
- **analytics/**: Usage tracking, fraud detection

### Blockchain
- **smart-contracts/**: Solidity/Rust contracts for escrow, transfers
- **wallet-integration/**: MetaMask, WalletConnect, or custom wallet
- **token-management/**: Stablecoin or fiat-backed token logic
- **chain-bridge/**: Cross-chain support

### Infrastructure
- **api-gateway/**: Rate limiting, routing, logging
- **server/**: Node.js backend services
- **db/**: PostgreSQL + Redis + IPFS storage
- **queue/**: Background jobs (BullMQ, RabbitMQ)
- **monitoring/**: Logs, metrics, uptime alerts

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run development server: `npm run dev`

## Development

- See `docs/onboarding.md` for detailed setup instructions
- See `docs/architecture.md` for system design
- See `docs/compliance.md` for regulatory guidelines

## Testing

- Unit tests: `npm run test:unit`
- Integration tests: `npm run test:integration`
- Blockchain tests: `npm run test:blockchain`

## License

Copyright © 2025 PeoplePay. All rights reserved.
```

2. Install dependencies for the client:

```powershell
cd app
npm install
cd ..
```

3. Start the dev servers (runs both client and backend):

```powershell
npm run dev
```

The client (Vite) will be in `app/` and backend Express server will run at `http://localhost:3000` by default.

This scaffold uses React + Vite (TypeScript) for the frontend and Node + Express for the backend. Styling uses Bootstrap.
# PeoplePay
PeoplePay is a secure payment platform for peer-to-peer and peer-to-business transactions. Built for speed, trust, and community empowerment, it offers mobile-first tools for sending, receiving, and managing money with accessibility and parental controls built in.
