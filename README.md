# TestReactNative

A React Native project to test different features and components.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fcellini/TestReactNative.git
cd TestReactNative
```

2. Install and use the correct Node.js version:
```bash
# If you have nvm installed
nvm install
nvm use

# If you don't have nvm installed, you can install it from:
# https://github.com/nvm-sh/nvm#installing-and-updating
```

3. Install dependencies:
```bash
npm install
```

4. iOS Setup:
```bash
cd ios
pod install
cd ..
```

### Running the App

#### iOS
```bash
npm run ios
```

#### Android
```bash
npm run android
```

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── screens/       # Screen components
  └── navigation/    # Navigation configuration
```

## Features

- React Navigation setup with TypeScript support
- Safe area handling for iOS and Android
- Custom Dialog component

## Development

More information about the project will be added as development progresses.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 