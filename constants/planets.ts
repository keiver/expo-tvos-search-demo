import { Image } from 'react-native';
import type { SearchResult } from 'expo-tvos-search';

export const PLANETS: SearchResult[] = [
  {
    id: 'mercury',
    title: 'Mercury - The Swift Messenger of the Solar System',
    subtitle: 'Smallest planet in our solar system, closest to the Sun with extreme temperature variations',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/mercury.webp')).uri,
  },
  {
    id: 'venus',
    title: 'Venus - Earth\'s Scorching Twin Sister',
    subtitle: 'Hottest planet with a thick toxic atmosphere and crushing surface pressure',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/venus.webp')).uri,
  },
  {
    id: 'earth',
    title: 'Earth - The Blue Marble of Life',
    subtitle: 'Our home planet, the only known world to harbor life in the universe',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/earth.webp')).uri,
  },
  {
    id: 'mars',
    title: 'Mars - The Red Planet of Ancient Rivers',
    subtitle: 'The red planet with polar ice caps, ancient river valleys, and potential for past life',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/mars.webp')).uri,
  },
  {
    id: 'jupiter',
    title: 'Jupiter - The Mighty Gas Giant King',
    subtitle: 'Largest planet in our solar system with the iconic Great Red Spot storm',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/jupiter.webp')).uri,
  },
  {
    id: 'saturn',
    title: 'Saturn - The Spectacular Ringed Wonder',
    subtitle: 'Ringed giant planet with thousands of beautiful icy rings and 146 known moons',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/saturn.webp')).uri,
  },
  {
    id: 'uranus',
    title: 'Uranus - The Tilted Ice Giant Mystery',
    subtitle: 'Ice giant planet rotating on its side with a unique pale blue-green color',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/uranus.webp')).uri,
  },
  {
    id: 'neptune',
    title: 'Neptune - The Deep Blue Windswept Giant',
    subtitle: 'Windiest planet in the solar system with supersonic winds and dark storm systems',
    imageUrl: Image.resolveAssetSource(require('../assets/planets/neptune.webp')).uri,
  },
];
