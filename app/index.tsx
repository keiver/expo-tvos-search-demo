import { useCallback, useRef, useState } from 'react';
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useFocusEffect } from 'expo-router';

const isTV = Platform.isTV;

const DEMOS = [
  { route: '/poster', name: 'Poster', desc: 'Basic setup, error monitoring' },
  { route: '/portrait', name: 'Portrait', desc: 'Focus border, search field tracking' },
  { route: '/landscape', name: 'Landscape', desc: 'Image fit mode, custom state messages' },
  { route: '/mini', name: 'Mini', desc: 'Marquee scrolling, compact grid' },
  { route: '/external', name: 'External Title', desc: 'Titles below cards, marquee disabled' },
  { route: '/minimal', name: 'Minimal', desc: 'Programmatic searchText, availability fallback' },
] as const;

function DemoMenuItem({
  demo,
  index,
  restoreFocus,
  onSelect,
}: {
  demo: (typeof DEMOS)[number];
  index: number;
  restoreFocus: boolean;
  onSelect: (index: number) => void;
}) {
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  return (
    <Pressable
      hasTVPreferredFocus={restoreFocus}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onPress={() => {
        onSelect(index);
        router.push(demo.route);
      }}
      style={[
        styles.demoItem,
        focused && styles.demoItemFocused,
      ]}
    >
      <View style={[styles.demoAccent, focused && styles.demoAccentFocused]} />
      <View style={styles.demoTextContainer}>
        <Text style={[styles.demoName, focused && styles.demoNameFocused]}>
          {demo.name}
        </Text>
        <Text style={[styles.demoDesc, focused && styles.demoDescFocused]}>
          {demo.desc}
        </Text>
      </View>
      <Ionicons
        name="chevron-forward"
        size={isTV ? 22 : 18}
        color={focused ? '#38bdf8' : '#334155'}
      />
    </Pressable>
  );
}

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const lastSelectedRef = useRef<number | null>(null);
  const [restoreIndex, setRestoreIndex] = useState<number | null>(null);

  useFocusEffect(
    useCallback(() => {
      if (lastSelectedRef.current !== null) {
        setRestoreIndex(lastSelectedRef.current);
      }
      return () => {
        setRestoreIndex(null);
      };
    }, [])
  );

  const handleSelect = useCallback((index: number) => {
    lastSelectedRef.current = index;
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0f172a", "#1e293b", "#0f172a"]} locations={[0, 0.5, 1]} style={styles.gradient}>
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
                <Text style={styles.subtitle}>Native tvOS Search UI for React Native</Text>
              </View>
            </View>

            {/* Feature Pills */}
            <View style={styles.featurePills}>
              {[
                { icon: "search", label: "Native Search" },
                { icon: "grid", label: "Grid Layout" },
                { icon: "color-palette", label: "Customizable" },
                { icon: "flash", label: "Performant" },
                { icon: "text", label: "Marquee Text" },
                { icon: "hardware-chip", label: "HW Keyboard" },
              ].map((feature, index) => (
                <View key={index} style={styles.pill}>
                  <Ionicons name={feature.icon as any} size={20} color="#38bdf8" />
                  <Text style={styles.pillText}>{feature.label}</Text>
                </View>
              ))}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>v1.4.0</Text>
              <Text style={styles.footerText}>•</Text>
              <Text style={styles.footerText}>Built with Expo</Text>
            </View>
          </View>

          {/* Right Column - Demo Menu */}
          <View style={styles.rightColumn}>
            <View style={styles.card}>
              <LinearGradient
                colors={["rgba(56, 189, 248, 0.1)", "rgba(59, 130, 246, 0.05)"]}
                style={styles.cardGradient}
              >
                <View style={styles.cardHeader}>
                  <Ionicons name="search" size={32} color="#38bdf8" />
                  <Text style={styles.cardTitle}>Demos</Text>
                </View>

                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>
                    Select a demo to explore:
                  </Text>

                  <View style={styles.demoList}>
                    {DEMOS.map((demo, index) => (
                      <DemoMenuItem
                        key={index}
                        demo={demo}
                        index={index}
                        restoreFocus={restoreIndex === index}
                        onSelect={handleSelect}
                      />
                    ))}
                  </View>

                  <Text style={styles.cardFooter}>
                    <Text style={{ color: "#38bdf8" }}> https://github.com/keiver/expo-tvos-search</Text>
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
    backgroundColor: "#0f172a",
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
  },
  glow: {
    position: "absolute",
    width: isTV ? 600 : 400,
    height: isTV ? 600 : 400,
    borderRadius: isTV ? 300 : 200,
    opacity: 0.15,
  },
  glowTop: {
    backgroundColor: "#38bdf8",
    top: -200,
    right: -100,
  },
  glowBottom: {
    backgroundColor: "#3b82f6",
    bottom: -200,
    left: -100,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: isTV ? 100 : 48,
    paddingBottom: isTV ? 80 : 60,
  },
  leftColumn: {
    flex: 1,
    justifyContent: "space-between",
    paddingRight: isTV ? 60 : 30,
  },
  rightColumn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hero: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: isTV ? 32 : 24,
  },
  heroText: {
    flex: 1,
  },
  title: {
    fontSize: isTV ? 48 : 36,
    fontWeight: "700",
    color: "#f1f5f9",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: isTV ? 22 : 18,
    color: "#94a3b8",
    lineHeight: isTV ? 32 : 26,
  },
  featurePills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: isTV ? 16 : 12,
    marginTop: isTV ? 40 : 30,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(56, 189, 248, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(56, 189, 248, 0.3)",
    borderRadius: 9999,
    paddingHorizontal: isTV ? 20 : 16,
    paddingVertical: isTV ? 12 : 10,
    gap: 8,
  },
  pillText: {
    fontSize: isTV ? 18 : 16,
    color: "#38bdf8",
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    gap: 12,
    marginTop: isTV ? 40 : 30,
  },
  footerText: {
    fontSize: isTV ? 16 : 14,
    color: "#64748b",
  },
  card: {
    width: "80%",
    maxWidth: isTV ? 600 : 400,
    overflow: "hidden",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(56, 189, 248, 0.2)",
  },
  cardGradient: {
    padding: isTV ? 40 : 32,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: isTV ? 24 : 20,
  },
  cardTitle: {
    fontSize: isTV ? 28 : 24,
    fontWeight: "600",
    color: "#f1f5f9",
  },
  cardContent: {
    gap: isTV ? 20 : 16,
  },
  cardText: {
    fontSize: isTV ? 18 : 16,
    color: "#cbd5e1",
    lineHeight: isTV ? 28 : 24,
  },
  demoList: {
    gap: isTV ? 4 : 3,
  },
  demoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: isTV ? 16 : 12,
    paddingHorizontal: isTV ? 18 : 14,
    borderRadius: 14,
    backgroundColor: "transparent",
  },
  demoItemFocused: {
    backgroundColor: "rgba(56, 189, 248, 0.08)",
  },
  demoAccent: {
    width: 3,
    height: "60%",
    borderRadius: 2,
    backgroundColor: "transparent",
    marginRight: isTV ? 16 : 12,
  },
  demoAccentFocused: {
    backgroundColor: "#38bdf8",
  },
  demoTextContainer: {
    flex: 1,
  },
  demoName: {
    fontSize: isTV ? 19 : 16,
    fontWeight: "600",
    color: "#94a3b8",
    marginBottom: 3,
    letterSpacing: 0.2,
  },
  demoNameFocused: {
    color: "#f1f5f9",
  },
  demoDesc: {
    fontSize: isTV ? 15 : 13,
    color: "#475569",
    lineHeight: isTV ? 20 : 18,
  },
  demoDescFocused: {
    color: "#94a3b8",
  },
  cardFooter: {
    fontSize: isTV ? 22 : 14,
    color: "#64748b",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: isTV ? 22 : 20,
    marginTop: isTV ? 8 : 4,
  },
});
