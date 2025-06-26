module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // [
    //   '@tamagui/babel-plugin',
    //   {
    //     components: ['@tamagui/core'],
    //     config: './tamagui.config.ts',
    //   },
    // ],
    // '@babel/plugin-transform-export-namespace-from', // Add this line
    'react-native-reanimated/plugin', // Keep this at the bottom
  ],
};
