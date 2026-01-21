import type { SearchResult } from 'expo-tvos-search';

export const PLANETS: SearchResult[] = [
  {
    id: 'mercury',
    title: 'Mercury',
    subtitle: 'Smallest planet',
    imageUrl: require('@/assets/planets/mercury.png'),
  },
  {
    id: 'venus',
    title: 'Venus',
    subtitle: 'Hottest planet',
    imageUrl: require('@/assets/planets/venus.png'),
  },
  {
    id: 'earth',
    title: 'Earth',
    subtitle: 'Our home',
    imageUrl: require('@/assets/planets/earth.png'),
  },
  {
    id: 'mars',
    title: 'Mars',
    subtitle: 'The red planet',
    imageUrl: require('@/assets/planets/mars.png'),
  },
  {
    id: 'jupiter',
    title: 'Jupiter',
    subtitle: 'Largest planet',
    imageUrl: require('@/assets/planets/jupiter.png'),
  },
  {
    id: 'saturn',
    title: 'Saturn',
    subtitle: 'Ringed giant',
    imageUrl: require('@/assets/planets/saturn.png'),
  },
  {
    id: 'uranus',
    title: 'Uranus',
    subtitle: 'Ice giant',
    imageUrl: require('@/assets/planets/uranus.png'),
  },
  {
    id: 'neptune',
    title: 'Neptune',
    subtitle: 'Windiest planet',
    imageUrl: require('@/assets/planets/neptune.png'),
  },
];
