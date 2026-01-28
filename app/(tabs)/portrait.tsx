import { useState } from 'react';
import {Alert, StyleSheet, View, Text} from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {
  TvosSearchView,
  isNativeSearchAvailable,
  type SearchResult,
} from 'expo-tvos-search';
import { PLANETS } from '@/constants/planets';

export default function PortraitSearchScreen() {
  const [results, setResults] = useState<SearchResult[]>(
    PLANETS.filter(p =>
      p.title.toLowerCase().includes('planet') ||
      p.subtitle?.toLowerCase().includes('planet')
    )
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const insets = useSafeAreaInsets();

  const handleSearch = (event: { nativeEvent: { query: string } }) => {
    const { query } = event.nativeEvent;

    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const filtered = PLANETS.filter(
        planet =>
          planet.title.toLowerCase().includes(query.toLowerCase()) ||
          planet.subtitle?.toLowerCase().includes(query.toLowerCase()),
      );
      setResults(filtered);
      setIsLoading(false);
    }, 300);
  };

  const handleSelect = (event: { nativeEvent: { id: string } }) => {
    const planet = PLANETS.find(p => p.id === event.nativeEvent.id);
    if (planet) {
      Alert.alert(planet.title, planet.subtitle);
    }
  };

  if (!isNativeSearchAvailable()) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#0f172a", "#1e293b", "#0f172a"]}
      locations={[0, 0.5, 1]}
      style={styles.container}
      pointerEvents="box-none"
    >
      {isSearchFocused && (
        <View style={styles.focusIndicator}>
          <Text style={styles.focusIndicatorText}>Keyboard active</Text>
        </View>
      )}
      <TvosSearchView
        results={results}
        columns={4}
        placeholder="Search planets..."
        isLoading={isLoading}
        topInset={insets.top + 80}
        onSearch={handleSearch}
        onSelectItem={handleSelect}
        onSearchFieldFocused={() => setIsSearchFocused(true)}
        onSearchFieldBlurred={() => setIsSearchFocused(false)}
        style={{flex: 1}}
        emptyStateText="Search for planets"
        searchingText="Searching..."
        noResultsText="No planets found"
        noResultsHintText="Try a different search term"
        textColor="#E5E5E5"
        accentColor="#FBBF24"
        cardWidth={280}
        cardHeight={420}
        overlayTitleSize={18}
        showFocusBorder={false}
        enableMarquee={true}
        imageContentMode="fit"
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414"
  },
  focusIndicator: {
    position: "absolute",
    top: 24,
    right: 40,
    zIndex: 10,
    backgroundColor: "rgba(163, 229, 9, 0.8)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 442
  },
  focusIndicatorText: {
    color: "#141414",
    fontSize: 14,
    fontWeight: "600"
  }
})
