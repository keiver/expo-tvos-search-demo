import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs blurEffect="systemChromeMaterial">
      <NativeTabs.Trigger name="index">
        <Label>Help</Label>
        <Icon sf="info.circle.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="poster">
        <Label>Poster Only</Label>
        <Icon sf="photo" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="portrait">
        <Label>Portrait Cards</Label>
        <Icon sf="rectangle.portrait.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="landscape">
        <Label>Landscape Cards</Label>
        <Icon sf="rectangle.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="mini">
        <Label>Mini</Label>
        <Icon sf="square.grid.3x3" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="external">
        <Label>External Title</Label>
        <Icon sf="text.below.photo" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="minimal">
        <Label>Text Controlled</Label>
        <Icon sf="character.cursor.ibeam" />
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
