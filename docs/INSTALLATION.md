# Installation Guide

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native development environment setup
- iOS/Android development environment (for mobile development)

## Setup Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tour-manager-app.git
cd tour-manager-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (iOS only):
```bash
cd ios
pod install
cd ..
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

5. Run the app:
```bash
# For iOS
npm run ios
# or
yarn ios

# For Android
npm run android
# or
yarn android
```

## Environment Setup

1. Create a `.env` file in the root directory
2. Add necessary environment variables (see `.env.example`)

## Troubleshooting

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues and solutions. 