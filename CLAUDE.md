# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a demo app showcasing the `expo-tvos-search` library on tvOS using Expo. It demonstrates native tvOS search UI with a planet search interface using 8 planets from the solar system.

**Key Architecture Points:**
- Expo managed workflow configured specifically for tvOS (not standard iOS)
- Uses `react-native-tvos` instead of standard `react-native`
- Requires the `EXPO_TV=1` environment variable for prebuild operations
- The `expo-tvos-search` library is a local file dependency (`file:../expo-tvos-search`)

## Development Commands

### Initial Setup
```bash
npm install
npm run prebuild  # Runs EXPO_TV=1 npx expo prebuild --clean
```

**Important**: This project uses a local file dependency for `expo-tvos-search` (symlinked from `../expo-tvos-search`). The `metro.config.js` file is configured to watch this directory, which is required for Metro to properly resolve the module. BUT ONLY WHEN TESTING THIS EXTERNAL LIBRARY LOCALLY.

### Running the App
The app requires two terminals:

**Terminal 1** - Start Metro bundler:
```bash
npm start
```

**Terminal 2** - Launch tvOS simulator:
```bash
npm run tvos  # Runs npx expo run:ios (auto-detects tvOS scheme)
```

### Other Commands
```bash
npm run android   # Android build (not tvOS-specific)
npm run ios       # Standard iOS build
npm run web       # Web build
```

## Critical tvOS Configuration

### package.json
- Must use `react-native-tvos` (aliased as `react-native`) instead of standard React Native
- The `prebuild` script MUST include `EXPO_TV=1` environment variable

### app.json
- `platforms: ["ios"]` - Only iOS platform supported (tvOS is a variant of iOS)
- `@react-native-tvos/config-tv` plugin is required in the plugins array
- `newArchEnabled: true` - Uses React Native's new architecture

### metro.config.js
- Configures Metro to watch the symlinked `expo-tvos-search` package directory
- Required for resolving the local file dependency (`file:../expo-tvos-search`)
- Adds `../expo-tvos-search` to `watchFolders` array

### Prebuild Process
When running prebuild (`npm run prebuild`):
1. The `EXPO_TV=1` environment variable tells Expo to generate tvOS-enabled native projects
2. This creates both iOS and tvOS schemes in Xcode
3. The `expo run:ios` command auto-detects the tvOS scheme
4. Native projects are generated in the `ios/` directory

## Code Structure

**App.tsx** - Root component that renders SearchScreen with dark background (#141414)

**SearchScreen.tsx** - Main search implementation:
- Uses `TvosSearchView` component from `expo-tvos-search`
- Implements search filtering over PLANETS array (8 hardcoded planets)
- Search filters by planet title or subtitle (supports partial matches)
- Demonstrates debounced search with 300ms setTimeout simulation
- Shows custom styling props (textColor, accentColor, card dimensions)

**index.ts** - Entry point using `registerRootComponent` from Expo

## Common Issues & Solutions

### "Unable to resolve module expo-tvos-search" error
If you see this bundling error:
1. Ensure `metro.config.js` exists with the watchFolders configuration
2. Clear Metro cache and restart:
```bash
pkill -f "expo start"
npm install
npm start
```

### Native module not found error
If you see `requireNativeViewManager("ExpoTvosSearch") returned null`:
```bash
npm run prebuild
npm run tvos
```

### Prebuild fails
Verify:
- `react-native-tvos` is in dependencies (not standard `react-native`)
- `@react-native-tvos/config-tv` is in app.json plugins
- `EXPO_TV=1` is set when running prebuild

### Search UI doesn't appear
Ensure you're running on Apple TV simulator, not iPhone/iPad simulator. The `isNativeSearchAvailable()` check will return false on non-tvOS platforms.

### Wrong simulator launches
After prebuild, Xcode creates both iOS and tvOS schemes. The `expo run:ios` command should auto-detect tvOS, but if it launches iOS, manually select the tvOS scheme in Xcode.

## TypeScript Configuration

- Extends `expo/tsconfig.base`
- Strict mode enabled
- No custom compiler options needed for tvOS
