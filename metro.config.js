const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add the local expo-tvos-search package to watchFolders
const expoTvosSearchPath = path.resolve(__dirname, '../expo-tvos-search');

config.watchFolders = [expoTvosSearchPath];

module.exports = config;
