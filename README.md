# expo-tvos-search demo

<div align="center">

[![npm version](https://img.shields.io/npm/v/expo-tvos-search.svg?style=flat-square)](https://www.npmjs.com/package/expo-tvos-search)
[![npm downloads](https://img.shields.io/npm/dm/expo-tvos-search.svg?style=flat-square)](https://www.npmjs.com/package/expo-tvos-search)
[![License](https://img.shields.io/npm/l/expo-tvos-search.svg?style=flat-square)](https://github.com/keiver/expo-tvos-search/blob/main/LICENSE)

![Lowres Demo GIF](./demo-expo-tvos-search.gif)

</div>

A working demo app showcasing the [expo-tvos-search](https://github.com/keiver/expo-tvos-search) library on tvOS using Expo.

## What This Demo Shows

- Native tvOS search UI using SwiftUI `.searchable` modifier
- Customizable grid layouts (columns, card dimensions, spacing)
- Multiple card styles (portrait, landscape, mini, with/without overlays)
- Marquee text scrolling for long titles
- Loading states and empty/no results screens
- Selection handling and search callbacks
- Apple TV hardware keyboard support via focus callbacks (v1.3.2+)

## Demos

- **Poster** - Default 4-column grid with error monitoring
- **Portrait** - Tall cards with focus border and search field tracking
- **Landscape** - Wide 16:9 cards with custom state messages
- **Mini** - 5-column compact layout with marquee scrolling
- **External Title** - Titles below cards, marquee disabled
- **Minimal** - Programmatic searchText, availability fallback

Select a demo from the home screen to launch it. Press Menu on the remote to return — focus is restored to the last selected demo.

## Prerequisites

- macOS with Xcode installed
- Node.js 20+

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

**Tip:** Select the "Minimal" demo for the simplest setup.

## Code Examples

### Minimal - Simplest Setup
```tsx
<TvosSearchView
  results={results}
  topInset={insets.top + 80}
  onSearch={handleSearch}
  onSelectItem={handleSelect}
  style={{ flex: 1 }}
/>
```

### Default - 4-Column Grid
```tsx
<TvosSearchView
  results={results}
  columns={4}
  placeholder="Search planets..."
  isLoading={isLoading}
  topInset={insets.top + 80}
  onSearch={handleSearch}
  onSelectItem={handleSelect}
  emptyStateText="Search for planets"
  searchingText="Searching..."
  noResultsText="No planets found"
  noResultsHintText="Try a different search term"
  textColor="#e8e8e8"
  accentColor="#666666"
  cardWidth={300}
  cardHeight={450}
  showTitleOverlay={false}
  style={{ flex: 1 }}
/>
```

### Portrait - Tall Cards with Overlay
```tsx
<TvosSearchView
  results={results}
  columns={4}
  placeholder="Search planets..."
  isLoading={isLoading}
  topInset={insets.top + 80}
  onSearch={handleSearch}
  onSelectItem={handleSelect}
  emptyStateText="Search for planets"
  searchingText="Searching..."
  noResultsText="No planets found"
  noResultsHintText="Try a different search term"
  textColor="#E5E5E5"
  accentColor="#E50914"
  cardWidth={280}
  cardHeight={420}
  overlayTitleSize={18}
  style={{ flex: 1 }}
/>
```

### Landscape - Wide 16:9 Cards
```tsx
<TvosSearchView
  results={results}
  columns={3}
  placeholder="Search planets..."
  isLoading={isLoading}
  topInset={insets.top + 80}
  onSearch={handleSearch}
  onSelectItem={handleSelect}
  emptyStateText="Search for planets"
  searchingText="Searching..."
  noResultsText="No planets found"
  noResultsHintText="Try a different search term"
  textColor="#00ffff"
  accentColor="#ff00ff"
  cardWidth={500}
  cardHeight={280}
  style={{ flex: 1 }}
/>
```

### Mini - Compact 5-Column
```tsx
<TvosSearchView
  results={results}
  columns={5}
  placeholder="Search planets..."
  isLoading={isLoading}
  topInset={insets.top + 80}
  onSearch={handleSearch}
  onSelectItem={handleSelect}
  emptyStateText="Search for planets"
  searchingText="Searching..."
  noResultsText="No planets found"
  noResultsHintText="Try a different search term"
  textColor="#ffd4a3"
  accentColor="#ff6b35"
  cardWidth={240}
  cardHeight={360}
  style={{ flex: 1 }}
/>
```

### External - Titles Below Cards
```tsx
<TvosSearchView
  results={results}
  columns={4}
  placeholder="Search planets..."
  isLoading={isLoading}
  topInset={insets.top + 80}
  onSearch={handleSearch}
  onSelectItem={handleSelect}
  emptyStateText="Search for planets"
  searchingText="Searching..."
  noResultsText="No planets found"
  noResultsHintText="Try a different search term"
  textColor="#b8d4e8"
  accentColor="#FF0400"
  cardWidth={320}
  cardHeight={480}
  showTitle={true}
  showSubtitle={true}
  showTitleOverlay={false}
  cardPadding={25}
  cardMargin={40}
  style={{ flex: 1 }}
/>
```

## Structure

- `app/` - Home screen + 6 demo screens (flat stack layout, no tabs)
- `constants/planets.ts` - Sample data (8 planets)

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
