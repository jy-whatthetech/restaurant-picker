module.exports = function override(config, env) {
    // Add polyfills for Node.js core modules
    config.resolve.fallback = {
        ...config.resolve.fallback,
        util: require.resolve('util/'),
    };

    return config;
}