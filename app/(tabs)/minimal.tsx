import { useState } from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import {
  TvosSearchView,
  isNativeSearchAvailable,
  type SearchResult,
} from 'expo-tvos-search';

const PLANETS: SearchResult[] = [
  {
    id: 'mercury',
    title: 'Mercury',
    subtitle: 'Smallest planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/400px-Mercury_in_true_color.jpg',
  },
  {
    id: 'venus',
    title: 'Venus',
    subtitle: 'Hottest planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/400px-Venus-real_color.jpg',
  },
  {
    id: 'earth',
    title: 'Earth',
    subtitle: 'Our home',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/400px-The_Earth_seen_from_Apollo_17.jpg',
  },
  {
    id: 'mars',
    title: 'Mars',
    subtitle: 'The red planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/400px-OSIRIS_Mars_true_color.jpg',
  },
  {
    id: 'jupiter',
    title: 'Jupiter',
    subtitle: 'Largest planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jupiter_New_Horizons.jpg/400px-Jupiter_New_Horizons.jpg',
  },
  {
    id: 'saturn',
    title: 'Saturn',
    subtitle: 'Ringed giant',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/400px-Saturn_during_Equinox.jpg',
  },
  {
    id: 'uranus',
    title: 'Uranus',
    subtitle: 'Ice giant',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/400px-Uranus2.jpg',
  },
  {
    id: 'neptune',
    title: 'Neptune',
    subtitle: 'Windiest planet',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/400px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
  },
];

export default function MinimalSearchScreen() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <View style={styles.container}>
      <TvosSearchView
        results={results}
        columns={4}
        placeholder="Search..."
        isLoading={isLoading}
        topInset={0}
        onSearch={handleSearch}
        onSelectItem={handleSelect}
        style={{ flex: 1 }}
        emptyStateText="Search for planets"
        searchingText="Searching..."
        noResultsText="No planets found"
        noResultsHintText="Try searching for: mars, earth, giant, ice"
        textColor="#1a1a1a"
        accentColor="#000000"
        cardWidth={300}
        cardHeight={450}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
