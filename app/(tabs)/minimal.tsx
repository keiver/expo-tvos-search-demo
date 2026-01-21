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

export default function MinimalSearchScreen() {
  const [results, setResults] = useState<SearchResult[]>([]);
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
      colors={['#2a2a2a', '#252525', '#2a2a2a']}
      locations={[0, 0.5, 1]}
      style={styles.container}
      pointerEvents="box-none"
    >
      <TvosSearchView
        results={results}
        columns={4}
        placeholder="Search..."
        isLoading={isLoading}
        topInset={insets.top + 80}
        onSearch={handleSearch}
        onSelectItem={handleSelect}
        style={{ flex: 1 }}
        emptyStateText="Search for planets"
        searchingText="Searching..."
        noResultsText="No planets found"
        noResultsHintText="Try searching for: mars, earth, giant, ice"
        textColor="#e8e8e8"
        accentColor="#666666"
        cardWidth={300}
        cardHeight={450}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
