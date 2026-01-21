import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs blurEffect="systemChromeMaterial">
      <NativeTabs.Trigger name="index">
        <Label>Portrait • Noir</Label>
        <Icon sf="film.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="neon">
        <Label>Landscape • Arcade</Label>
        <Icon sf="gamecontroller.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="ocean">
        <Label>Portrait • Tide</Label>
        <Icon sf="drop.triangle.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="sunset">
        <Label>Portrait • Aurora</Label>
        <Icon sf="sparkles" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="minimal">
        <Label>Portrait • Pure</Label>
        <Icon sf="circle" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="help">
        <Label>Help</Label>
        <Icon sf="info.circle.fill" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
