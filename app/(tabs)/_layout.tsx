import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs blurEffect="systemChromeMaterial">
      <NativeTabs.Trigger name="index">
        <Label>Classic</Label>
        <Icon sf="sparkles.tv.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="neon">
        <Label>Neon</Label>
        <Icon sf="bolt.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="ocean">
        <Label>Ocean</Label>
        <Icon sf="water.waves" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="sunset">
        <Label>Sunset</Label>
        <Icon sf="sunset.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="minimal">
        <Label>Minimal</Label>
        <Icon sf="square.fill" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
