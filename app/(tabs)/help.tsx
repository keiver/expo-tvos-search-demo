import { View, Text, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const isTV = Platform.isTV;

export default function HelpScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0f172a', '#1e293b', '#0f172a']}
        locations={[0, 0.5, 1]}
        style={styles.gradient}
      >
        {/* Ambient Glows */}
        <View style={[styles.glow, styles.glowTop]} />
        <View style={[styles.glow, styles.glowBottom]} />

        {/* Main Content - Two Columns */}
        <View style={[styles.content, { paddingTop: insets.top + (isTV ? 80 : 60) }]}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {/* Hero Section */}
            <View style={styles.hero}>
              <View style={styles.iconContainer}>
                <Ionicons name="tv" size={isTV ? 80 : 60} color="#38bdf8" />
              </View>
              <View style={styles.heroText}>
                <Text style={styles.title}>expo-tvos-search</Text>
                <Text style={styles.subtitle}>
                  Native tvOS Search UI for React Native
                </Text>
              </View>
            </View>

            {/* Feature Pills */}
            <View style={styles.featurePills}>
              {[
                { icon: 'search', label: 'Native Search' },
                { icon: 'grid', label: 'Grid Layout' },
                { icon: 'color-palette', label: 'Customizable' },
                { icon: 'flash', label: 'Performant' },
              ].map((feature, index) => (
                <View key={index} style={styles.pill}>
                  <Ionicons name={feature.icon as any} size={20} color="#38bdf8" />
                  <Text style={styles.pillText}>{feature.label}</Text>
                </View>
              ))}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>v1.2.3</Text>
              <Text style={styles.footerText}>•</Text>
              <Text style={styles.footerText}>Built with Expo</Text>
            </View>
          </View>

          {/* Right Column - Info Card */}
          <View style={styles.rightColumn}>
            <View style={styles.card}>
              <LinearGradient
                colors={['rgba(56, 189, 248, 0.1)', 'rgba(59, 130, 246, 0.05)']}
                style={styles.cardGradient}
              >
                <View style={styles.cardHeader}>
                  <Ionicons name="information-circle" size={32} color="#38bdf8" />
                  <Text style={styles.cardTitle}>About This Demo</Text>
                </View>

                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>
                    This app demonstrates the expo-tvos-search library with various card layouts:
                  </Text>

                  <View style={styles.tabsList}>
                    {[
                      { name: 'Default', desc: 'Standard 4-column grid' },
                      { name: 'Portrait', desc: 'Tall cards with overlay' },
                      { name: 'Landscape', desc: 'Wide 16:9 cards' },
                      { name: 'Mini', desc: 'Compact 5-column grid' },
                      { name: 'External Title', desc: 'Title below cards' },
                    ].map((tab, index) => (
                      <View key={index} style={styles.tabItem}>
                        <View style={styles.tabDot} />
                        <View style={styles.tabTextContainer}>
                          <Text style={styles.tabName}>{tab.name}</Text>
                          <Text style={styles.tabDesc}>{tab.desc}</Text>
                        </View>
                      </View>
                    ))}
                  </View>

                  <Text style={styles.cardFooter}>
                    Navigate between tabs using your remote's trackpad or arrow buttons.
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
  },
  glow: {
    position: 'absolute',
    width: isTV ? 600 : 400,
    height: isTV ? 600 : 400,
    borderRadius: isTV ? 300 : 200,
    opacity: 0.15,
  },
  glowTop: {
    backgroundColor: '#38bdf8',
    top: -200,
    right: -100,
  },
  glowBottom: {
    backgroundColor: '#3b82f6',
    bottom: -200,
    left: -100,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: isTV ? 100 : 48,
    paddingBottom: isTV ? 80 : 60,
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'space-between',
    paddingRight: isTV ? 60 : 30,
  },
  rightColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: isTV ? 32 : 24,
  },
  heroText: {
    flex: 1,
  },
  title: {
    fontSize: isTV ? 48 : 36,
    fontWeight: '700',
    color: '#f1f5f9',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: isTV ? 22 : 18,
    color: '#94a3b8',
    lineHeight: isTV ? 32 : 26,
  },
  featurePills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: isTV ? 16 : 12,
    marginTop: isTV ? 40 : 30,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
    borderRadius: 20,
    paddingHorizontal: isTV ? 20 : 16,
    paddingVertical: isTV ? 12 : 10,
    gap: 8,
  },
  pillText: {
    fontSize: isTV ? 18 : 16,
    color: '#38bdf8',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: isTV ? 40 : 30,
  },
  footerText: {
    fontSize: isTV ? 16 : 14,
    color: '#64748b',
  },
  card: {
    width: '80%',
    maxWidth: isTV ? 600 : 400,
    overflow: 'hidden',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.2)',
  },
  cardGradient: {
    padding: isTV ? 40 : 32,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: isTV ? 24 : 20,
  },
  cardTitle: {
    fontSize: isTV ? 28 : 24,
    fontWeight: '600',
    color: '#f1f5f9',
  },
  cardContent: {
    gap: isTV ? 20 : 16,
  },
  cardText: {
    fontSize: isTV ? 18 : 16,
    color: '#cbd5e1',
    lineHeight: isTV ? 28 : 24,
  },
  tabsList: {
    gap: isTV ? 16 : 12,
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  tabDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#38bdf8',
    marginTop: isTV ? 10 : 8,
  },
  tabTextContainer: {
    flex: 1,
  },
  tabName: {
    fontSize: isTV ? 18 : 16,
    fontWeight: '600',
    color: '#e2e8f0',
    marginBottom: 4,
  },
  tabDesc: {
    fontSize: isTV ? 16 : 14,
    color: '#94a3b8',
    lineHeight: isTV ? 22 : 20,
  },
  cardFooter: {
    fontSize: isTV ? 16 : 14,
    color: '#64748b',
    fontStyle: 'italic',
    marginTop: isTV ? 8 : 4,
  },
});
