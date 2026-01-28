import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {
  TvosSearchView,
  isNativeSearchAvailable,
  type SearchResult,
} from 'expo-tvos-search';
import { PLANETS } from '@/constants/planets';

export default function ExternalTitleSearchScreen() {
  const [results, setResults] = useState<SearchResult[]>(
    PLANETS.filter(p =>
      p.title.toLowerCase().includes('planet') ||
      p.subtitle?.toLowerCase().includes('planet')
    )
  );
  const [isLoading, setIsLoading] = useState(false);
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
      <TvosSearchView
        results={results}
        columns={4}
        placeholder="Search planets..."
        isLoading={isLoading}
        topInset={insets.top + 80}
        onSearch={handleSearch}
        onSelectItem={handleSelect}
        onSearchFieldFocused={() => console.log("[External] Search field focused")}
        onSearchFieldBlurred={() => console.log("[External] Search field blurred")}
        style={{flex: 1}}
        emptyStateText="Search for planets"
        searchingText="Searching..."
        noResultsText="No planets found"
        noResultsHintText="Try a different search term"
        textColor="#b8d4e8"
        accentColor="#FBBF24"
        cardWidth={320}
        cardHeight={480}
        showTitle={true}
        showSubtitle={true}
        showTitleOverlay={false}
        showFocusBorder={true}
        enableMarquee={false}
        cardPadding={25}
        cardMargin={40}
        imageContentMode="fit"
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2332',
  },
});
