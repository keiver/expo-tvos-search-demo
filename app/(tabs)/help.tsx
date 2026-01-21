import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HelpScreen() {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#0f172a', '#1e293b', '#0f172a']}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 100 }
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.title}>expo-tvos-search</Text>
          <Text style={styles.subtitle}>Native tvOS Search Interface Demo</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tab Demonstrations</Text>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Default</Text>
            <Text style={styles.itemDescription}>
              Clean cards without overlay - perfect for minimalist designs
            </Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Portrait Cards</Text>
            <Text style={styles.itemDescription}>
              Standard portrait layout with blurred title overlay and marquee scrolling
            </Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Landscape Cards</Text>
            <Text style={styles.itemDescription}>
              Wide landscape format ideal for movie posters and video content
            </Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Mini</Text>
            <Text style={styles.itemDescription}>
              Compact grid layout for displaying many items at once
            </Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>External Title</Text>
            <Text style={styles.itemDescription}>
              Title and subtitle displayed below the card instead of overlay
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Features</Text>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>✨</Text>
            <Text style={styles.featureText}>Native tvOS blur material overlays</Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📱</Text>
            <Text style={styles.featureText}>Responsive grid layouts</Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🎯</Text>
            <Text style={styles.featureText}>Focus management & navigation</Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🔍</Text>
            <Text style={styles.featureText}>Real-time search filtering</Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📜</Text>
            <Text style={styles.featureText}>Marquee text scrolling</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Built with Expo & React Native tvOS</Text>
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
  content: {
    paddingHorizontal: 80,
    paddingBottom: 80,
  },
  header: {
    marginBottom: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 56,
    fontWeight: '700',
    color: '#f1f5f9',
    marginBottom: 16,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 24,
    color: '#94a3b8',
    fontWeight: '400',
  },
  section: {
    marginBottom: 50,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#e2e8f0',
    marginBottom: 30,
  },
  item: {
    marginBottom: 28,
  },
  itemTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#cbd5e1',
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 20,
    color: '#94a3b8',
    lineHeight: 30,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureIcon: {
    fontSize: 28,
    marginRight: 16,
  },
  featureText: {
    fontSize: 22,
    color: '#cbd5e1',
  },
  footer: {
    marginTop: 40,
    paddingTop: 40,
    borderTopWidth: 1,
    borderTopColor: '#334155',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    color: '#64748b',
  },
});
