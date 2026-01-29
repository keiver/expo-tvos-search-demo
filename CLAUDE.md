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

**`app/_layout.tsx`** - Root Stack navigator. Defines all screens with `headerShown: false`. No tabs — only one search view instance exists at a time.

**`app/index.tsx`** - Home screen with a demo menu. Left column shows the library hero, feature pills, and footer. Right column lists 6 focusable demo items that navigate via `router.push()`. Uses `useFocusEffect` + `hasTVPreferredFocus` to restore focus to the last selected demo when returning via the Menu button.

**`app/poster.tsx`** - Default 4-column grid with error monitoring
**`app/portrait.tsx`** - Portrait cards with focus border and search field tracking
**`app/landscape.tsx`** - Wide 16:9 cards with custom state messages
**`app/mini.tsx`** - 5-column compact layout with marquee scrolling
**`app/external.tsx`** - Titles below cards, marquee disabled
**`app/minimal.tsx`** - Programmatic searchText control, availability fallback

**`constants/planets.ts`** - Sample data (8 planets with images)

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

## Cardinal Rule: No Invented Fixes

**When you don't understand a problem, say so. Do not fabricate solutions.**

### The Pattern to Stop

1. User reports a bug or unexpected behavior
2. You don't actually understand the underlying system (UIKit lifecycle, SwiftUI view hosting, focus engine mechanics, etc.)
3. You propose a "fix" that sounds plausible but is based on assumptions, not knowledge
4. The fix breaks something else or makes it worse
5. Only AFTER user calls it out, you admit you were guessing

**This is not acceptable.**

### Required Behavior

**Before proposing ANY fix to native code (Swift, UIKit, SwiftUI, tvOS focus system):**

1. **State what you actually know vs. what you're guessing**
   - "I understand X because [documentation/code evidence]"
   - "I'm unsure about Y — this is speculation"

2. **If you don't understand the root cause, say so explicitly**
   - Do not propose fixes for problems you haven't diagnosed
   - "I don't fully understand why this is breaking. Let me investigate first."

3. **Investigate before proposing**
   - Read the existing code thoroughly
   - Search for Apple documentation on the specific APIs involved
   - Look at how similar patterns are handled elsewhere in the codebase
   - If still unclear, ASK instead of guessing

4. **Never use confident language for uncertain solutions**
   - Wrong: "The fix is to [do X]"
   - Right: "One possibility — though I'm not certain — would be..."

**If a proposed change touches any of these, you must:**
1. Explain WHY it should work (not just WHAT it does)
2. Identify what could break
3. Acknowledge uncertainty if present

### The Test

Before proposing a fix, ask yourself:
- "Am I confident this is correct, or am I hoping it works?"
- "Can I explain the underlying mechanism, or am I pattern-matching?"
- "If this breaks, will I be able to say I understood the risk?"

If the answer is "hoping" or "pattern-matching" — **stop and investigate or ask**.