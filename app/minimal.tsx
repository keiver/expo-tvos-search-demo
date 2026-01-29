import { useState } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {
  TvosSearchView,
  isNativeSearchAvailable,
  type SearchResult,
} from 'expo-tvos-search';
import { PLANETS } from '@/constants/planets';

export default function TextControlledScreen() {
  const [results, setResults] = useState<SearchResult[]>(PLANETS);
  const [searchQuery, setSearchQuery] = useState('');
  const insets = useSafeAreaInsets();

  const handleSearch = (event: { nativeEvent: { query: string } }) => {
    const { query } = event.nativeEvent;
    setSearchQuery(query);

    if (!query.trim()) {
      setResults(PLANETS);
      return;
    }

    const filtered = PLANETS.filter(
      planet =>
        planet.title.toLowerCase().includes(query.toLowerCase()) ||
        planet.subtitle?.toLowerCase().includes(query.toLowerCase()),
    );
    setResults(filtered);
  };

  const handleSelect = (event: { nativeEvent: { id: string } }) => {
    const planet = PLANETS.find(p => p.id === event.nativeEvent.id);
    if (planet) {
      Alert.alert(planet.title, planet.subtitle);
      // Demonstrate controlled searchText by setting planet name
      const shortName = planet.title.split(' - ')[0] ?? planet.title;
      setSearchQuery(shortName);
    }
  };

  if (!isNativeSearchAvailable()) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackTitle}>Native Search Unavailable</Text>
        <Text style={styles.fallbackText}>
          The native tvOS search component is not available on this platform.
        </Text>
        <Text style={styles.fallbackHint}>
          Requires tvOS 15.0+, Expo SDK 51+, and expo prebuild.
        </Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={['#1a1a1a', '#2d2d2d', '#1a1a1a']}
      locations={[0, 0.5, 1]}
      style={styles.container}
      pointerEvents="box-none"
    >
      <TvosSearchView
        results={results}
        searchText={searchQuery}
        topInset={insets.top + 80}
        onSearch={handleSearch}
        onSelectItem={handleSelect}
        onError={(e) => console.warn(`[Minimal] Error [${e.nativeEvent.category}]: ${e.nativeEvent.message}`)}
        onValidationWarning={(e) => console.warn(`[Minimal] Warning [${e.nativeEvent.type}]: ${e.nativeEvent.message}`)}
        style={{ flex: 1 }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 40,
  },
  fallbackTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#e2e8f0',
    marginBottom: 16,
  },
  fallbackText: {
    fontSize: 18,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 12,
  },
  fallbackHint: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
});
