module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            [
                'module-resolver',
                {
                    root: '.',
                    extensions: [
                        '.js',
                        '.jsx',
                        '.ts',
                        '.tsx',
                        '.android.js',
                        '.android.tsx',
                        '.ios.js',
                        '.ios.tsx',
                    ],
                    alias: {
                        '@components': './src/components',
                        '@screens': './src/screens',
                        '@routes': './src/routes',
                        '@hooks': './src/hooks',
                    },
                },
            ],
        ],
    };
};
