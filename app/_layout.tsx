import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="poster" />
        <Stack.Screen name="portrait" />
        <Stack.Screen name="landscape" />
        <Stack.Screen name="mini" />
        <Stack.Screen name="external" />
        <Stack.Screen name="minimal" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
