import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HelpScreen() {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#1e3a8a', '#1e40af', '#3b82f6']}
      locations={[0, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.contentContainer,
          { paddingTop: insets.top + 40 },
        ]}
      >
        <Text style={styles.title}>expo-tvos-search</Text>
        <Text style={styles.subtitle}>
          Native tvOS Search UI for Expo & React Native
        </Text>

        <View style={styles.columnsContainer}>
          {/* Features Column */}
          <View style={styles.column}>
            <Text style={styles.columnTitle}>Features</Text>

            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={24} color="#60d394" />
              <Text style={styles.featureText}>Native SwiftUI integration</Text>
            </View>

            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={24} color="#60d394" />
              <Text style={styles.featureText}>
                Focus management for tvOS
              </Text>
            </View>

            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={24} color="#60d394" />
              <Text style={styles.featureText}>
                Customizable styling (colors, dimensions)
              </Text>
            </View>

            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={24} color="#60d394" />
              <Text style={styles.featureText}>Grid layouts (1-10 columns)</Text>
            </View>

            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={24} color="#60d394" />
              <Text style={styles.featureText}>
                Loading & empty states
              </Text>
            </View>

            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={24} color="#60d394" />
              <Text style={styles.featureText}>Image support with caching</Text>
            </View>

            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={24} color="#60d394" />
              <Text style={styles.featureText}>
                TypeScript type definitions
              </Text>
            </View>

            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={24} color="#60d394" />
              <Text style={styles.featureText}>
                Expo managed workflow support
              </Text>
            </View>
          </View>

          {/* Quick Start Column */}
          <View style={styles.column}>
            <Text style={styles.columnTitle}>Quick Start</Text>

            <View style={styles.codeBlock}>
              <Text style={styles.codeComment}>
                {`// Install the package`}
              </Text>
              <Text style={styles.code}>npm install expo-tvos-search</Text>

              <Text style={[styles.codeComment, styles.codeSpacing]}>
                {`// Import and use in your component`}
              </Text>
              <Text style={styles.code}>
                {`import { TvosSearchView } from 'expo-tvos-search';`}
              </Text>

              <Text style={[styles.code, styles.codeSpacing]}>
                {`<TvosSearchView`}
              </Text>
              <Text style={styles.code}>{`  results={searchResults}`}</Text>
              <Text style={styles.code}>{`  columns={4}`}</Text>
              <Text style={styles.code}>{`  placeholder="Search..."`}</Text>
              <Text style={styles.code}>{`  onSearch={handleSearch}`}</Text>
              <Text style={styles.code}>{`  onSelectItem={handleSelect}`}</Text>
              <Text style={styles.code}>{`  textColor="#E5E5E5"`}</Text>
              <Text style={styles.code}>{`  accentColor="#E50914"`}</Text>
              <Text style={styles.code}>{`  cardWidth={280}`}</Text>
              <Text style={styles.code}>{`  cardHeight={420}`}</Text>
              <Text style={styles.code}>{`/>`}</Text>
            </View>

            <Text style={[styles.columnTitle, { marginTop: 32 }]}>
              Result Interface
            </Text>

            <View style={styles.codeBlock}>
              <Text style={styles.code}>{`interface SearchResult {`}</Text>
              <Text style={styles.code}>{`  id: string;`}</Text>
              <Text style={styles.code}>{`  title: string;`}</Text>
              <Text style={styles.code}>{`  subtitle?: string;`}</Text>
              <Text style={styles.code}>{`  imageUrl?: string | number;`}</Text>
              <Text style={styles.code}>{`}`}</Text>
            </View>
          </View>

          {/* Info Column */}
          <View style={styles.column}>
            <Text style={styles.columnTitle}>GitHub Repository</Text>
            <Text style={styles.infoText}>
              Visit the repository for full documentation, examples, and source
              code:
            </Text>
            <Text style={styles.link}>
              github.com/keiver/expo-tvos-search
            </Text>

            <Text style={[styles.columnTitle, { marginTop: 40 }]}>
              This Demo
            </Text>
            <Text style={styles.infoText}>
              This app demonstrates 5 themed search interfaces showcasing
              different styling options:
            </Text>

            <View style={styles.themeList}>
              <View style={styles.themeItem}>
                <Ionicons name="film" size={20} color="#E50914" />
                <Text style={styles.themeText}>Portrait • Noir</Text>
              </View>

              <View style={styles.themeItem}>
                <Ionicons name="game-controller" size={20} color="#ff00ff" />
                <Text style={styles.themeText}>Landscape • Arcade</Text>
              </View>

              <View style={styles.themeItem}>
                <Ionicons name="water" size={20} color="#00d9ff" />
                <Text style={styles.themeText}>Portrait • Tide</Text>
              </View>

              <View style={styles.themeItem}>
                <Ionicons name="sparkles" size={20} color="#ff6b35" />
                <Text style={styles.themeText}>Portrait • Aurora</Text>
              </View>

              <View style={styles.themeItem}>
                <Ionicons name="ellipse" size={20} color="#666666" />
                <Text style={styles.themeText}>Portrait • Pure</Text>
              </View>
            </View>

            <Text style={[styles.columnTitle, { marginTop: 40 }]}>
              Requirements
            </Text>
            <Text style={styles.infoText}>• Expo SDK 54+</Text>
            <Text style={styles.infoText}>• react-native-tvos 0.77+</Text>
            <Text style={styles.infoText}>• Apple TV simulator or device</Text>
            <Text style={styles.infoText}>• macOS for development</Text>

            <Text style={[styles.infoText, { marginTop: 40, fontStyle: 'italic', opacity: 0.9 }]}>
              Built with ❤️ for tvOS developers
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 80,
    paddingBottom: 80,
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#e0e7ff',
    marginBottom: 60,
    textAlign: 'center',
  },
  columnsContainer: {
    flexDirection: 'row',
    gap: 60,
  },
  column: {
    flex: 1,
  },
  columnTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  featureText: {
    fontSize: 20,
    color: '#e0e7ff',
  },
  codeBlock: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 24,
    borderRadius: 12,
  },
  code: {
    fontFamily: 'Courier New',
    fontSize: 16,
    color: '#a5f3fc',
    lineHeight: 24,
  },
  codeComment: {
    fontFamily: 'Courier New',
    fontSize: 16,
    color: '#94a3b8',
    lineHeight: 24,
  },
  codeSpacing: {
    marginTop: 16,
  },
  infoText: {
    fontSize: 20,
    color: '#e0e7ff',
    marginBottom: 12,
    lineHeight: 28,
  },
  link: {
    fontSize: 22,
    color: '#60d394',
    fontWeight: '600',
    marginTop: 12,
  },
  themeList: {
    marginTop: 16,
    gap: 12,
  },
  themeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  themeText: {
    fontSize: 20,
    color: '#e0e7ff',
  },
});
