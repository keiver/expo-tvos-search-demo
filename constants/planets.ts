import { Image } from 'react-native';
import type { SearchResult } from 'expo-tvos-search';

export const PLANETS: SearchResult[] = [
  {
    id: 'mercury',
    title: 'Mercury',
    subtitle: 'Smallest planet',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/mercury.png')).uri,
  },
  {
    id: 'venus',
    title: 'Venus',
    subtitle: 'Hottest planet',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/venus.png')).uri,
  },
  {
    id: 'earth',
    title: 'Earth',
    subtitle: 'Our home',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/earth.png')).uri,
  },
  {
    id: 'mars',
    title: 'Mars',
    subtitle: 'The red planet',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/mars.png')).uri,
  },
  {
    id: 'jupiter',
    title: 'Jupiter',
    subtitle: 'Largest planet',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/jupiter.png')).uri,
  },
  {
    id: 'saturn',
    title: 'Saturn',
    subtitle: 'Ringed giant',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/saturn.png')).uri,
  },
  {
    id: 'uranus',
    title: 'Uranus',
    subtitle: 'Ice giant',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/uranus.png')).uri,
  },
  {
    id: 'neptune',
    title: 'Neptune',
    subtitle: 'Windiest planet',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/neptune.png')).uri,
  },
];
