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

export default function SunsetSearchScreen() {
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
      colors={['#1a0f29', '#2d1b3d', '#3d1f4f']}
      locations={[0, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
      pointerEvents="box-none"
    >
      <TvosSearchView
        results={results}
        columns={5}
        placeholder="Discover planets..."
        isLoading={isLoading}
        topInset={insets.top + 80}
        onSearch={handleSearch}
        onSelectItem={handleSelect}
        style={{ flex: 1 }}
        emptyStateText="Search for planets"
        searchingText="Searching..."
        noResultsText="No planets found"
        noResultsHintText="Try searching for: mars, earth, giant, ice"
        textColor="#ffd4a3"
        accentColor="#ff6b35"
        cardWidth={240}
        cardHeight={360}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d1b3d',
  },
});
