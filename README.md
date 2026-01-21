# expo-tvos-search demo

<div align="center">

[![npm version](https://img.shields.io/npm/v/expo-tvos-search.svg?style=flat-square)](https://www.npmjs.com/package/expo-tvos-search)
[![npm downloads](https://img.shields.io/npm/dm/expo-tvos-search.svg?style=flat-square)](https://www.npmjs.com/package/expo-tvos-search)
[![GitHub stars](https://img.shields.io/github/stars/keiver/expo-tvos-search.svg?style=flat-square)](https://github.com/keiver/expo-tvos-search)
[![License](https://img.shields.io/npm/l/expo-tvos-search.svg?style=flat-square)](https://github.com/keiver/expo-tvos-search/blob/main/LICENSE)

![Lowres Demo GIF](./demo-expo-tvos-search.gif)

</div>

A working demo app showcasing the [expo-tvos-search](https://github.com/keiver/expo-tvos-search) library on tvOS using Expo.

## What This Demo Shows

- Native tvOS search UI with SwiftUI `.searchable` modifier
- 8 planets searchable by name or description
- Selection handling with native Alert
- Expo managed workflow with tvOS

## Tab Demonstrations

- **Default** - 4-column grid
- **Portrait** - Tall cards (280x420) with overlay titles
- **Landscape** - Wide 16:9 cards (500x280)
- **Mini** - 5-column compact layout (240x360)
- **External** - Titles below cards
- **Minimal** - Minimum required props
- **Help** - Reference page

## Prerequisites

- macOS with Xcode installed
- Node.js 20+
- tvOS Simulator (comes with Xcode)

## Setup & Running

Open two terminals:

**Terminal 1** - Install, prebuild, start Metro:
```bash
npm run clear
```

**Terminal 2** - Launch tvOS simulator:
```bash
npm run tvos
```

## Using the Demo

Type planet names (`mars`, `earth`) or descriptions (`giant`, `ice`, `windy`). Use tvOS remote to navigate results, press center to select.

**Tip:** Check the "Minimal" tab for simplest setup.

## TvosSearchView Props

### Layout

| Prop | Type | Description |
|------|------|-------------|
| `columns` | `number` | Number of columns in grid (default: 3) |
| `cardWidth` | `number` | Card width in pixels (default: 280) |
| `cardHeight` | `number` | Card height in pixels (default: 420) |
| `cardMargin` | `number` | Margin between cards (default: 20) |
| `cardPadding` | `number` | Padding inside cards (default: 0) |
| `topInset` | `number` | Top padding for safe area |

### Display

| Prop | Type | Description |
|------|------|-------------|
| `showTitleOverlay` | `boolean` | Show title on card overlay (default: true) |
| `showTitle` | `boolean` | Show title below card (default: false) |
| `showSubtitle` | `boolean` | Show subtitle below title (default: false) |
| `overlayTitleSize` | `number` | Font size for overlay titles |

### Styling

| Prop | Type | Description |
|------|------|-------------|
| `textColor` | `string` | Color for text elements |
| `accentColor` | `string` | Color for focused/selected states |

### Content

| Prop | Type | Description |
|------|------|-------------|
| `results` | `SearchResult[]` | Array of search results (required) |
| `placeholder` | `string` | Search field placeholder text |
| `isLoading` | `boolean` | Show loading indicator |
| `emptyStateText` | `string` | Text when no search performed |
| `searchingText` | `string` | Text while searching |
| `noResultsText` | `string` | Text when no results found |
| `noResultsHintText` | `string` | Hint text below no results message |

### Callbacks

| Prop | Type | Description |
|------|------|-------------|
| `onSearch` | `(event) => void` | Called when search query changes (required) |
| `onSelectItem` | `(event) => void` | Called when item selected (required) |

### Other

| Prop | Type | Description |
|------|------|-------------|
| `style` | `ViewStyle` | Container style |

## Project Structure

```
.
├── app/(tabs)/         # 7 demo tabs
│   ├── index.tsx
│   ├── portrait.tsx
│   ├── landscape.tsx
│   ├── mini.tsx
│   ├── external.tsx
│   ├── minimal.tsx
│   ├── help.tsx
│   └── _layout.tsx
├── constants/planets.ts
├── app.json
├── package.json
└── metro.config.js
```

## Troubleshooting

### Issues with native module or prebuild
```bash
npm run clear
npm run tvos
```

### Search UI doesn't appear
Run on Apple TV simulator, not iPhone/iPad.

## Learn More

- [expo-tvos-search on GitHub](https://github.com/keiver/expo-tvos-search)
- [expo-tvos-search on npm](https://www.npmjs.com/package/expo-tvos-search)
- [React Native tvOS](https://github.com/react-native-tvos/react-native-tvos)
- [Expo Prebuild](https://docs.expo.dev/workflow/prebuild/)

## License

MIT
