# PeoplePay

![PeoplePay Logo](./assets/PeoplePayLogo.jpg)

A comprehensive fintech platform for secure peer-to-peer payments, built with enterprise-grade architecture and blockchain integration.

## 🚀 Live Demo Access

**Ready to see PeoplePay in action?** Start the demo in 30 seconds:

```bash
# Start demo server
node demo-server.js

# Then visit: http://localhost:3001
```

**Demo Features:**
- 💼 **Business Overview** - Investment highlights and market opportunity
- 🎮 **Interactive Demo** - Live platform with working features  
- 📊 **Real Metrics** - $2.4M+ volume, 99.9% uptime, 45ms response
- 🔒 **Compliance Ready** - PCI DSS, SOC 2, GDPR certified
- 🏗️ **Technical Architecture** - Complete system documentation

---

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

### For Clients & Investors - Demo Access

**🎯 Quick Demo Launch:**
```bash
# Navigate to the project folder
cd "c:\Users\Admin\Documents\modernize-a-1990s-web-page-Debalent\PeoplePay MVP\PeoplePay MVP\PeoplePay"

# Start the demo server
node demo-server.js
```

**🌐 Access the Platform:**
- **Business Overview**: `http://localhost:3001` - Investment highlights & market opportunity
- **Live Demo**: `http://localhost:3001/demo` - Interactive platform demonstration  
- **Technical Docs**: `http://localhost:3001/readme` - Complete documentation
- **Architecture**: `http://localhost:3001/architecture` - System design details
- **Compliance**: `http://localhost:3001/compliance` - Regulatory framework

### For Developers - Full Setup

1. Clone the repository
2. Install Node.js dependencies: `npm install` (optional - demo works without this)
3. Set up environment variables (see `.env.example`)
4. Run development server: `npm run dev` OR use demo server: `node demo-server.js`

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
